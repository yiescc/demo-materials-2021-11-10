import { createElement, useContext } from 'react';
import Icon from '../Icon';

import './navigationBar.scss';
import { storeStateCtx } from './store';

export default () => {
  const { name } = useContext(storeStateCtx);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className="wechat-office-account-navigation-bar"
    >
      <div className="wechat-office-account-navigation-bar-left">
        <Icon type="back" size={18} className="wechat-office-account-navigation-bar-icon-back" unit="px" />
      </div>
      <div className="wechat-office-account-navigation-bar-center">
        <b className="wechat-office-account-navigation-bar-title">{name}</b>
      </div>
      <div className="wechat-office-account-navigation-bar-right">
        <Icon size={18} type="setting" className="wechat-office-account-navigation-bar-icon-setting" unit="px" />
      </div>
    </div>
  );
};
