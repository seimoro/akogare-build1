import { useEffect, useMemo, useRef, useState } from 'react'
import image from './img/1.png'

import playSingDark from './img/dark/Play_DARK.png'
import pauseSingDark from './img/dark/PAUSE_DARK.png'

import prevSingDark from './img/dark/PREV_DARK.png' 
import nextSingDark from './img/dark/Next_DARK.png' 

import playSingLight from './img/light/Play_LIGHT.png'
import pauseSingLight from './img/light/PAUSE_LIGHT.png'

import prevSingLight from './img/light/PREV_LIGHT.png' 
import nextSingLight from './img/light/Next_LIGHT.png' 

import soundLight from './img/light/sound_LIGHT.png'
import soundDark from './img/dark/sound_DARK.png'

import closeLight from './img/light/close_LIGHT.png'
import closeDark from './img/dark/close_DARK.png'

import audio1 from './songs/001.wav'
import audio2 from './songs/002.wav'
import audio3 from './songs/003.wav'
import audio4 from './songs/004.wav'
import audio5 from './songs/005.wav'
import audio6 from './songs/006.wav'
import audio7 from './songs/007.wav'
import audio8 from './songs/008.wav'
import audio9 from './songs/009.wav'
import audio10 from './songs/010.wav'

import { useDarkTheme } from '../setDarkMode/setDarkMode'
import './style.css'
const Playa = () => {

    let songs = [
        {
            title: 'Nightmares',
            artist: 'seimoro',
            src: audio1
        },
        {
            title: 'Osaka',
            artist: 'seimoro',
            src: audio2
        },
        {
            title: 'Hasashi',
            artist: 'seimoro',
            src: audio3
        },
        {
            title: 'Ninja 650R',
            artist: 'seimoro',
            src: audio4
        },
        {
            title: 'Hokkaido',
            artist: 'seimoro',
            src: audio5
        },
        {
            title: 'Minazuki',
            artist: 'seimoro',
            src: audio6
        },
        {
            title: 'Brooklyn',
            artist: 'seimoro',
            src: audio7
        },
        {
            title: 'Street Racer',
            artist: 'seimoro',
            src: audio8
        },
        {
            title: 'Shinkou',
            artist: 'seimoro',
            src: audio9
        },
        {
            title: 'Yamaguchi',
            artist: 'seimoro',
            src: audio10
        }
    ]

    const [active, setActive] = useState('')
    const [play, setPlay] = useState('')
    const [index, setIndex] = useState(0)
    const [audioIndex, setAudioIndex] = useState(0)
    const playaRef = useRef(null)
    const playBtnRef = useRef(null)
    const audioRef = useRef(null)
    const [autoPlay, setAutoPlay] = useState(false)
    const {dark} = useDarkTheme()
    const [activeIndex, setActiveIndex] = useState(0)
    

    let music = audioRef.current

    const playaThemeElement = useMemo(() => {
        if(dark){
            return({
                prevSing: prevSingDark,
                nextSing: nextSingDark,
                pauseSing: pauseSingDark,
                playSing: playSingDark,
                sound: soundDark,
                close: closeDark
            })
        }else{
            return({
                prevSing: prevSingLight,
                nextSing: nextSingLight,
                pauseSing: pauseSingLight,
                playSing: playSingLight,
                sound: soundLight,
                close: closeLight
            })
        }
    })
   
    const playBtnSign = [playaThemeElement.pauseSing, playaThemeElement.playSing]

    const activePlaya = [playaThemeElement.close, playaThemeElement.playSing]

    useEffect(() => {
        if(active){
            playaRef.current.classList.add('active')
            setActiveIndex(index => 0)
        }else{
            playaRef.current.classList.remove('active')
            setActiveIndex(index => 1)
        }
    }, [active])
    useEffect(() => {
        if(play){
            playBtnRef.current.classList.add('active')
            setIndex((index) => 0)
        }else{
            playBtnRef.current.classList.remove('active')
            setIndex((index) => 1)
        }
    }, [play])


    const setActiveBtn = () => {
        setActive(currentValue => {
            return currentValue === 'active' ? '' : 'active'
        })
    }

    const playBtn = () => {
        setPlay(currentValue => {
            return currentValue === 'active' ? '' : 'active'
        })
        playSong()
    }

    const playSong = () => {
        if(!playBtnRef.current.classList.contains('active')){
            setIndex(0)
            music.play()
            if(music.currentTime === music.duration){
                nextSong()
            }
        }
        else{
            setIndex(1)
            music.pause()
        }
        
    }
    
    const prevSong = () => {
        music.currentTime = 0
        if(playBtnRef.current.classList.contains('active')){
            setAutoPlay(true)
        }else{
            setAutoPlay(false)
        }
        if(!audioIndex){
            setAudioIndex(songs.length - 1)
        } else{
            setAudioIndex((index) => index - 1)
            
        }
        
    }
    const nextSong = () => {
        music.currentTime = 0
        if(playBtnRef.current.classList.contains('active')){
            setAutoPlay(true)
        }else{
            setAutoPlay(false)
        }
        if(audioIndex === songs.length - 1){
            setAudioIndex(0)
        } else{
            setAudioIndex((index) => index + 1)
            if(playBtnRef.current.classList.contains('active')){
                setAutoPlay(true)
                
            }else{
                setAutoPlay(false)
            }
        }
        
    }

    return ( 
        <div ref={playaRef} className="playa">
            <audio ref={audioRef} src={songs[audioIndex].src} autoPlay={autoPlay} onEnded={nextSong}></audio>
            <img src={image} alt="" className="playa-img" />
            <div className="sound"><img src={playaThemeElement.sound} alt="" /></div>
            <div className="main-layer">
                <div className="text-block">
                    <h3>{songs[audioIndex].title}</h3>
                    <p>{songs[audioIndex].artist}</p>
                </div>
                <div className="btns">
                    <button className="prev btn" onClick={prevSong}><img src={playaThemeElement.prevSing} alt="" /></button>
                    <button ref={playBtnRef} className="play btn" onClick={playBtn}><img src={playBtnSign[index]} alt="" /></button>
                    <button className="next btn" onClick={nextSong}><img src={playaThemeElement.nextSing} alt="" /></button>
                </div>
            </div>
            <button  className="setActiveBtn" onClick={setActiveBtn}><img src={activePlaya[activeIndex]} alt="" /></button>
        </div>
     );
}
 
export default Playa;