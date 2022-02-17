import React, {Component} from 'react';
import './Main.scss';

const Main = ({}) =>{
    return(
    <div className='mainPage'>
        <div className='titlePage'>
            <div className='sideLine'>
                <div className='burgerMenu'>

                </div>
                <div className='languageButton'>
                    <p>ENG</p>
                </div>
            </div>
            <div className='mainBody'>
                <div className='bodyTop'>
                    <p> Need for drive</p>
                    <div className='cityPick'>
                        <img>
                        </img>
                        <p className='cityName'> Ульяновск</p>
                    </div>
                </div>
                <div className='bodyMiddle'>

                </div>
                <div className='bodyBottom'>

                </div>
            </div>
        </div>
        <div className='slider'>

        </div>
    </div>
    );
}
export default Main