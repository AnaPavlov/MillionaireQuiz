import React from 'react';

import styles from './Audience.module.css';

const audience = props => {
  return (
    <button
      onClick={props.showAudience}
      className={styles.Audience}
      disabled={props.disabled}
    ></button>
  );
};

export default audience;
