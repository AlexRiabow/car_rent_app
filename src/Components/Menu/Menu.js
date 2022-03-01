import React from "react";
import styles from './Menu.module.scss';

const Menu = ({active, setActive}) =>{
    return(
        <div className={styles.menuWrap}>
            <div className={active ? `${styles.dark} ${styles.darkActive}` : styles.dark}></div>   
            <div className={active ? `${styles.menu} ${styles.active}` : styles.menu}>
                <div className={styles.closeBtn} onClick ={()=> setActive(!active)}></div> 
                <div className={styles.menuContent} >
                    <div className={styles.menuList}>
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
                    <div className={styles.links}> 
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