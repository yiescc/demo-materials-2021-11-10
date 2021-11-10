import React, { createElement, useMemo } from 'react';
import styles from './Text.module.scss';
import WechatEmoji from 'wechat-emoji-plus';

function renderMiniLogo(content: string) {
  return content.replace(/^<a\s+data-miniprogram-appid=.*>$/gm, (val) => `<i class=${styles.MiniLogo}></i>${val}`);
}

export default ({ content: Content }: { content: string | JSX.Element }) => {
  // eslint-disable-next-line react/no-danger
  const innerHTML = useMemo(
    () => (typeof Content === 'string' ? WechatEmoji.convertHTML(renderMiniLogo(Content)) : ''),
    [Content],
  );

  return (
    <React.Fragment>
      {typeof Content === 'string' ? (
        <div
          style={{
            maxWidth: '234px',
          }}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: innerHTML }}
        />
      ) : (
        Content
      )}
    </React.Fragment>
  );
};
