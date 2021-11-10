/// <reference types="react" />
import { IMenuButtonItem } from '../../typings/menu';
declare type IMenuItem = IMenuButtonItem;
export interface WeChatUIWindowMenuProps {
    menu?: IMenuItem[];
    menuExpanded?: boolean;
    currentMenuIdx?: number;
    currentSecondaryMenuIdx?: number;
    hideKeyboardSwitch?: boolean;
    chooseSecondaryMenu?: (parentIdx: number, itemIdx: number) => void;
    chooseMenu?: (itemIdx: number) => void;
    addMenu?: () => void;
    addSecondaryMenu?: (parentIdx: number) => void;
}
declare const _default: ({ menu, menuExpanded, currentMenuIdx, currentSecondaryMenuIdx, hideKeyboardSwitch, addMenu, chooseMenu, chooseSecondaryMenu, addSecondaryMenu, }: WeChatUIWindowMenuProps) => JSX.Element;
export default _default;
