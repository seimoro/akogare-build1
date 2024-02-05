import Footer from "../../components/footer/Footer";

import FugaziLight from './assets/Fugazi_LIGHT.png'
import FugaziDark from './assets/Fugazi_DARK.png'

import './style.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';


// import required modules
import { FreeMode, Scrollbar, Mousewheel } from 'swiper/modules';
import { useDarkTheme } from "../../components/setDarkMode/setDarkMode";
import { useMemo } from "react";


const AboutUs = () => {

    const {dark} = useDarkTheme()

    const AboutElement = useMemo(() => {
        if(dark){
            return({Fugazi: FugaziDark})
        }else{
            return({Fugazi: FugaziLight})
        }
    }, [dark])
    return ( 
        <div className="about-us-page">
            <main className="about-us">
                <div className="main-container container">
                    <div className="page-title">
                        <div className="left-column">
                            <div className="page-title-text">
                                <span>///</span> ABOUT. US
                            </div>
                            <div className="square"></div>
                        </div>
                        <div className="center-column">
                            <div className="square"></div>
                            <div className="square"></div>
                        </div>
                        <div className="right-column">
                            <div className="square"></div>
                            <div className="page-title-text">
                                LOADING...
                            </div>
                        </div>
                    </div>

                    <div className="about-us-main-content">
                        <div className="left-column">
                            <div className="about-us-list">
                                <span className="about-item">
                                    OUR TEAM
                                </span>
                                <span className="about-item">
                                    PARTNERS
                                </span>
                                <span className="about-item">
                                    COMMUNITY
                                </span>
                            </div>
                        </div>
                        <div className="center-column">
                            <Swiper
                                className='about-swiper'
                                slidesPerView={'auto'}
                                direction='vertical'
                                mousewheel={true}
                                freeMode={true}
                                scrollbar={{
                                    el: '.about-swiper-scrollbar.about-swiper-scrollbar-vertical',
                                    hide: false,
                                }}
                                
                                modules={[Mousewheel, Scrollbar, FreeMode]}
                            >   
                                <SwiperSlide >
                                    <div className="about-authors">
                                        <img src={AboutElement.Fugazi} alt="" className="autors-img" />
                                        <div className="authors-text-block">
                                            <div className="aiden">
                                                <h1>_AIDEN ANIMATION</h1>
                                                <p>CREATIVE DIRECTOR, 2D/3D ARTIST & ANIMATOR</p>
                                            </div>
                                            <div className="fugazi">
                                                <h1>_FUGAZI</h1>
                                                <p>WEB3 BUILDER, CO-FOUNDER</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="about-text-block">
                                        <h1>_ABOUT AKOGARE</h1>
                                        <div className="inner-text-block">
                                            <h2 id="team">
                                                _OUR TEAM
                                            </h2>
                                            <p>
                                            AT AKOGARE, OUR TEAM IS COMPOSED OF SEASONED VETERANS IN THE CRYPTOCURRENCY DOMAIN, BOASTING OVER A DECADE OF EXPERIENCE.
OUR JOURNEY IN THE WORLD OF NFTS BEGAN IN 2018, AND BY 2021, WE WERE DEEPLY INVOLVED AS CONSULTANTS AND ADVISORS IN VARIOUS INFLUENTIAL NFT PROJECTS.
                                            </p>
                                            <h2 id="vision">
                                                _OUR VISION
                                            </h2>
                                            <p>
                                            OUR FORAY INTO CRYPTO AND NFTS WAS DRIVEN BY THE VISION TO LEVERAGE THESE PLATFORMS FOR WEALTH MULTIPLICATION. OVER THE YEARS, WE'VE OBSERVED NUMEROUS PROJECTS MISMANAGING SIGNIFICANT TREASURIES. AT AKOGARE, OUR AIM IS TO RECTIFY THESE SHORTCOMINGS AND SET NEW STANDARDS OF FISCAL RESPONSIBILITY AND INNOVATION.
                                            </p>
                                            <h2 id="mission">
                                                _OUR MISSION
                                            </h2>
                                            <p>
                                            AKOGARE ISN'T JUST A VENTURE; IT'S A THRIVING COMMUNITY OF INDIVIDUALS UNITED BY A SHARED AMBITION. WE BELIEVE IN BUILDING WEALTH COLLECTIVELY, FOCUSING ON EXPANDING THE OVERALL VALUE RATHER THAN DIVIDING IT. OUR MODEL ENSURES THAT BOTH OUR TEAM AND STAKEHOLDERS PLAY A PIVOTAL ROLE IN FINANCIAL DECISIONS, GUARANTEEING TRANSPARENCY AND COLLABORATIVE GROWTH. WE ARE COMMITTED TO A FUTURE WHERE TREASURIES ARE OPTIMIZED AND NOT SQUANDERED, CREATING A SUSTAINABLE AND PROSPEROUS ECOSYSTEM FOR ALL INVOLVED.
                                            </p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                    
                                
                            </Swiper>
                        </div>
                        <div className="right-column">
                            <div className="about-swiper-scrollbar about-swiper-scrollbar-vertical">
                                <div className="about-swiper-scrollbar-drag"></div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
            <Footer/>
        </div>
     );
}
 
export default AboutUs;
