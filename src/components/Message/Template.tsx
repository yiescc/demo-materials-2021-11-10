import React, { createElement, CSSProperties, useMemo } from 'react';
import { Wechat } from 'wechat-mp-specs/typings/message';
import Icon from '../Icon';
import styles from './Template.module.scss';

const Title = ({ title }: { title: string }) => {
  return <div className={styles.Title}>{title}</div>;
};

const IconMore = () => {
  return <span className={styles.IconMore}>...</span>;
};

const ContentList = ({ info }: { info: Wechat.Message.IMessageTemplateItem['data'] }) => {
  const maxLabelLength = useMemo(() => {
    let result = '';
    Object.keys(info.data).forEach((key) => {
      if (info.data[key].label.length > result.length) {
        result = info.data[key].label;
      }
    });
    return result.length * 14 + 16;
  }, [info]);

  return (
    <ul className={styles.ContentList}>
      {Object.keys(info.data).map((key) => {
        if (info.data[key].label === '') return null;
        return info.data[key].label === '首行' ? (
          <li key={key} className={styles.ContentItemFirst}>
            {info.data[key].value ? info.data[key].value : info.data[key].example}
          </li>
        ) : (
          <li key={key} className={styles.ContentItem}>
            <div className={styles.Key} style={{ width: `${maxLabelLength}px` }}>
              {info.data[key].label}:
            </div>
            <div className={styles.Value} style={{ color: `${info.data[key].color}` }}>
              {info.data[key].value ? info.data[key].value : info.data[key].example}
            </div>
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

function Template(props: {
  info: Wechat.Message.IMessageTemplateItem['data'];
  style?: CSSProperties;
  className?: string;
}) {
  if (!props.info.templateId) return null;

  const displayInfo = useMemo(() => {
    const result: Wechat.Message.IMessageTemplateItem['data'] = { ...props.info };
    result.data = {};
    const rawData = props.info.data;
    const excludeKey: string[] = [];
    Object.keys(rawData).forEach((key) => {
      if (excludeKey.indexOf(key) >= 0) return;

      if (rawData[key].label.indexOf('{{') === 0) {
        const keyItem = rawData[key].label.split('.')[0].replace(/{|}/gi, '');
        excludeKey.push(keyItem);
        result.data[key] = {
          label: rawData[keyItem].value ? rawData[keyItem].value : rawData[keyItem].example,
          value: rawData[key].value,
          color: rawData[key].color,
          example: rawData[key].example,
        };
        return;
      }

      result.data[key] = { ...rawData[key] };
    });

    return result;
  }, [props.info]);

  return (
    <div
      className={`${styles.TemplateContainer} ${props.className}`}
      style={{ ...props.style, color: props.info.color }}
    >
      <div className={styles.TemplateContent}>
        <div className={styles.TemplateHeader}>
          <Title title={props.info.title} />
          <IconMore />
        </div>
        <div className={styles.TemplateMain}>{<ContentList info={displayInfo} />}</div>

        <Footer visible={props.info.page !== '' || props.info.miniprogram.appid !== ''} />
      </div>
    </div>
  );
}

export default Template;
