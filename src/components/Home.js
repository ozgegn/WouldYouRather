import React, { Component } from "react";
import { connect } from "react-redux";
import { Tab, Tabs } from "react-bootstrap";
import QuestionItemHome from "./QuestionItemHome";

class Home extends Component {
  state = {
    selectedTab: "unanswered"
  };

  onSelect = eventKey => {
    this.setState({
      selectedTab: eventKey
    });
  };

  render() {
    const { selectedTab } = this.state;
    const { answeredQuestionIds, unAnsweredQuestionIds } = this.props;
    let questions = [];

    if (selectedTab === "unanswered") {
      questions = unAnsweredQuestionIds;
    } else if (selectedTab === "answered") {
      questions = answeredQuestionIds;
    }

    const listItems = questions.map(question => {
      return <QuestionItemHome key={question} id={question} />;
    });

    return (
      <div className="full-width">
        <Tabs
          defaultActiveKey="unanswered"
          onSelect={this.onSelect}
          className="justify-content-md-center"
        >
          <Tab eventKey="unanswered" title="Unanswered Questions" />
          <Tab eventKey="answered" title="Answered Questions" />
        </Tabs>
        <ul>{listItems}</ul>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }) {
  const answers = users[authedUser].answers;
  const answeredQuestionIds = Object.keys(answers).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );

  const questionIds = Object.keys(questions).sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unAnsweredQuestionIds = questionIds.filter(
    id => answers[id] === undefined
  );

  return {
    answeredQuestionIds: answeredQuestionIds,
    unAnsweredQuestionIds: unAnsweredQuestionIds
  };
}

export default connect(mapStateToProps)(Home);
