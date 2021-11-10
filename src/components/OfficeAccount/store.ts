import { createContext } from 'react';
// import { IMenuItem } from '../../typings/menu';

export interface IMenuClickItem {
  type: 'click';
  name: string;
  key: string;
}
export interface IMenuMiniItem {
  type: 'miniprogram';
  name: string;
  url: string;
  appid: string;
  pagepath: string;
}

export interface IMenuViewItem {
  type: 'view';
  name: string;
  url: string;
}

export type IMenuItem =
  | (IMenuClickItem & { sub_button?: IMenuItem[] })
  | (IMenuMiniItem & { sub_button?: IMenuItem[] })
  | (IMenuViewItem & {
      sub_button?: IMenuItem[];
    });

export interface IStoreState {
  name: string;
  menu: IMenuItem[];
  currentMenuIdx?: number;
  currentSecondaryMenuIdx?: number;
}

export interface IStoreDispatcher {
  addMenu?: () => void;
  addSecondaryMenu?: (parentItemIdx: number) => void;
  chooseMenu?: (itemIdx: number) => void;
  chooseSecondaryMenu?: (itemIdx: number) => void;
}

export const storeStateDefault: IStoreState = {
  name: '',
  menu: [],
};

const storeStateCtx = createContext<IStoreState>(storeStateDefault);

const storeDispatcherCtx = createContext<IStoreDispatcher>({});

export { storeStateCtx, storeDispatcherCtx };
