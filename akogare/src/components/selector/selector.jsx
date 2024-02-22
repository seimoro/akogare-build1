
import { useEffect, useRef, useState } from 'react'
import  './style.css'


const Selector = (props) => {
    const selectRef = useRef(null);
    const [active, setActive] = useState('active')
    
    useEffect(() => {
        if(active === 'active'){
            selectRef.current.classList.remove('active')
        }else{
            selectRef.current.classList.add('active')
        }
    }, [active])

    const toggleClassActive = () => {
        setActive((currentValue) => {
            return currentValue === 'active' ? '' : 'active'
        })
        
    }
    
    const removeClassActive = () => {
        setActive('active')
    }

    return ( 
        <div ref={selectRef} className={`select-menu ${props.className}`} onClick={toggleClassActive} onMouseLeave={removeClassActive}>
            <div className="select-btn">
                <span className="sBtn-text">{props.title}</span>
                <span className="arrow">&#9660;</span>
            </div>
            <ul className="options">
                {props.options.map((option) => {
                    return (
                        <li className="option">
                            <a className="option-text"><strong>- </strong> {option}</a>
                        </li>)
                })}
            </ul>
        </div>
     );
}
 
export default Selector;