import { PropsWithChildren } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
declare const _default: ({ children, width, isMine, avatar, msgType, customContent, }: PropsWithChildren<{
    width?: number | string;
    avatar?: string;
    isMine?: boolean;
    msgType: Wechat.Message.IMessageItem['msgType'];
    customContent?: boolean;
}>) => JSX.Element;
export default _default;
