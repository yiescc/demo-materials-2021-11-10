import { CSSProperties, PropsWithChildren } from 'react';
import { IconTypes } from './type';
import './index.scss';
export interface IconProps {
    type: IconTypes;
    size?: number;
    className?: string;
    color?: string;
    unit?: 'px' | 'rpx' | 'rem' | 'vw';
    customSize?: boolean;
    style?: CSSProperties;
}
declare const _default: (props: PropsWithChildren<IconProps>) => JSX.Element;
export default _default;
