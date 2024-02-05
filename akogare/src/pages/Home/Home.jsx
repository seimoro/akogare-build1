
import MusicPlayer from "../../components/Musicplaya/playa";
import bgVideo from "./../../img/bg/bg-video.mp4"


const HomePage = () => {
    return ( 
        <header className="header">
            <video autoPlay muted loop className="bg-video">
                <source src={bgVideo} />
            </video>
            <div className="bg-img"></div>
            <div className="header-container container">
                <MusicPlayer />
            </div>
        </header>
     );
}
 
export default HomePage;