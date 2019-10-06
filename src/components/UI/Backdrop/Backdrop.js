import React from 'react';

import styles from './Backdrop.module.css';

const backdrop = props => {
  return props.modalContent ? (
    <div onClick={props.closeModal} className={styles.Backdrop}></div>
  ) : null;
};

export default backdrop;
