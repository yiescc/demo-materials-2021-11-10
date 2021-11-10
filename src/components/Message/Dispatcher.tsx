import React, { createElement, useMemo } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';

import message from './index';

export type IMessageItemDispatcherInfo = Wechat.Message.IMessageItem & {
  isMine?: boolean;
  avatar?: string;
  subscribeType?: string;
  nickname?: string;
};

export default ({ item }: { item: IMessageItemDispatcherInfo }) => {
  const Component = useMemo(() => {
    switch (item.msgType) {
      case 'text':
        return <message.Text content={item.data.content} />;

      case 'image':
        return <message.Pic imageUrl={item.data.imageUrl} />;

      case 'miniProgramPage':
        return <message.Mini info={item.data} />;

      case 'mpNews':
        return <message.MpNews list={item.data.articles} />;

      case 'subscribe':
        return (
          <message.Subscribe
            info={item.data}
            type={item.subscribeType}
            officialAvatar={item.avatar}
            officialNickname={item.nickname}
          />
        );

      case 'template':
        return <message.Template info={item.data} />;

      case 'news':
        return <message.News info={item.data.articles[0]} />;

      default:
        return null;
    }
  }, [item]);

  return (
    <message.Wrapper
      avatar={item.avatar}
      isMine={item.isMine}
      msgType={item.msgType}
      customContent={
        item.msgType === 'mpNews' ||
        item.msgType === 'subscribe' ||
        item.msgType === 'template'
      }
    >
      {Component}
    </message.Wrapper>
  );
};
