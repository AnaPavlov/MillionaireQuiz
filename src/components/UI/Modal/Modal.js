import React from 'react';

import styles from './Modal.module.css';
import ModalContent from './ModalContent/ModalContent';

const modal = props => {
  return (
    <div
      className={styles.Modal}
      style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '' : '0'
      }}
    >
      <ModalContent {...props} />
    </div>
  );
};

export default modal;
