import React from 'react';

import styles from './StartExit.module.css';
import Button from '../Button/Button';

const startExit = props => {
    let button = (props.questionsSet[0].question === "") ? <Button className={styles.StartExit} onClick={props.newGame} >New Game</Button> : <Button className={styles.StartExit} onClick={props.exitGame} >Exit</Button>;
    return button;
}

export default startExit;