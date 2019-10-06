import React from 'react';

import styles from './Assistance.module.css';
import Audience from './Audience/Audience';
import Elimination from './Elimination/Elimination';
import FriendCall from './FriendCall/FriendCall';

const assistance = props => {
  return (
    <div className={styles.Assistance}>
      <Audience
        showAudience={props.showAudience}
        disabled={props.usedAssistance.audience}
      />
      <FriendCall
        showFriendCall={props.showFriendCall}
        disabled={props.usedAssistance.friendCall}
      />
      <Elimination
        showElimination={props.showElimination}
        disabled={props.usedAssistance.elimination}
      />
    </div>
  );
};

export default assistance;
