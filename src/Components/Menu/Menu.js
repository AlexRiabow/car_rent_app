import React from "react";
import styles from './Menu.module.scss';
import cn from "classnames";

const Menu = ({active, setActive}) =>{
    return(
        <div className={styles.menuWrap}>
            <div className={active ? cn(styles.dark, styles.darkActive) : styles.dark}></div>   
            <div className={active ? cn(styles.menu, styles.active) : styles.menu} onClick ={()=> setActive(!active)}>
                <div className={styles.closeBtn}></div> 
                <div className={styles.menuContent} >
                    <div className={styles.menuList} onClick ={e=>e.stopPropagation()}>
                        <span>
                            ПАРКОВКА
                        </span>
                        <span>
                            СТРАХОВКА
                        </span>
                        <span>
                            БЕНЗИН
                        </span>
                        <span >
                            ОБСЛУЖИВАНИЕ
                        </span>
                    </div>        
                    <div className={styles.links} onClick ={e=>e.stopPropagation()}> 
                        <div className={styles.teleg}></div>
                        <div className={styles.facebook}></div>
                        <div className={styles.instag}></div>
                    </div>
                </div>
            </div>
        </div>     
    );
} 
export default Menu