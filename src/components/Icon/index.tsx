import { createElement, CSSProperties, PropsWithChildren, useMemo } from 'react';
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

const minFontSize = 24;
// const pxToRem = (px: number) => {
//   return Number((px / 75).toFixed(4));
// };

export default (props: PropsWithChildren<IconProps>) => {
  const style = useMemo(() => {
    const { unit = 'rpx', size = minFontSize, customSize = false, color } = props;

    const result: CSSProperties = {};

    if (color) {
      result.color = color;
    }

    if (!customSize) {
      const width = size * 1.5;
      const fontSize = size;
      result.width = `${width}${unit}`;
      result.height = `${width}${unit}`;
      result.fontSize = `${fontSize}${unit}`;
    }

    return { ...result, ...props.style };
  }, [props]);

  return <i className={`cool-icon cool-icon-font-${props.type} ${props.className}`} style={style} />;
};
