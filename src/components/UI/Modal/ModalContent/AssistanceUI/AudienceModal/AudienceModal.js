import React, { Component } from 'react';

import styles from './AudienceModal.module.css';

class AudienceModal extends Component {
  render() {
    const answersOrder = ['A', 'B', 'C', 'D'];
    let randomPercentages = [];

    function getRandomPercentages() {
      let total = 100;
      for (let i = 0; i < 4; i++) {
        if (i === 0) {
          randomPercentages.push(
            Math.floor(Math.random() * (100 - 50 + 1)) + 50
          );
          total -= randomPercentages[i];
        } else if (i === 3) {
          randomPercentages.push(total);
        } else {
          randomPercentages.push(Math.floor(Math.random() * total));
          total -= randomPercentages[i];
        }
      }
    }

    //swap places, so that in the place of the correct index is value of a highest percentage
    const swapIndexes = () => {
      getRandomPercentages();
      [randomPercentages[0], randomPercentages[this.props.correctIndex]] = [
        randomPercentages[this.props.correctIndex],
        randomPercentages[0]
      ];
    };
    swapIndexes();

    const chartBars = answersOrder.map((answer, index) => {
      return (
        <div
          key={answer}
          style={{ height: randomPercentages[index] + '%' }}
        ></div>
      );
    });

    return (
      <div className={styles.Audience}>
        <h2>Hall assistance:</h2>
        <div className={styles.Percentes}></div>
        <div className={styles.Chart}>{chartBars}</div>
        <div className={styles.Labels}>
          <p>A</p>
          <p>B</p>
          <p>C</p>
          <p>D</p>
        </div>
      </div>
    );
  }
}

export default AudienceModal;
