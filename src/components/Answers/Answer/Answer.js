import React from 'react';
import styles from './Answer.module.css';

const answer = props => {
  const colorChange =
    props.correctAnswer === props.answerContent
      ? `${styles.correct}`
      : `${styles.wrong}`;
  const hide = props.hide ? { visibility: 'hidden' } : null;
  return (
    <div style={hide} className={styles.AnswerBox}>
      <input
        id={props.answerContent}
        type="checkbox"
        onChange={props.click}
        disabled={props.disabled}
        onClick={props.disableAnswers}
      />
      <label className={colorChange} htmlFor={props.answerContent}>
        <span>{props.answerOrder}:</span>
        <p>{props.answerContent}</p>
      </label>
    </div>
  );
};

export default answer;
