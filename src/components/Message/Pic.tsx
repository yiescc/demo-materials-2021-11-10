import { createElement } from 'react';

import style from './Pic.module.scss';

export default ({ imageUrl }: { imageUrl: string }) => {
  return (
    <div className={style.PicWrapper}>
      <img referrerPolicy="no-referrer" src={imageUrl} className={style.Pic} />
    </div>
  );
};
