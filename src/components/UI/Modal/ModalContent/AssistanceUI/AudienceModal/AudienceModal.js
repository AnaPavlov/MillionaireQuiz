import React from 'react';

import styles from './AudienceModal.module.css';

const audienceModal = props => {
  const answersOrder = ['A', 'B', 'C', 'D'];
  let barHeight;
  let barHeightCorrect;

  const chartBars = answersOrder.map((answer, index) => {
    barHeight = Math.floor(Math.random() * 80);
    barHeightCorrect = Math.floor(Math.random() * (100 - 80 + 1)) + 80;

    return props.correctIndex === index ? (
      <div key={answer} style={{ height: barHeightCorrect + '%' }}></div>
    ) : (
      <div key={answer} style={{ height: barHeight + '%' }}></div>
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
};

export default audienceModal;
