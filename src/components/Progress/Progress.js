import React from 'react';

import styles from './Progress.module.css';

const progress = props => {
  const RATING = {
    15: '$ 1 000 000',
    14: '$ 500 000',
    13: '$ 250 000',
    12: '$ 125 000',
    11: '$ 64 000',
    10: '$ 32 000',
    9: '$ 16 000',
    8: '$ 8 000',
    7: '$ 4 000',
    6: '$ 2 000',
    5: '$ 1 000',
    4: '$ 500',
    3: '$ 300',
    2: '$ 200',
    1: '$ 100'
  };

  const list = Object.entries(RATING).map(([key, value]) => {
    const currentProgress =
      props.progress === key - 1 ? 'currentProgress' : null;
    return (
      <li key={key} className={styles[currentProgress]}>
        <span>{key}</span>
        {value}
      </li>
    );
  });
  return <ul className={styles}>{list}</ul>;
};

export default progress;
