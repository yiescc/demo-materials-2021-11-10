import React, { createElement, CSSProperties, FC, useEffect, useMemo, useState } from 'react';
import wechatEmojiPlus from 'wechat-emoji-plus';
import { Wechat } from 'wechat-mp-specs/typings/message';

import styles from './MpNews.module.scss';

type IArticleInfo = Wechat.Message.IMessageMpNewsItem['data']['articles'][0];

const ArticleGroupPic: FC<{ info: IArticleInfo }> = ({ info }) => {
  return (
    <article className={styles.Item}>
      <header className={styles.ItemHeader}>
        <i className={styles.ItemHeaderPic}>
          <img referrerPolicy="no-referrer" src={info.picUrl} className={styles.ItemHeaderPicImg} />
        </i>
        <b className={styles.ItemHeaderTitle}>{info.title}</b>
      </header>
    </article>
  );
};

const ArticleGroupText: FC<{ info: IArticleInfo }> = ({ info }) => {
  return (
    <article className={styles.Item}>
      <div className={styles.ItemGroupTextContent}>
        <div className={styles.ItemGroupTextContentRight}>
          <b className={styles.ItemGroupTextTitle}>{info.title}</b>
        </div>
        {info.picUrl ? (
          <div className={styles.ItemGroupTextCover}>
            <i className={styles.ItemHeaderPic}>
              <img referrerPolicy="no-referrer" src={info.picUrl} className={styles.ItemHeaderPicImg} />
            </i>
          </div>
        ) : (
          ''
        )}
      </div>
    </article>
  );
};

const ArticlePic: FC<{ info: IArticleInfo }> = ({ info }) => {
  return (
    <article className={styles.Item}>
      <header
        className={styles.ItemHeader}
        style={{
          height: info.picUrl ? undefined : 0,
        }}
      >
        <i className={styles.ItemHeaderPic}>
          <img referrerPolicy="no-referrer" src={info.picUrl} className={styles.ItemHeaderPicImg} />
        </i>
      </header>
      <div className={styles.PicItemContent}>
        <b className={styles.PicItemTitle}>{info.title}</b>
        <p className={styles.PicItemDesc}>{info.description}</p>
      </div>
    </article>
  );
};

enum ArticleTextStatus {
  NORMAL = 'ItemNormalText',
  HIDDEN = 'ItemHiddenText',
  MORE = 'ItemMoreText',
}

const ArticleText = ({ content }: { content: string }) => {
  const mpNewsTextDom = document.getElementById('mpNewsTextHidden');
  const [status, setStatus] = useState(ArticleTextStatus.NORMAL);

  const innerHTML = useMemo(
    () =>
      wechatEmojiPlus.convertHTML(
        content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, (val) => `<i class=${styles.MiniLogo}></i>${val}`),
      ),
    [content],
  );

  useEffect(() => {
    if (content === '') {
      setStatus(ArticleTextStatus.NORMAL);
      return;
    }

    if (!mpNewsTextDom) return;

    if (!mpNewsTextDom.clientHeight) return;

    if (mpNewsTextDom.clientHeight > 90) {
      if (status === ArticleTextStatus.MORE) return;
      setStatus(ArticleTextStatus.HIDDEN);
    } else {
      setStatus(ArticleTextStatus.NORMAL);
    }
  }, [mpNewsTextDom, mpNewsTextDom?.clientHeight, status, content]);

  return (
    <article className={`${styles.ItemText} ${styles[status]}`}>
      <div className={styles.ItemContentBox}>
        <div id="mpNewsText" className={styles.ItemContent} dangerouslySetInnerHTML={{ __html: innerHTML }} />
        <div
          id="mpNewsTextHidden"
          className={styles.ItemContentHidden}
          dangerouslySetInnerHTML={{ __html: innerHTML }}
        />
      </div>

      <div className={styles.ItemBtnBox} style={{ display: status === ArticleTextStatus.HIDDEN ? 'block' : 'none' }}>
        <span
          className={styles.ItemBtn}
          onClick={() => {
            setStatus(ArticleTextStatus.MORE);
          }}
        >
          展开
        </span>
      </div>

      <div className={styles.ItemBtnBox} style={{ display: status === ArticleTextStatus.MORE ? 'block' : 'none' }}>
        <span
          className={styles.ItemBtn}
          onClick={() => {
            setStatus(ArticleTextStatus.HIDDEN);
          }}
        >
          收起
        </span>
      </div>
    </article>
  );
};

export default ({
  list = [],
  style,
  className,
}: {
  list: Wechat.Message.IMessageMpNewsItem['data']['articles'];
  style?: CSSProperties;
  className?: string;
}) => {
  return (
    <div className={`${styles.MpNews} ${className}`} style={style}>
      {list.length > 1 ? (
        list.map((item, itemIdx) => {
          if (itemIdx === 0) {
            // eslint-disable-next-line react/no-array-index-key
            return <ArticleGroupPic info={item} key={itemIdx} />;
          } else {
            // eslint-disable-next-line react/no-array-index-key
            return <ArticleGroupText info={item} key={itemIdx} />;
          }
        })
      ) : (
        <React.Fragment>
          {list[0].picUrl ? <ArticlePic info={list[0]} /> : <ArticleText content={list[0].title} />}
        </React.Fragment>
      )}
    </div>
  );
};
