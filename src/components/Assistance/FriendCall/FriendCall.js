import React from 'react';

import styles from './FriendCall.module.css';

const friendCall = props => {
  return (
    <button
      className={styles.FriendCall}
      onClick={props.showFriendCall}
      disabled={props.disabled}
    ></button>
  );
};

export default friendCall;
