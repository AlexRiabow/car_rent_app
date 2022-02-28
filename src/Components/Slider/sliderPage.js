import React from "react";
import Button from "../Button/Button";
import styles from './sliderPage.module.scss';

const SliderPage = ({slideTitle,slideDesk,btnColor,slideBackGround}) => {
    return(
        <div className={styles.page}
        style={{ background: `no-repeat center/cover url(${slideBackGround})`,}}   
        >
            <div className={styles.pageGradient}>
                <div className={styles.pageContent}>
                    <span className={styles.slideTitle}>
                        {slideTitle}
                    </span>
                    <span className={styles.slideDesk}>
                        {slideDesk}
                    </span>
                    <Button size="smallest" color= {btnColor} className={styles.sliderButton}>Подробнее</Button>
                </div>    
            </div>
        </div>                
    );
}
export default SliderPage