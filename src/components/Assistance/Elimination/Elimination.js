import React from 'react';

import styles from './Elimination.module.css';

const elimination = props => {
  return (
    <button
      className={styles.Elimination}
      onClick={props.showElimination}
      disabled={props.disabled}
    ></button>
  );
};

export default elimination;
