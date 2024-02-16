import Footer from "../../components/footer/Footer";
import image from './img/HomePageArt.png'
import './style.css'

const HomePage = () => {
    return ( 
        <div className="homepage">
            
        <header className="header">

            <div className="header-container container">
                
                <div className="page-title">
                    <div className="left-column">
                        <div className="page-title-text">
                            <span>///</span> WELCOME
                        </div>
                        <div className="square"></div>
                    </div>
                    <div className="right-column">
                        <div className="square"></div>
                        <div className="page-title-text">
                            LOADING...
                        </div>
                    </div>
                </div>
                <div className="main-content">
                    <div className="homepageimg">
                        <img src={image} alt="" />
                    </div>
                    <div className="left-column">
                        <div className="hometextblock">
                            <h1>WELCOME TO AKOGARE</h1>
                            <h2>THE TIME IS NOW!</h2>
                            <p>DIVE INTO A REALM WHERE <span>EAST</span> MEETS <span>WEST</span>, AND BORDERS FADE AWAY.</p>
                            <p>
                            AKOGARE STANDS AS A BEACON FOR
UNITY, AIMING TO WEAVE A GLOBAL
TAPESTRY THAT CELEBRATES DIVERSITY
AND FOSTERS PROFOUND CONNECTIONS.
                            </p>
                            <p className="ask">
                                WILL YOU JOIN US?
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </header>
        <Footer />
        </div>
     );
}
 
export default HomePage;