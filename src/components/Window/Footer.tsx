import { createElement, PropsWithChildren } from 'react';

import style from './Footer.module.scss';

export default (props: PropsWithChildren<{}>) => {
  return <footer className={style.Footer}>{props.children}</footer>;
};
