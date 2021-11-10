import { CSSProperties } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
declare function Template(props: {
    info: Wechat.Message.IMessageTemplateItem['data'];
    style?: CSSProperties;
    className?: string;
}): JSX.Element;
export default Template;
