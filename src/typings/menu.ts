import { Wechat } from 'wechat-mp-specs/typings/message';

/** 跳转网页 */
export interface IMenuViewButtonItem {
  type: 'view';
  name: string;
  data: {
    url: string;
  };
}

/** 打开小程序 */
export interface IMenuMiniprogramButtonItem {
  type: 'miniprogram';
  name: string;
  data: {
    appid: string;
    pagePath: string;
    /** 备用网址，可选 */
    url: string;
  };
}

/** 回复消息 */
export interface IMenuMessageButtonItem {
  type: 'message';
  name: string;
  data: {
    replyList: Wechat.Message.IMessageItem[];
  };
}

/** 模拟关键字 */
export interface IMenuKeywordButtonItem {
  type: 'keyword';
  name: string;
  data: {
    keywordId: number;
  };
}

/** 一级菜单 */
export interface IMenuParentButtonItem {
  name: string;
  type: 'parent';
  data: {};
  subButton: IMenuButtonItem[];
}

/** 自定义菜单按钮Item */
export type IMenuButtonItem =
  | IMenuViewButtonItem
  | IMenuKeywordButtonItem
  | IMenuMiniprogramButtonItem
  | IMenuMessageButtonItem
  | IMenuParentButtonItem;
