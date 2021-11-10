// import { IMenuItem } from '../../typings/menu';

import React, { createElement, FC, useContext } from 'react';

import './menu.scss';
import { storeDispatcherCtx, storeStateCtx } from './store';
import Icon from '../Icon';

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

const BtnKeyboard = () => (
  <button className="wechat-office-account-menu-keyboard clear_button_style">
    <Icon
      type="switch-keyboard"
      size={12}
      unit="px"
      className="wechat-office-account-menu-keyboard-icon"
      color="#000"
    />
  </button>
);

const BtnAddSecondaryMenu: FC<{
  parentIdx: number;
}> = ({ parentIdx }) => {
  const { addSecondaryMenu } = useContext(storeDispatcherCtx);
  return (
    <li
      className="wechat-office-account-secondary-menu-item clear_li_style"
      onClick={() => {
        addSecondaryMenu?.(parentIdx);
      }}
    >
      <span className="wechat-office-account-secondary-menu-item-text">
        <Icon
          type="plus"
          className="wechat-office-account-secondary-menu-item-icon-add"
          unit="px"
          color="#000"
          size={12}
        />
      </span>
    </li>
  );
};

const SecondaryMenu: FC<{ list: IMenuItem[]; parentIdx: number }> = ({
  list,
  parentIdx,
}) => {
  const { chooseSecondaryMenu } = useContext(storeDispatcherCtx);
  const { currentSecondaryMenuIdx } = useContext(storeStateCtx);

  return (
    <ol className="wechat-office-account-secondary-menu clear_ul_style">
      {list.map((item, itemIdx) => {
        return (
          <li
            className={`wechat-office-account-secondary-menu-item ${
              currentSecondaryMenuIdx === itemIdx
                ? 'wechat-office-account-secondary-menu-item-current'
                : ''
            } clear_li_style`}
            key={item.name}
            onClick={() => {
              chooseSecondaryMenu?.(itemIdx);
            }}
          >
            <span className="wechat-office-account-secondary-menu-item-text">
              {item.name}
            </span>
            <span className="wechat-office-account-secondary-menu-item-split" />
          </li>
        );
      })}

      {list.length < 5 && <BtnAddSecondaryMenu parentIdx={parentIdx} />}
    </ol>
  );
};

const MenuItem: FC<{
  item: IMenuItem;
  itemIdx: number;
}> = ({ item, itemIdx }) => {
  const { currentMenuIdx, currentSecondaryMenuIdx } = useContext(storeStateCtx);
  const { chooseMenu } = useContext(storeDispatcherCtx);
  return (
    <li
      className={`wechat-office-account-menu-item ${
        currentMenuIdx === itemIdx
          ? 'wechat-office-account-menu-item-current'
          : ''
      } ${
        currentMenuIdx === itemIdx &&
        currentSecondaryMenuIdx !== undefined &&
        currentSecondaryMenuIdx > -1
          ? 'wechat-office-account-menu-item-has-child-current'
          : ''
      } clear_li_style`}
      key={item.name}
    >
      <span className="wechat-office-account-menu-item-split" />
      <p
        className="wechat-office-account-menu-item-content"
        onClick={() => {
          chooseMenu?.(itemIdx);
        }}
      >
        {item.sub_button?.length ? (
          <span className="wechat-office-account-menu-item-icon-more" />
        ) : null}

        <span className="wechat-office-account-menu-item-text">
          {item.name}
        </span>
      </p>
      {currentMenuIdx === itemIdx && (
        <SecondaryMenu list={item.sub_button ?? []} parentIdx={itemIdx} />
      )}
    </li>
  );
};

const BtnAddMenu: FC<{
  onClick: () => void;
}> = ({ onClick }) => (
  <li
    className="wechat-office-account-menu-item clear_li_style"
    onClick={onClick}
  >
    <span className="wechat-office-account-menu-item-split" />
    <Icon
      type="plus"
      className="wechat-office-account-menu-btn-add-icon"
      unit="px"
      color="#000"
      size={16}
    />
  </li>
);

export default () => {
  const { menu } = useContext(storeStateCtx);
  const { addMenu } = useContext(storeDispatcherCtx);

  return (
    <div className="wechat-office-account-menu">
      <BtnKeyboard />
      <ul className="wechat-office-account-menu-list clear_ul_style">
        {menu.map((item, itemIdx) => (
          <MenuItem item={item} itemIdx={itemIdx} key={item.name} />
        ))}
        {menu.length < 3 && (
          <BtnAddMenu
            onClick={() => {
              addMenu?.();
            }}
          />
        )}
      </ul>
    </div>
  );
};
