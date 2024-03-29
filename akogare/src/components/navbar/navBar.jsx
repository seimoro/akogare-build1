import  './style.css'

import logo_light from './../../img/logo/AKGR_logo_LIGHT.png'
import dartBtn_light from './../../img/dark-btn/dark-btn.png'
import tab_light from './../../img/tab/Tab_on_header_outline_LIGHT.png'
import x_light from "./../../img/icons/X_LIGHT.png"
import discord_light from "./../../img/icons/DISCORD_LIGHT.png"
import navBtn_light from "./../../img/nav-btn/nav-btn-light.png"
import joinUs_light from "./../../img/join/JOIN_LIGHT.png"
import logo_dark from './../../img/logo/AKGR_logo_DARK.png'
import dartBtn_dark from './../../img/dark-btn/light-btn.png'
import tab_dark from './../../img/tab/Tab_on_header_outline_DARK.png'
import x_dark from "./../../img/icons/X_DARK.png"
import discord_dark from "./../../img/icons/DISCORD_DARK.png"
import navBtn_dark from "./../../img/nav-btn/nav-btn-dark.png"
import joinUs_dark from "./../../img/join/JOIN_DARK.png"
import Selector from '../selector/selector'
import { useState, useRef, useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { useDarkTheme } from '../setDarkMode/setDarkMode'


const NavBar = () => {

    const [active, setActive] = useState('')
    const {dark, toggleDark} = useDarkTheme()
    
    const navLinksRef = useRef(null)
    const darkBtnRef = useRef(null)
    
    const contentRef = useRef(null)
    const otherRef = useRef(null)
    
    

    useEffect(() => {
        if(active === ''){
            navLinksRef.current.classList.remove('active')
        }
        else{
            navLinksRef.current.classList.add('active')
        }
    }, [active])

    const themeElement = useMemo(() => {
        if(dark){
            return({
                logo : logo_dark,
                darkBtn : dartBtn_dark,
                tab : tab_dark,
                x : x_dark,
                discord : discord_dark,
                navBtn : navBtn_dark,
                joinUs : joinUs_dark
            })
        }
        else{
            return({
                logo: logo_light,
                darkBtn: dartBtn_light,
                tab: tab_light,
                x: x_light,
                discord: discord_light,
                navBtn: navBtn_light,
                joinUs: joinUs_light
            })
        }
    }, [dark])

    

    const navBtnActive = () => {
        setActive((currentValue) => {
            return currentValue === '' ? 'active' : ''
        })
    }
   
    const removeActiveNav = () => {
        if(navLinksRef.current.classList.contains('active')){
            navLinksRef.current.classList.remove('active')
            setActive('')
        }
    }

    
   

    return ( 
        <nav className="nav">
            <div className="nav-container container">
                <NavLink to="/" className="nav-logo" onClick={removeActiveNav}>
                    
                   <img src={themeElement.logo} alt="" className="logo-img" />
                   <div className="logo-text"><span>THE BRIDGE</span> BETWEEN EAST & WEST IN <span>WEB3</span></div>
                </NavLink>
                <div ref={navLinksRef} className="nav-row">
                    <button ref={darkBtnRef} className="dark-btn" onClick={toggleDark}><img src={themeElement.darkBtn} alt="" className="dark-btn-img" /></button>
                    <Selector className="language" title='ENG' options={['ENG', '日本語']}/>
                        
                    <div  className="nav-links">
                       <img src={themeElement.tab} alt="" className="nav-links-tab" />
                        <NavLink to='/about' className="about" onClick={removeActiveNav}>ABOUT US</NavLink>
                        <span className="nav-link fw" onClick={removeActiveNav}>FUTURE WORLD</span>
                        <Selector 
                            ref = {contentRef}
                            className = 'content'
                            title='CONTENT'
                            options={['NFT COLLECTION', 'EDGERUNNERS PASS', 'CUSTOMIZATION TOOL', 'MUSIC PLAYLIST']}
                            key={0}
                        />
                        <span className="nav-link" onClick={removeActiveNav}>TERMS</span>
                        
                        <Selector 
                            ref = {otherRef}
                            className = 'other'
                            title='OTHER'
                            options={['SUPPORT', 'MERCHANDISE', 'TEAM', 'FAQ', 'PARTNERS']}
                            key={1}
                        />
                        
                        <span className="connect"><strong>CONNECT</strong></span>
                    </div>
                    <div className="social-links">
                        <a href="https://twitter.com/AkogareOfficial" target="_blank" rel="noreferrer" className="social-link"><img src={themeElement.x} alt="" className="x" /></a>
                        <a href="https://discord.gg/HZ4TTpEgXZ" target="_blank" rel="noreferrer" className="social-link"><img src={themeElement.discord} alt="" className=" discord" /></a>
                        <div className="join">
                            <img src={themeElement.joinUs} alt="" className="join-img" />
                            <span className="join-text">JOIN US!</span>
                        </div>
                    </div>
                </div>
                <button className="nav-btn"><img src={themeElement.navBtn} alt="" className="nav-btn-img" onClick={navBtnActive}/></button>
            </div>
        </nav>
     );
}
 
export default NavBar;