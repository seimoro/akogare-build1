import { useEffect, useRef, useState } from 'react'
import image from './img/Song mini image.png'

import playSing from './img/dark/Play_DARK.png'
import pauseSing from './img/dark/PAUSE_DARK.png'

import prevSing from './img/dark/PREV_DARK.png' 
import nextSing from './img/dark/Next_DARK.png' 

import audio1 from './songs/001.wav'
import audio2 from './songs/002.wav'
import audio3 from './songs/003.wav'
import audio4 from './songs/004.wav'
import audio5 from './songs/005.wav'

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
    ]

    const [active, setActive] = useState('')
    const [play, setPlay] = useState('')
    const [index, setIndex] = useState(0)
    const [audioIndex, setAudioIndex] = useState(0)
    const playaRef = useRef(null)
    const playBtnRef = useRef(null)
    const audioRef = useRef(null)
    const [autoPlay, setAutoPlay] = useState(true)

    let music = audioRef.current

    useEffect(() => {
        
    },[active])

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
        }
        else{
            setIndex(1)
            music.pause()
        }
    }
    

    const playBtnSign = [pauseSing, playSing]


    useEffect(() => {
        if(active){
            playaRef.current.classList.add('active')
        }else{
            playaRef.current.classList.remove('active')
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

    
    const prevSong = () => {
       
        if(!audioIndex){
            setAudioIndex(songs.length - 1)
        } else{
            setAudioIndex((index) => index - 1)
            if(playBtnRef.current.classList.contains('active')){
                setAutoPlay(autoPlay => true)
                
            }else{
                setAutoPlay(autoPlay => false)
            }
        }
        
    }
    const nextSong = () => {
        if(audioIndex === songs.length - 1){
            setAudioIndex(0)
        } else{
            setAudioIndex((index) => index + 1)
            if(playBtnRef.current.classList.contains('active')){
                setAutoPlay(autoPlay => true)
                
            }else{
                setAutoPlay(autoPlay => false)
            }
        }
    }

    return ( 
        <div ref={playaRef} className="playa">
            <audio ref={audioRef} src={songs[audioIndex].src} autoPlay={autoPlay}></audio>
            <img src={image} alt="" className="playa-img" />
            <div className="main-layer">
                <div className="text-block">
                    <h3>{songs[audioIndex].title}</h3>
                    <p>{songs[audioIndex].artist}</p>
                </div>
                <div className="btns">
                    <button className="prev btn" onClick={prevSong}><img src={prevSing} alt="" /></button>
                    <button ref={playBtnRef} className="play btn" onClick={playBtn}><img src={playBtnSign[index]} alt="" /></button>
                    <button className="next btn" onClick={nextSong}><img src={nextSing} alt="" /></button>
                </div>
            </div>
            <button  className="setActiveBtn" onClick={setActiveBtn}>✖</button>
        </div>
     );
}
 
export default Playa;