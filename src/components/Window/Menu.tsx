// @ts-ignore 仅作外部
// eslint-disable-next-line @typescript-eslint/no-unused-vars
// import {createElement} from 'react';
import { createElement, useMemo } from 'react';

import { IMenuButtonItem, IMenuParentButtonItem } from '../../typings/menu';
import Icon from '../Icon';

import styles from './Menu.module.scss';

type IMenuItem = IMenuButtonItem;

const BtnKeyboard = () => (
  <div className={`${styles.KeyboardIcon}`}>
    <Icon type="switch-keyboard" size={25} unit="px" style={{ color: '#000' }} />
  </div>
);

const BtnAddSecondaryMenu = ({
  parentIdx,
  addSecondaryMenu,
}: {
  parentIdx: number;
  addSecondaryMenu?: (parentIdx: number) => void;
}) => {
  return (
    <li
      className={styles.SecondaryItem}
      onClick={() => {
        addSecondaryMenu?.(parentIdx);
      }}
    >
      <span className={styles.SecondaryItemText}>
        <Icon
          type="plus"
          size={12}
          style={{
            color: '#000',
          }}
        />
      </span>
    </li>
  );
};

const SecondaryMenu = ({
  list,
  parentIdx,
  currentMenuIdx,
  currentSecondaryMenuIdx,
  chooseSecondaryMenu,
  addSecondaryMenu,
}: {
  list: IMenuParentButtonItem[];
  parentIdx: number;
  currentMenuIdx: number;
  currentSecondaryMenuIdx: number;
  chooseSecondaryMenu?: (parentIdx: number, itemIdx: number) => void;
  addSecondaryMenu?: (parentIdx: number) => void;
}) => {
  // const ref = useRef<HTMLSpanElement>();
  // useClickAway(() => {
  //   setCounter((s) => s + 1);
  // }, ref);
  const menuNameList = useMemo(() => {
    return list.map((item) => {
      if (item.name.length > 12) {
        const before = item.name.slice(0, 7);
        const after = item.name.slice(item.name.length - 5);
        return `${before}…${after}`;
      }

      return item.name;
    });
  }, [list]);

  return (
    <ol className={styles.SecondaryMenu}>
      {list.map((item, itemIdx) => {
        return (
          <li
            className={`${styles.SecondaryItem} ${
              currentSecondaryMenuIdx === itemIdx && parentIdx === currentMenuIdx ? styles.SecondaryItemCurrent : ''
            } clear_li_style`}
            // eslint-disable-next-line react/no-array-index-key
            key={itemIdx}
            onClick={() => {
              chooseSecondaryMenu?.(parentIdx, itemIdx);
            }}
          >
            <span className={styles.SecondaryItemText}>{menuNameList[itemIdx]}</span>
            <span className={styles.SecondaryItemSplit} />
          </li>
        );
      })}

      {list.length < 5 && <BtnAddSecondaryMenu parentIdx={parentIdx} addSecondaryMenu={addSecondaryMenu} />}
    </ol>
  );
};

const MenuItem = ({
  item,
  itemIdx,
  menuExpanded,
  currentMenuIdx,
  currentSecondaryMenuIdx,
  chooseSecondaryMenu,
  chooseMenu,
  addSecondaryMenu,
}: {
  item: IMenuItem;
  itemIdx: number;
  menuExpanded: boolean;
  currentMenuIdx: number;
  currentSecondaryMenuIdx: number;
  chooseSecondaryMenu?: (parentIdx: number, itemIdx: number) => void;
  chooseMenu?: (itemIdx: number) => void;
  addSecondaryMenu?: (parentIdx: number) => void;
}) => {
  // @ts-ignore 忽略subButton类型，有可能后端会传null
  const hasSubButton = Object.hasOwnProperty.call(item, 'subButton') && item.subButton;
  const menuName = useMemo(() => {
    if (item.name.length > 7) {
      const before = item.name.slice(0, 4);
      const after = item.name.slice(item.name.length - 3);
      return `${before}…${after}`;
    }

    return item.name;
  }, [item.name]);

  return (
    <li
      className={`${styles.Item} ${currentMenuIdx === itemIdx ? styles.ItemCurrent : ''} ${
        currentMenuIdx === itemIdx && hasSubButton && currentSecondaryMenuIdx > -1 ? styles.ItemCurrentFold : ''
      }`}
      // eslint-disable-next-line react/no-array-index-key
      key={itemIdx}
    >
      <span className={styles.ItemSplit} />
      <p
        className={styles.ItemContent}
        onClick={() => {
          chooseMenu?.(itemIdx);
        }}
      >
        {hasSubButton && (item as IMenuParentButtonItem).subButton.length > 0 ? (
          <span className={styles.ItemIconMore} />
        ) : null}

        <span className={styles.ItemText}>{menuName}</span>
      </p>

      {(menuExpanded || (!menuExpanded && currentMenuIdx === itemIdx)) && (
        <SecondaryMenu
          // @ts-ignore 类型是正确的
          list={(item as IMenuParentButtonItem).subButton ?? []}
          parentIdx={itemIdx}
          currentMenuIdx={currentMenuIdx}
          currentSecondaryMenuIdx={currentSecondaryMenuIdx}
          chooseSecondaryMenu={chooseSecondaryMenu}
          addSecondaryMenu={addSecondaryMenu}
        />
      )}
    </li>
  );
};

const BtnAddMenu = ({ onClick }: { onClick?: () => void }) => (
  <li className={styles.Item} onClick={onClick}>
    <span className={styles.ItemSplit} />
    <Icon type="plus" className={styles.MenuAddIcon} size={16} style={{ color: '#000' }} />
  </li>
);

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

export default ({
  menu = [],
  menuExpanded = false,
  currentMenuIdx = -1,
  currentSecondaryMenuIdx = -1,
  hideKeyboardSwitch,
  addMenu,
  chooseMenu,
  chooseSecondaryMenu,
  addSecondaryMenu,
}: WeChatUIWindowMenuProps) => {
  return (
    <div className={styles.Menu}>
      {!hideKeyboardSwitch && <BtnKeyboard />}

      <ul className={styles.MenuList}>
        {menu.map((item, itemIdx) => (
          <MenuItem
            item={item}
            itemIdx={itemIdx}
            // eslint-disable-next-line react/no-array-index-key
            key={itemIdx}
            menuExpanded={menuExpanded}
            currentMenuIdx={currentMenuIdx}
            currentSecondaryMenuIdx={currentSecondaryMenuIdx}
            chooseMenu={chooseMenu}
            chooseSecondaryMenu={chooseSecondaryMenu}
            addSecondaryMenu={addSecondaryMenu}
          />
        ))}
        {menu.length < 3 && <BtnAddMenu onClick={addMenu} />}
      </ul>
    </div>
  );
};
