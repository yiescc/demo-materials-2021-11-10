import { IMessageItemDispatcherInfo } from './Dispatcher';
import { Wechat } from 'wechat-mp-specs/typings/message';
import { CSSProperties, PropsWithChildren } from 'react';
declare const _default: {
    Pic: ({ imageUrl }: {
        imageUrl: string;
    }) => JSX.Element;
    Mini: ({ info, }: {
        info: Wechat.Message.IMessageMiniItem['data'];
    }) => JSX.Element;
    Text: ({ content }: {
        content: string | JSX.Element;
    }) => JSX.Element;
    News: ({ info, }: {
        info: Wechat.Message.IMessageNewsItem['data']['articles'][0];
    }) => JSX.Element;
    Subscribe: ({ info, className, style, type, officialAvatar, officialNickname, }: {
        info: Wechat.Message.IMessageSubscribeItem['data'];
        className?: string;
        style?: CSSProperties;
        type: string;
        officialAvatar?: string;
        officialNickname?: string;
    }) => JSX.Element;
    Template: ({ info, className, style, }: {
        info: Wechat.Message.IMessageTemplateItem['data'];
        className?: string;
        style?: CSSProperties;
    }) => JSX.Element;
    MpNews: ({ list, style, className, }: {
        list: Wechat.Message.IMessageMpNewsItem['data']['articles'];
        style?: CSSProperties;
        className?: string;
    }) => JSX.Element;
    Wrapper: ({ children, width, isMine, avatar, msgType, customContent, }: PropsWithChildren<{
        width?: number | string;
        avatar?: string;
        isMine?: boolean;
        msgType: Wechat.Message.IMessageItem['msgType'];
        customContent?: boolean;
    }>) => JSX.Element;
    Dispatcher: ({ item, }: {
        item: IMessageItemDispatcherInfo & {};
    }) => JSX.Element;
};
export default _default;
