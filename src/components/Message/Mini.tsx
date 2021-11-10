import React, { createElement } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';

import style from './Mini.module.scss';

export default ({ info }: { info: Wechat.Message.IMessageMiniItem['data'] }) => {
  return (
    <React.Fragment>
      <div className={style.Info}>
        <img referrerPolicy="no-referrer" className={style.Logo} src={info.logo} />
        <span className={style.Name}>{info.name}</span>
      </div>
      <b className={style.Title}>{info.title}</b>
      <i
        className={style.Pic}
        style={{
          backgroundImage: `url(${info.thumbUrl})`,
        }}
      />
      <i className={style.Split} />
      <div className={style.Mark}>
        <i className={style.MarkLogo} />
        <span className={style.MarkName}>小程序</span>
      </div>
    </React.Fragment>
  );
};
