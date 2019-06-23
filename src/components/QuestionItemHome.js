import React, { Component } from "react";
import { connect } from "react-redux";
import { Card, Button, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

class QuestionItemHome extends Component {
  render() {
    const { question, author, id } = this.props;

    return (
      <div className="center" style={{ width: '25%' }}>
        <Card className="text-center">
          <Card.Header>{author.name + " asks"}</Card.Header>
          <Card.Body>
            <Row>
              <Col sm={2}>
                <img
                  src={author.avatarURL}
                  alt={`Avatar of ${author.name}`}
                  className="avatarr"
                />
              </Col>
              <Col sm={10}>
                <Card.Title>Would You Rather</Card.Title>
                <Card.Text>{question.optionOne.text}</Card.Text>
                <Link to={`/questions/${id}`}>
                  <Button variant="primary">View Poll</Button>
                </Link>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

function mapStateToProps({ questions, users }, { id }) {
  const question = questions[id];
  const author = users[question.author];

  return {
    question: question,
    author: author
  };
}

export default connect(mapStateToProps)(QuestionItemHome);
