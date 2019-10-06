import React, { Component } from 'react';

import styles from './Answers.module.css';
import Answer from './Answer/Answer';

class Answers extends Component {
  state = {
    disabled: false
  };

  componentDidUpdate() {
    //wait 2 sec to enable answers, because we have setTimeout function on checking the correctness of answer
    if (this.state.disabled === false) {
      return;
    }
    const enableAnswers = () => {
      this.setState({
        disabled: false
      });
    };
    setTimeout(enableAnswers, 2000);
  }

  dissableAnswers = () => {
    this.setState({
      disabled: true
    });
  };

  render() {
    const answersOrder = ['A', 'B', 'C', 'D'];

    let answer = this.props.answers.map((answ, index) => {
      return (
        <Answer
          answerContent={answ}
          answerOrder={answersOrder[index]}
          disabled={this.state.disabled}
          dissableAnswers={this.dissableAnswers}
          click={this.props.answerClick.bind(this, index)}
          key={answ}
          correctAnswer={this.props.correctAnswer}
        />
      );
    });

    //in case elimination assistance is required, hide two answers
    if (this.props.isEliminationActive) {
      const indexArray = [0, 1, 2, 3];
      indexArray.splice(this.props.correctIndex, 1);
      let randomIndex = indexArray[Math.floor(Math.random() * 3)];

      answer = this.props.answers.map((answ, index) => {
        let hide =
          index === this.props.correctIndex || index === randomIndex
            ? false
            : true;
        return (
          <Answer
            answerContent={answ}
            answerOrder={answersOrder[index]}
            disabled={this.state.disabled}
            dissableAnswers={this.dissableAnswers}
            click={this.props.answerClick.bind(this, index)}
            hide={hide}
            key={answ}
            correctAnswer={this.props.correctAnswer}
          />
        );
      });
    }
    return <div className={styles.Answers}>{answer}</div>;
  }
}

export default Answers;
