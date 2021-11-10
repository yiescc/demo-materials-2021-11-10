import { default as Text } from './Text';

import { default as MpNews } from './MpNews';

import { default as Mini } from './Mini';

import { default as Pic } from './Pic';

import { default as News } from './News';

import { default as Wrapper } from './Common';

import { default as Subscribe } from './Subscribe';

import { default as Template } from './Template';

import { default as Dispatcher, IMessageItemDispatcherInfo } from './Dispatcher';
import { Wechat } from 'wechat-mp-specs/typings/message';
import { CSSProperties, PropsWithChildren } from 'react';

export default {
  Pic: Pic as ({ imageUrl }: { imageUrl: string }) => JSX.Element,
  Mini: Mini as ({ info }: { info: Wechat.Message.IMessageMiniItem['data'] }) => JSX.Element,
  Text: Text as ({ content }: { content: string | JSX.Element }) => JSX.Element,
  News: News as ({ info }: { info: Wechat.Message.IMessageNewsItem['data']['articles'][0] }) => JSX.Element,
  Subscribe: Subscribe as ({
    info,
    className,
    style,
    type,
    officialAvatar,
    officialNickname,
  }: {
    info: Wechat.Message.IMessageSubscribeItem['data'];
    className?: string;
    style?: CSSProperties;
    type: string;
    officialAvatar?: string;
    officialNickname?: string;
  }) => JSX.Element,
  Template: Template as ({
    info,
    className,
    style,
  }: {
    info: Wechat.Message.IMessageTemplateItem['data'];
    className?: string;
    style?: CSSProperties;
  }) => JSX.Element,
  MpNews: MpNews as ({
    list,
    style,
    className,
  }: {
    list: Wechat.Message.IMessageMpNewsItem['data']['articles'];
    style?: CSSProperties;
    className?: string;
  }) => JSX.Element,
  Wrapper: Wrapper as ({
    children,
    width,
    isMine,
    avatar,
    msgType,
    customContent,
  }: PropsWithChildren<{
    width?: number | string;
    avatar?: string;
    isMine?: boolean;
    msgType: Wechat.Message.IMessageItem['msgType'];
    customContent?: boolean;
  }>) => JSX.Element,
  Dispatcher: Dispatcher as ({ item }: { item: IMessageItemDispatcherInfo & {} }) => JSX.Element,
};
