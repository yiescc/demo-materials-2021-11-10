import { createElement } from 'react';

import style from './StatusBar.module.scss';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className={style.StatusBar}
    >
      <div className={style.Left}>
        <time className={style.Time}>08:08</time>
      </div>
      <div className={style.Right}>
        <span className={style.RightIcon} />
      </div>
    </div>
  );
};
