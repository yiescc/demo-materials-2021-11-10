import { createElement } from 'react';

import './statusBar.scss';

export default () => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
      className="wechat-office-account-status-bar"
    >
      <div className="wechat-office-account-status-bar-left">
        <time className="wechat-office-account-status-bar-time">08:08</time>
      </div>
      <div className="wechat-office-account-status-bar-right">
        <span className="wechat-office-account-status-bar-right-icon" />
      </div>
    </div>
  );
};
