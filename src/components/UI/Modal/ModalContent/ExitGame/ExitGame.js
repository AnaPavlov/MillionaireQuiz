import React from 'react';

import Button from '../../../Button/Button';
import styles from '../NewGame/NewGame.module.css';

const exitGame = props => {
  return (
    <div className={styles.NewGame}>
      <h2>Are you sure you want to exit the game?</h2>
      <Button onClick={props.exitGame}>Yes</Button>
      <Button onClick={props.cancelHandler}>Cancel</Button>
    </div>
  );
};

export default exitGame;
