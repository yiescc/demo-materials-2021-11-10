import React, { createElement, PropsWithChildren, useMemo } from 'react';

import StatusBar from './StatusBar';
import NavigatorBar from './NavigatorBar';
import Footer from './Footer';
import Menu from './Menu';

import {
  IStoreDispatcher,
  IStoreState,
  storeDispatcherCtx,
  storeStateCtx,
  storeStateDefault,
} from './store';

import './index.scss';

export default function OfficeAccountUI(
  props: PropsWithChildren<{
    state?: IStoreState;
    menuDispatcher?: IStoreDispatcher;
  }>
) {
  const storeState = useMemo(
    () => props.state ?? storeStateDefault,
    [props.state]
  );
  const storeDispatch = useMemo<IStoreDispatcher>(() => {
    return {
      ...props.menuDispatcher,
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <storeDispatcherCtx.Provider value={storeDispatch}>
      <storeStateCtx.Provider value={storeState}>
        <div className="wechat-office-account">
          <header className="wechat-office-account-header">
            <StatusBar />
            <NavigatorBar />
          </header>
          <div className="wechat-office-account-container" />
          <Footer>
            <Menu />
          </Footer>
        </div>
      </storeStateCtx.Provider>
    </storeDispatcherCtx.Provider>
  );
}
