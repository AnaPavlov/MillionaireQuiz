import React from 'react';

import NewGame from './NewGame/NewGame';
import ExitGame from './ExitGame/ExitGame';
import AudienceModal from './AssistanceUI/AudienceModal/AudienceModal';
import FriendModal from './AssistanceUI/FriendModal/FriendModal';

const modalContent = props => {
  let content;
  switch (props.activeModal) {
    case 'newGame':
      content = (
        <NewGame
          confirmGame={props.confirmGame}
          cancelHandler={props.cancelHandler}
        />
      );
      break;
    case 'exitGame':
      content = (
        <ExitGame
          exitGame={props.exitGame}
          cancelHandler={props.cancelHandler}
        />
      );
      break;
    case 'audience':
      content = <AudienceModal correctIndex={props.correctIndex} />;
      break;
    case 'friendCall':
      content = <FriendModal correctIndex={props.correctIndex} />;
      break;

    default:
      content = null;
      break;
  }
  return content;
};

export default modalContent;
