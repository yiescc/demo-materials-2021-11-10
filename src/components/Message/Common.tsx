import { createElement, PropsWithChildren } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
import ObjToClassName from '../../libs/ObjToClassName';

import style from './Common.module.scss';

const Content = ({
  isMine,
  msgType,
  children,
}: PropsWithChildren<{ isMine: boolean; msgType: Wechat.Message.IMessageItem['msgType'] }>) => {
  return (
    <div
      className={ObjToClassName({
        [style.Content]: msgType !== 'image',
        [style.ContentPic]: msgType === 'image',
        [style.ContentRight]: isMine && msgType !== 'image',
        [style.ContentLeft]: !isMine && msgType !== 'image',
        [style.ContentRightText]: isMine && msgType === 'text',
      })}
    >
      {children}
    </div>
  );
};

export default ({
  children,
  width,
  isMine = false,
  avatar = '',
  msgType,
  customContent,
}: PropsWithChildren<{
  width?: number | string;
  avatar?: string;
  isMine?: boolean;
  msgType: Wechat.Message.IMessageItem['msgType'];
  customContent?: boolean;
}>) => {
  return (
    <article
      className={ObjToClassName({
        [style.Wrapper]: true,
        [style.Center]: customContent,
        [style.Mine]: isMine && !customContent,
        [style.Other]: !isMine && !customContent,
      })}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
      }}
    >
      <div className={style.left} style={{ display: customContent ? 'none' : 'block' }}>
        <i className={style.avatar} style={{ backgroundImage: `url(${avatar})` }} />
      </div>
      <div className={style.right}>
        {customContent ? (
          children
        ) : (
          <Content isMine={isMine} msgType={msgType}>
            {children}
          </Content>
        )}
      </div>
    </article>
  );
};
