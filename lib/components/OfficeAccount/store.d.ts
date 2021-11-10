/// <reference types="react" />
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
export declare type IMenuItem = (IMenuClickItem & {
    sub_button?: IMenuItem[];
}) | (IMenuMiniItem & {
    sub_button?: IMenuItem[];
}) | (IMenuViewItem & {
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
export declare const storeStateDefault: IStoreState;
declare const storeStateCtx: import("react").Context<IStoreState>;
declare const storeDispatcherCtx: import("react").Context<IStoreDispatcher>;
export { storeStateCtx, storeDispatcherCtx };
