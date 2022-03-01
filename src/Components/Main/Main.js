import React, {useState} from "react";
import Button from "../Button/Button";
import styles from './Main.module.scss';
import landMark from '../../icons/Landmark.svg';
import Slider from '../Slider/slider';
import SliderPage from '../Slider/sliderPage';
import Menu from '../Menu/Menu';
import bg1 from '../../images/bg1.jpg'
import bg2 from '../../images/bg2.jpg'
import bg3 from '../../images/bg3.jpg'
import bg4 from '../../images/bg4.jpg'



const Main = () =>{
    const [menuActive, setMenuActive] = useState(false);

    return(
    <div className = {styles.mainPage}>
        <div className={styles.titlePage}>
            <div className={styles.sideLine}>
                <div className={styles.burgerBtn} onClick ={()=> setMenuActive(!menuActive)}>
                    <span></span>
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
                    <Button size = "small">
                        Забронировать
                    </Button> 
                </div>
                <div className={styles.bodyBottom}>
                    <span className={styles.tradeMark}>© 2016-2019 «Need for drive»</span>
                    <a  href="phone" className={styles.phone}>8 (495) 234-22-44</a>
                </div>
            </div>
        </div>
        <Slider>
            <SliderPage slideTitle="Бесплатная парковка" slideDesk="Оставляйте машину на платных городских парковках и разрешенных местах, не нарушая ПДД, а также в аэропортах." btnColor="dark_green" slideBackGround={bg1} > </SliderPage>
            <SliderPage slideTitle="Страховка" slideDesk="Полная страховка страховка автомобиля." btnColor="blue" slideBackGround={bg2}> </SliderPage>
            <SliderPage slideTitle="Бензин" slideDesk="Полный бак на любой заправке города за наш счёт" btnColor="red" slideBackGround={bg3}> </SliderPage>
            <SliderPage slideTitle="Обслуживание" slideDesk="Автомобиль проходит еженедельное ТО" btnColor="purple" slideBackGround={bg4}> </SliderPage>
        </Slider>
        <Menu active = {menuActive} setActive = {setMenuActive}></Menu>
    </div>
    );
}
export default Main