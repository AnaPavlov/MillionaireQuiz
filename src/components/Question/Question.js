import React from 'react';

import styles from './Question.module.css';

const question = props => {
  return <div className={styles.QuestionBox}>{props.question}</div>;
};

export default question;
