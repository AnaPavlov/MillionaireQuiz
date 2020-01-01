import React, { Component } from 'react';

import styles from './GameGenerator.module.css';
import Answers from '../../components/Answers/Answers';
import Question from '../../components/Question/Question';
import Progress from '../../components/Progress/Progress';
import QuestionsData from '../../questions.json';
import Modal from '../../components/UI/Modal/Modal';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import Assistance from '../../components/Assistance/Assistance';
import SwitchGameButton from '../../components/UI/SwitchGameButton/SwitchGameButton';

class StateContainer extends Component {
  state = {
    questionsSet: QuestionsData.questionsSet0,
    progress: 0,
    modalContent: null,
    isEliminationRequired: false,
    isGameActive: false,
    usedAssistance: {
      audience: false,
      friendCall: false,
      elimination: false
    }
  };

  componentDidMount() {
    this.newGameModal();
  }

  newGameModal = () => {
    this.setState({
      modalContent: 'newGame'
    });
  };

  exitGameModal = () => {
    this.setState({
      modalContent: 'exitGame'
    });
  };

  cancelHandler = () => {
    this.setState({
      modalContent: null
    });
  };

  startGame = () => {
    const randNum = Math.floor(Math.random() * 5) + 1,
      questionsSet = 'questionsSet' + randNum.toString();
    this.setState({
      questionsSet: QuestionsData[questionsSet],
      modalContent: null,
      isGameActive: true
    });
  };

  resetGame = () => {
    this.setState({
      questionsSet: QuestionsData.questionsSet0,
      progress: 0,
      modalContent: null,
      isEliminationRequired: false,
      isGameActive: false,
      usedAssistance: {
        audience: false,
        friendCall: false,
        elimination: false
      }
    });
  };

  answerHandler = index => {
    if (!this.state.isGameActive) {
      return;
    }
    const correctIndex = this.state.questionsSet[this.state.progress].correct;

    const correctAnswer = () => {
      this.setState(prevState => ({
        progress: prevState.progress + 1,
        isEliminationRequired: false
      }));
    };

    const wrongAnswer = () => {
      alert('You lost the game!');
      this.resetGame();
      this.setState({
        modalContent: 'newGame'
      });
    };

    if (index === correctIndex) {
      //check if it's end of the game
      if (this.state.progress === 14) {
        alert('Bravvooo! You won a $1 000 000!');
        return;
      }
      setTimeout(correctAnswer, 2000);
    } else {
      setTimeout(wrongAnswer, 2000);
    }
  };

  handleAudience = () => {
    if (!this.state.isGameActive) {
      return;
    }
    const usedAssistance = { ...this.state.usedAssistance };
    usedAssistance.audience = true;
    this.setState({
      modalContent: 'audience',
      usedAssistance: usedAssistance
    });
  };

  handleFriendCall = () => {
    if (!this.state.isGameActive) {
      return;
    }
    const usedAssistance = { ...this.state.usedAssistance };
    usedAssistance.friendCall = true;
    this.setState({
      modalContent: 'friendCall',
      usedAssistance: usedAssistance
    });
  };

  handleElimination = () => {
    if (!this.state.isGameActive) {
      return;
    }
    const usedAssistance = { ...this.state.usedAssistance };
    usedAssistance.elimination = true;
    this.setState({
      isEliminationRequired: true,
      usedAssistance: usedAssistance
    });
  };

  render() {
    const question = this.state.questionsSet[this.state.progress].question,
      answers = this.state.questionsSet[this.state.progress].content,
      correctIndex = this.state.questionsSet[this.state.progress].correct,
      correctAnswer = answers[correctIndex];

    return (
      <div className={styles.Container}>
        <Backdrop
          closeModal={this.cancelHandler}
          modalContent={this.state.modalContent}
        />
        <Modal
          show={this.state.modalContent}
          confirmGame={this.startGame}
          exitGame={this.resetGame}
          activeModal={this.state.modalContent}
          cancelHandler={this.cancelHandler}
          correctIndex={this.state.questionsSet[this.state.progress].correct}
        />
        <main>
          <SwitchGameButton
            newGame={this.newGameModal}
            exitGame={this.exitGameModal}
            questionsSet={this.state.questionsSet}
          />
          <section className={styles.gameMain}>
            <Question question={question} />
            <Answers
              answers={answers}
              answerClick={index => this.answerHandler(index)}
              isGameActive={this.state.isGameActive}
              correctAnswer={correctAnswer}
              correctIndex={
                this.state.questionsSet[this.state.progress].correct
              }
              isEliminationActive={this.state.isEliminationRequired}
            />
          </section>
        </main>
        <aside>
          <Assistance
            showAudience={this.handleAudience}
            showFriendCall={this.handleFriendCall}
            showElimination={this.handleElimination}
            usedAssistance={this.state.usedAssistance}
          />
          <Progress progress={this.state.progress} />
        </aside>
      </div>
    );
  }
}

export default StateContainer;
