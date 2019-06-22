import React from 'react';
import styles from './SpaceNavigator.scss';
import classNames from 'classnames/bind';
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"; // react-icons가 버전업되서 이렇게 경로를 써줘야한다.

// scss
const cx = classNames.bind(styles);

const SpaceNavigator = ({ onPrev, onNext }) => {
    return(
        <div className={cx('space-navigator')}>
            <div className={cx('left', 'end')}>
                <div className={cx('circle')} onClick={onPrev}>
                    <FiChevronLeft/>
                </div>
            </div>
            <div className={cx('right', 'end')}>
                <div className={cx('circle')} onClick={onNext}>
                    <FiChevronRight/>
                </div>
            </div>
        </div>
    );
};

export default SpaceNavigator;
