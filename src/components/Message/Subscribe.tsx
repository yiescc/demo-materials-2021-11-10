import React, { createElement, CSSProperties, useMemo } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
import Icon from '../Icon';
import styles from './Subscribe.module.scss';

interface IKeyItem {
  key: string;
  value: string;
  example: string;
}

const Title = ({ title }: { title: string }) => {
  return <div className={styles.Title}>{title}</div>;
};

const IconMore = () => {
  return <span className={styles.IconMore}>...</span>;
};

const ContentList = ({
  info,
  keyList,
}: {
  info: Wechat.Message.IMessageSubscribeItem['data'];
  keyList: IKeyItem[];
}) => {
  return (
    <ul className={styles.ContentList}>
      {keyList.map((item) => {
        return (
          <li key={item.key} className={styles.ContentItem}>
            <div className={styles.Key}>{item.key}</div>
            <div className={styles.Value}>{info.data[item.value] ?? item.example}</div>
          </li>
        );
      })}
    </ul>
  );
};

const Footer = ({ visible = true }: { visible?: boolean }) => {
  return (
    <div className={styles.Footer} style={{ display: visible ? 'block' : 'none' }}>
      <div className={styles.FooterContent}>
        <div className={styles.Text}>查看详情</div>
        <Icon type="back" className={styles.Icon} />
      </div>
    </div>
  );
};

const OfficialSubscribe = ({
  info,
  style,
  className,
  keyList,
  officialAvatar,
  officialNickname,
}: {
  info: Wechat.Message.IMessageSubscribeItem['data'];
  style?: CSSProperties;
  className?: string;
  keyList: IKeyItem[];
  officialAvatar?: string;
  officialNickname?: string;
}) => {
  return (
    <div className={`${styles.OfficialSubscribe} ${className} `} style={style}>
      <div className={styles.OfficialSubscribeContainer}>
        <div className={styles.OfficialSubscribeHeader}>
          <div className={styles.Left}>
            <img referrerPolicy="no-referrer" className={styles.OfficialAvatar} src={officialAvatar} />
            <span className={styles.OfficialNickname}>{officialNickname}</span>
          </div>
          <div className={styles.Right}>
            <IconMore />
          </div>
        </div>
        <div className={styles.OfficialSubscribeMain}>
          <div style={{ margin: '16px 0 18px' }}>
            <Title title={info.title} />
          </div>
          <ContentList keyList={keyList} info={info} />
        </div>
        <Footer visible={info.page !== '' || info.miniprogram.appid !== ''} />
      </div>
    </div>
  );
};

const ServiceSubscribe = ({
  info,
  style,
  className,
  keyList,
}: {
  info: Wechat.Message.IMessageSubscribeItem['data'];
  style?: CSSProperties;
  className?: string;
  keyList: IKeyItem[];
}) => {
  return (
    <div className={`${styles.ServiceSubscribe} ${className}`} style={style}>
      <div className={styles.ServiceSubscribeContainer}>
        <div className={styles.ServiceSubscribeHeader}>
          <Title title={info.title} />
          <IconMore />
        </div>
        <div className={styles.ServiceSubscribeMain}>
          <ContentList keyList={keyList} info={info} />
        </div>

        <Footer visible={info.page !== '' || info.miniprogram.appid !== ''} />
      </div>
    </div>
  );
};

function Subscribe(props: {
  info: Wechat.Message.IMessageSubscribeItem['data'];
  style?: CSSProperties;
  className?: string;
  type: string;
  officialAvatar?: string;
  officialNickname?: string;
}) {
  const exampleValueList = useMemo(
    () => props.info.example.split('\n').map((item) => item.split(':')[1]),
    [props.info.example],
  );

  const keyList = useMemo(
    () =>
      props.info.content
        .split('\n')
        .filter((item) => item)
        .map((item, index) => {
          const list = item.split(':');
          return {
            key: list[0],
            value: list[1].replace('{{', '').replace('}}', '').split('.')[0],
            example: exampleValueList[index],
          };
        })
        .filter((item) => item.key),
    [exampleValueList, props.info.content],
  );

  if (!props.info.templateId) return null;

  return (
    <React.Fragment>
      {props.type === 'service' ? (
        <OfficialSubscribe {...props} keyList={keyList} />
      ) : (
        <ServiceSubscribe {...props} keyList={keyList} />
      )}
    </React.Fragment>
  );
}

export default Subscribe;
