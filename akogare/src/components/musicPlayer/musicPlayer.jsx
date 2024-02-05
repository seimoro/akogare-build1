
import { useRef, useState, useEffect, useMemo } from 'react'
import  './style.css'
import bgLayerLight from "./../../img/music-player/light/BG_LIGHT.png"
import bgBorderLight from "./../../img/music-player/light/BORDER_LIGHT.png"
import prevLight from "./../../img/music-player/light/PREV_LIGHT.png"
import pauseLight from "./../../img/music-player/light/PAUSE_LIGHT.png"
import playLight from "./../../img/music-player/light/Play_LIGHT.png"
import nextLight from "./../../img/music-player/light/Next_LIGHT.png"
import bgLayerDark from "./../../img/music-player/dark/BG_DARK.png"
import bgBorderDark from "./../../img/music-player/dark/BORDER_DARK.png"
import prevDark from "./../../img/music-player/dark/PREV_DARK.png"
import pauseDark from "./../../img/music-player/dark/PAUSE_DARK.png"
import playDark from "./../../img/music-player/dark/Play_DARK.png"
import nextDark from "./../../img/music-player/dark/Next_DARK.png"
import cover from "./../../img/music-player/Song mini image.png"
import audio_1 from './../../songs/001.mp3'
import audio_2 from './../../songs/002.mp3'
import audio_3 from './../../songs/003.mp3'
import { useDarkTheme } from '../setDarkMode/setDarkMode'


const MusicPlayer = () => {
    let songs = [
        {
            title: 'WELCOME TO AKOGARE',
            path: audio_1
        },
        {
            title: 'PHONK',
            path: audio_2
        },
        {
            title: 'PHONK 2',
            path: audio_3
        },
    ]
    
    const {dark} = useDarkTheme()

    const MusicElement = useMemo(() => {
        if(dark){
            return({
                bgLayer: bgLayerDark,
                bgBorder: bgBorderDark,
                prev: prevDark,
                pause: pauseDark,
                play: playDark,
                next: nextDark
            })
        }else{
            return({
                bgLayer: bgLayerLight,
                bgBorder: bgBorderLight,
                prev: prevLight,
                pause: pauseLight,
                play: playLight,
                next: nextLight
            })
        }
    })

    const [active, setActive] = useState('')
    const musicRef = useRef(null)
    const playBtnRef = useRef(null)
    const seekRef = useRef(null)
    const pointRef = useRef(null)
    const [index, setIndex] = useState(0)
    
    

    useEffect(() => {
        if(active === ''){
            playBtnRef.current.classList.add('active')
        }else{
            playBtnRef.current.classList.remove('active')
        }
    }, [active])

    useEffect(() => {
        if(playBtnRef.current.classList.contains('active')){
            musicRef.current.pause()
        }else{
            musicRef.current.play()
        }
    }, [active])

    useEffect(() => {
        const interval = setInterval(() => {
            seekRef.current.value = musicRef.current.currentTime 
            pointRef.current.value = seekRef.current.value 
        }, 500)
        return () => {clearInterval(interval)}
    })
    

    const playSong = () => {
        setActive((currentValue) => {
            return currentValue === 'active' ? '' : 'active'
        })
    }

    const slide = () => {
        musicRef.current.currentTime = seekRef.current.value
    }

    
    const prevSong = () => {
        if(playBtnRef.current.classList.contains('active')){
            musicRef.current.pause()
        }else{
            playSong()
        }
        if(index === 0){
            setIndex(0)
            playBtnRef.current.classList.add('active')
            musicRef.current.pause()
        }
        else{
            setIndex((index) => index - 1)
        }
        
        musicRef.current.currentTime = 0
    }
    const nextSong = () => {
        if(playBtnRef.current.classList.contains('active')){
            musicRef.current.pause()
        }else{
            playSong()
        }
        if(index === songs.length-1){
            setIndex(0)
            playBtnRef.current.classList.add('active')
            musicRef.current.pause()
        }
        else{
            setIndex((index) => index + 1)
        }
        
        musicRef.current.currentTime = 0
    }
    
    
    setTimeout(() => {
        seekRef.current.max = musicRef.current.duration;
        pointRef.current.max = musicRef.current.duration;
    }, 300)
        

    
    return ( 
       
        <div className="music-player">
            <audio ref={musicRef} src={songs[index].path} id="audio" loop ></audio>
            
            <img src={MusicElement.bgLayer} alt="" className="bg-layer" />
            <img src={MusicElement.bgBorder} alt="" className="bg-border" />
            <img src={cover} alt="" className="cover" />
            <div className="text-block">
                <span className="playing">PLAYING NOW</span>
                <span className="track-name">{songs[index].title}</span>
            </div>
            <div className="player">
                <button className="player__item"><img src={MusicElement.prev} alt="" className="prev" onClick={prevSong}/></button>
                <button ref={playBtnRef} className="play-btn player__item" onClick={playSong}>
                    <img src={MusicElement.pause} alt="" className="pause" />
                    <img src={MusicElement.play} alt="" className="play" />
                </button>
                <button className="player__item"><img src={MusicElement.next} alt="" className="next" onClick={nextSong}/></button>
            </div>
            <div className="song-slider">
                <input ref={seekRef} type="range" value="0" className="seek-bar" onChange={slide}/>
                <input ref={pointRef} type="range" value="0" className="point" />
            </div>


        </div>

        
     );
}

export default MusicPlayer;