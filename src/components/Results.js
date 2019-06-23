import React, { Component } from "react";

class Results extends Component {
  render() {
    const {
      optionOneCount,
      optionTwoCount,
      optionOne,
      optionTwo,
      answer
    } = this.props;
    const totalCount = optionOneCount + optionTwoCount;
    const optionOneRatio =
      (100 * optionOneCount) / (optionOneCount + optionTwoCount);
    const optionTwoRatio = 100 - optionOneRatio;

    return (
      <div>
        <h6>Results:</h6>
        <p className={answer === "optionOne" ? "selectedAnswer" : ""}>
          {optionOne} | {`${optionOneCount} out of ${totalCount} votes (%${optionOneRatio})`}
        </p>
        <p className={answer === "optionTwo" ? "selectedAnswer" : ""}>
          {optionTwo} | {`${optionTwoCount} out of ${totalCount} votes (%${optionTwoRatio})`}
        </p>
      </div>
    );
  }
}

export default Results;
