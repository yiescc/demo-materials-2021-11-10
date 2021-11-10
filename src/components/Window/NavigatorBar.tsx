import Icon from '../Icon';
import React, { createElement } from 'react';

import style from './NavigationBar.module.scss';

export default ({ title = '公众号' }: { title?: string }) => {
  return (
    <div
      className={style.NavigatorBar}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <b className={style.Name}>{title}</b>
      <div>
        <Icon type="back" size={18} className={style.BtnBackIcon} unit="px" />
      </div>
    </div>
  );
};
