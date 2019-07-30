import React from 'react';
import styles from './PostInfo.scss';
import classNames from 'classnames/bind';

import { Link } from 'react-router-dom';
import moment from 'moment';
// 날짜를 다양한 형식의 텍스로 변환해준다.

const cx = classNames.bind(styles);

const PostInfo = ({publishedDate, title, tags}) => (
    <div className={cx('post-info')}>
        <div className={cx('info')}>
            <h1>{title}</h1>
            <div className={cx('tags')}>
                {
                    tags && tags.map(
                        tag => <Link key={tag} to={`/tags/${tag}`}>#{tag}</Link>
                    )
                }
            </div>
            <div className={cx('date')}>
            </div>
        </div>
    </div>
);

export default PostInfo;