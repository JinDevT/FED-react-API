import React from 'react';
import styles from './Viewer.scss';
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

const Viewer = ({mediaType, url, loading}) => {
  if(!url) return null;

  return (
    <div className={cx('viewer')}>
      {
        mediaType === 'image' ? ( //삼항연산자 사용
          <img onClick={() => window.open(url)} src={url} alt="space"/>
        ) : (
          <div/>
        )
      }
    </div>
  );
};

export default Viewer;