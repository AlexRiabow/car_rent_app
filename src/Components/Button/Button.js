import React from "react";
import styles from './Button.module.scss';
import cn from "classnames";

const Button = (props) =>{
    const {children,onClick,className,size,type,color} = props;
    const btnCN = cn(styles.button, {
        [styles[size]]: Boolean(size),
        [className]: Boolean(className),
        [styles[color]]: Boolean(color),
    })
    return (
        <button onClick={onClick} className={btnCN} type={type}>
            {children}
        </button>
    );
}
export default Button