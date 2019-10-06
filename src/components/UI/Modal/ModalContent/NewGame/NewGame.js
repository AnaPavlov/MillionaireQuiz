import React from 'react';

import styles from './NewGame.module.css';
import Button from '../../../Button/Button';

const newGame = props => {
  return (
    <div className={styles.NewGame}>
      <h2>New Game?</h2>
      <Button onClick={props.confirmGame}>Yes</Button>
      <Button onClick={props.cancelHandler}>Cancel</Button>
    </div>
  );
};

export default newGame;
