import React from "react";
import Button from "../Button/Button";
import styles from './slider.module.scss';
import r_arrow from '../../icons/R_arrow.svg';
import l_arrow from '../../icons/L_arrow.svg';

const slider = () => {
    return(
        <div className={styles.slider}>
            <div className={styles.sliderGradient}>
                <div className={styles.leftButton}> 
                    <img alt="l_arrow" src={l_arrow}></img>              
                </div>
                <div className={styles.slideWrap}>
                    <div className={styles.slide}>
                        <span className={styles.slideTitle}>
                            Бесплатная парковка
                        </span>
                        <span className={styles.slideDesk}>
                        Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах.
                        </span>
                        <Button size="smallest" color="dark_green" className={styles.sliderButton}>Подробнее</Button>
                
                    </div>
                    <div className={styles.sliderDots}>
                            <div className={styles.sliderDot}></div>
                            <div className={styles.sliderDot}></div>
                            <div className={styles.sliderDot}></div>
                            <div className={styles.sliderDot}></div>
                    </div>
                </div>    
                <div className={styles.rightButton}>
                    <img className={styles.r_arrow} alt="r_arrow" src={r_arrow}></img>
                </div>
            </div>    
        </div>
    );
}
export default slider