import React from "react";
import Button from "../Button/Button";
import styles from './Main.module.scss';
import landMark from '../../icons/Landmark.svg';
import burger from '../../icons/burger.svg';

const Main = () =>{
    return(
    <div className = {styles.mainPage}>
        <div className={styles.titlePage}>
            <div className={styles.sideLine}>
                <div className={styles.burgerMenu}>
                    <img src={burger} alt="burger"> 
                    </img>
                </div>
                <div className={styles.languageButton}>
                    <span>Eng</span>
                </div>
            </div>
            <div className= {styles.mainBody}>
                <div className= {styles.bodyTop}>
                    <span className={styles.motto}> Need for drive</span>
                    <div className= {styles.cityPick}>
                        <img src={landMark} alt="landMark" >
                        </img>
                        <p className={styles.cityName}> Ульяновск</p>
                    </div>
                </div>
                <div className={styles.bodyMiddle}>
                    <span className={styles.middleTopText} >Каршеринг</span>
                    <span className={styles.middleText} >Need for drive</span>
                    <span className={styles.middleBottomText} >Поминутная аренда авто твоего города</span>
                    <Button></Button> 
                </div>
                <div className={styles.bodyBottom}>
                    <span className={styles.tradeMark}>© 2016-2019 «Need for drive»</span>
                    <span className={styles.phone}>8 (495) 234-22-44</span>
                </div>
            </div>
        </div>
        <div className={styles.slider}>

        </div>
    </div>
    );
}
export default Main