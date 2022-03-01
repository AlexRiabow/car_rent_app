import React, {useState,useEffect,useRef} from "react";
import styles from './slider.module.scss';
import r_arrow from '../../icons/R_arrow.svg';
import l_arrow from '../../icons/L_arrow.svg';

const Slider = ({children}) => {
    const [offset, setOffset] = useState(0)
    const [slideWidth, setSlideWidth] = useState(688)
    const offsetRef = useRef()
    const maxOffset = -(slideWidth*(children.length-1));

    useEffect(()=>{                                     
        const resizehandle = () => {                        //Функция используется для получения ширины окна слайдера в пикселях и передачи этого значения в offset
            const _Width = offsetRef.current.offsetWidth
            setOffset(0)
            setSlideWidth(_Width)
        }

        resizehandle()
        window.addEventListener('resize',resizehandle)

        return () => {
            window.removeEventListener('resize',resizehandle)
        }
    },[])

    const handleLeftButton =()=>{
        setOffset((currentOffset)=>{

            const newOffset = currentOffset + slideWidth;
            let min = 0;
            if (currentOffset===0) {min = maxOffset};
            return Math.min(newOffset, min);

        })
    }
    const handleRightButton =()=>{
        setOffset((currentOffset)=>{

            const newOffset = currentOffset - slideWidth;
            let max = maxOffset;
            if (currentOffset === maxOffset) {max = 0};
            return Math.max(newOffset,max);

        })
    }
    const dotOffset = (number) => {
        setOffset(()=>{
            return (maxOffset + number * slideWidth)
        })
    }
    return(
        <div className={styles.slider} ref={offsetRef} >
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
                        <div className={offset === 0 ? `${styles.sliderDot} ${styles.sliderDotActive}` : styles.sliderDot} onClick = {()=> dotOffset(3)}></div>
                        <div className={offset === slideWidth*-1 ? `${styles.sliderDot} ${styles.sliderDotActive}` : styles.sliderDot} onClick = {()=> dotOffset(2)}></div>
                        <div className={offset === slideWidth*-2 ? `${styles.sliderDot} ${styles.sliderDotActive}` : styles.sliderDot} onClick = {()=> dotOffset(1)}></div>
                        <div className={offset === slideWidth*-3 ? `${styles.sliderDot} ${styles.sliderDotActive}` : styles.sliderDot} onClick = {()=> dotOffset(0)}></div>
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