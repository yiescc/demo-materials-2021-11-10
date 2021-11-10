import { createElement, PropsWithChildren } from 'react';

import './footer.scss';

export default (props: PropsWithChildren<{}>) => {
  return <footer className="wechat-office-account-footer">{props.children}</footer>;
};
