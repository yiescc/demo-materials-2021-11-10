/// <reference types="react" />
import { Wechat } from 'wechat-mp-specs/typings/message';
export declare type IMessageItemDispatcherInfo = Wechat.Message.IMessageItem & {
    isMine?: boolean;
    avatar?: string;
    subscribeType?: string;
    nickname?: string;
};
declare const _default: ({ item }: {
    item: IMessageItemDispatcherInfo;
}) => JSX.Element;
export default _default;
