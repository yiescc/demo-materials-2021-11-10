import { CSSProperties } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
declare function Subscribe(props: {
    info: Wechat.Message.IMessageSubscribeItem['data'];
    style?: CSSProperties;
    className?: string;
    type: string;
    officialAvatar?: string;
    officialNickname?: string;
}): JSX.Element;
export default Subscribe;
