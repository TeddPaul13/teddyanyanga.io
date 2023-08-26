import React from 'react'
import { useState } from 'react'
import {FaArrowCircleUp} from "react-icons/fa"
import Button from 'react-bootstrap/esm/Button'
import "../App.css";

function ScrollButton() {

    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 150){
            setVisible(true)
        }else if (scrolled <= 150){
            setVisible(false)
        }
    };
    const scrollToTop = () =>{
        window.scrollTo({
            top:0,
            behavior:'smooth'
        })
    };

    window.addEventListener('scroll', toggleVisible)

  return (
    <div className='d-flex justify-content-center'>
        <FaArrowCircleUp className='scrollUp' onClick= {scrollToTop} style={{display: visible? "flex" : "none"}}/>
    </div>
  )
}

export default ScrollButton