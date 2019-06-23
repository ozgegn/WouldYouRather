import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { handleAddQuestion } from "../actions/shared";
import { Redirect } from "react-router-dom";

class NewQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    isSubmitted: false
  };

  handleOptionOneChange = e => {
    const text = e.target.value;
    this.setState({
      optionOneText: text
    });
  };
  handleOptionTwoChange = e => {
    const text = e.target.value;
    this.setState({
      optionTwoText: text
    });
  };

  handleSubmit = () => {
    const { optionOneText, optionTwoText } = this.state;
    const { dispatch } = this.props;

    this.setState({
      isSubmitted: true
    });

    dispatch(handleAddQuestion({ optionOneText, optionTwoText }));
  };

  render() {
    const { optionOneText, optionTwoText, isSubmitted } = this.state;

    if (isSubmitted) {
      return <Redirect to="/" />;
    }

    return (
      <div className="center" style={{ width: "40%" }}>
        <Card className="text-center">
          <Card.Header>Create New Question</Card.Header>
          <Card.Body>
            <Card.Title>Please complete the question:</Card.Title>
            <Card.Text>Would you rather...</Card.Text>
            <form className="new-tweet" onSubmit={this.handleSubmit}>
              <textarea
                placeholder="Enter Option One Text Here"
                value={optionOneText}
                onChange={this.handleOptionOneChange}
                className="textarea"
              />
              <h6 className="text-center">Or</h6>
              <textarea
                placeholder="Enter Option Two Text Here"
                value={optionTwoText}
                onChange={this.handleOptionTwoChange}
                className="textarea"
              />
              <Button
                type="submit"
                disabled={optionOneText === "" || optionTwoText === ""}
              >
                Submit
              </Button>
            </form>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect()(NewQuestion);
