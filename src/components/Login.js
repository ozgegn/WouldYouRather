import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import LoginUserSelection from "./LoginUserSelection";
import { connect } from "react-redux";
import { setAuthedUser } from "../actions/authedUser";

class Login extends Component {
  state = {
    selectedUserId: null
  };

  onUserSelect = userId => {
    this.setState({
      selectedUserId: userId
    });
  };

  onSubmit = () => {
    const { dispatch } = this.props;
    const { selectedUserId } = this.state;
    if (selectedUserId !== null) {
      dispatch(setAuthedUser(selectedUserId));
    }
  };

  render() {
    return (
      <div className="justify-content-md-center">
        <Card className="text-center" border="info">
          <Card.Img variant="top" src={process.env.PUBLIC_URL + '/2450908.jpg'}  />
          <Card.Body>
            <Card.Title>Welcome to the Would You Rather App!</Card.Title>
            <Card.Text>Please sign in to continue</Card.Text>
            <LoginUserSelection
              className="full-width"
              onUserSelect={this.onUserSelect}
              selectedUser={this.state.selectedUserId}
            />
            <Button
              className="full-width"
              variant="success"
              onClick={this.onSubmit}
            >
              Sign in
            </Button>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default connect()(Login);
