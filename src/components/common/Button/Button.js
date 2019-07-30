import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const Div = ({children, ...rest}) => 
    <div {...rest}>{children}</div>
// 전달받은 className, onClick 등 값들이
// rest 안에 들어있음
// JSX에서 ...을 사용하면 내부에 있는 값들을
// props로 넣어줌

const Button = ({
    children, 
    to, 
    onClick, 
    disabled, 
    theme = 'default'}) => 
{
    // to 값이 존재하면 Link 사용 그렇지 않으면 div 사용
    // 버튼 비활성 시에도 div 사용
    const Element = (to && !disabled) ? Link : Div;
    
    // 비활성화 하면 onClick 실행 안됨
    // disabled 값이 true가 되면 className에
    // disabled 추가

    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
                {children}
        </Element>
    );
};

export default Button;