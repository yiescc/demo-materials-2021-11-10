/// <reference types="react" />
import './menu.scss';
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
declare const _default: () => JSX.Element;
export default _default;
