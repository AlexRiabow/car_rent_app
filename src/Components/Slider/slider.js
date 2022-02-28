import {useState,useEffect,useRef,Component} from "react";
import styles from './slider.module.scss';
import r_arrow from '../../icons/R_arrow.svg';
import l_arrow from '../../icons/L_arrow.svg';
import cn from "classnames";

const Slider = ({children,Width}) => {
    const [offset, setOffset] = useState(0)
    const [slideWidth, setSlideWidth] = useState(688)

    useEffect(()=>{
        setOffset(0)
        setSlideWidth(Width)
    },[Width])

    const handleLeftButton =()=>{
        setOffset((currentOffset)=>{

            const newOffset = currentOffset + slideWidth;
            return Math.min(newOffset, 0);

        })
    }
    const handleRightButton =()=>{
        setOffset((currentOffset)=>{

            const newOffset = currentOffset - slideWidth;
            const maxOffset = -(slideWidth*(children.length-1));
            return Math.max(newOffset,maxOffset);

        })
    }
    return(
        <div className={styles.slider} style={{width:`${slideWidth}px`}} >
                <div className={styles.slideWindow} >
                    <div className={styles.allPagesContainer}
                    style={{
                        transform: `translateX(${offset}px)`,
                    }}
                    >
                        {children}
                    </div>
                </div>
                <div className={styles.sliderDots}>
                        <div className={offset === 0 ? cn(styles.sliderDot, styles.sliderDotActive) : styles.sliderDot}></div>
                        <div className={offset === slideWidth*-1 ? cn(styles.sliderDot, styles.sliderDotActive) : styles.sliderDot}></div>
                        <div className={offset === slideWidth*-2 ? cn(styles.sliderDot, styles.sliderDotActive) : styles.sliderDot}></div>
                        <div className={offset === slideWidth*-3 ? cn(styles.sliderDot, styles.sliderDotActive) : styles.sliderDot}></div>
                </div>  
                <div className={styles.rightButton} onClick = {handleRightButton}>
                    <img className={styles.arrow} alt="r_arrow" src={r_arrow}></img>
                </div>
                <div className={styles.leftButton} onClick = {handleLeftButton} > 
                    <img className={styles.arrow} alt="l_arrow" src={l_arrow}></img>              
                </div>
        </div>
    );
}
export default Slider