import React from 'react';

import styles from './FriendModal.module.css';

const friendModal = props => {
  const answerOrder = ['A', 'B', 'C', 'D'];
  return (
    <div className={styles.FriendModal}>
      <span className={styles.span}>Your friend says:</span> I think that
      correct answer is {answerOrder[props.correctIndex]}.
    </div>
  );
};

export default friendModal;
