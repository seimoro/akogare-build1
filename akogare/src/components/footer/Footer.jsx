import './style.css'
import barcodeLight from './../../img/barcode/barcode_LIGHT.png'
import barcodeDark from './../../img/barcode/barcode_DARK.png'
import {useMemo} from 'react'
import { useDarkTheme } from '../setDarkMode/setDarkMode'
import { NavLink } from 'react-router-dom'


const Footer = () => {

    const {dark} = useDarkTheme()
    const barCode = useMemo(() => {
        if(dark){
            return ({ barCode: barcodeDark})

        }
        else{
            return ({ barCode: barcodeLight }) 
        }
        
    },[dark])
   
    
    return ( 
        <footer className="footer">

            <div className="footer-container container">
                <div className="left-column">
                    <div className="footer-text-block">
                        <span><NavLink to='/terms'>Terms of Use & Privacy Policy</NavLink></span>
                        <span><a href="">User Ageement</a></span>
                    </div>
                    <img src={barCode.barCode} alt="" className="barcode" />
                    <div className="square"></div>
                </div>
                <div className="center-column">

                </div>
                <div className="right-column">
                    
                    <div className="square"></div>
                    <div className="footer-text-block">
                        <span>AKGR®, Akogare® are registered trademarks</span>
                        <span>All rights reserved</span>
                        <span>All other copyrights and trademarks are the property of their respective owners</span>
                    </div>
                </div>

            </div>
        </footer>
     );
}
 
export default Footer;