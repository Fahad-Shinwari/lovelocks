import React from 'react'
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'

import locksPlacement from '../images/landing/lock-placement.svg'
import orange from '../images/landing/orange.png'
import yellow from '../images/landing/yellow.png'
import purple from '../images/landing/purple.png'
import red from '../images/landing/red.png'
import blue from '../images/landing/blue.png'

function LocksSlider() {
  const properties = {
    duration: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    arrows:false,
    indicators: false,
  };
    return (
      <>
        <div className="locks-div d-flex">
         <> 
        {/* <Slide {...properties}>
          <div className="each-slide"><img src = {blue} alt="" /></div>
          <div className="each-slide"><img src = {orange} alt="" /></div>
          <div className="each-slide"><img src = {red} alt="" /></div>
          <div className="each-slide"> <img src = {yellow} alt="" /></div>
          <div className="each-slide"><img src = {purple} alt="" /></div>
        </Slide>   */}
        </>
        
        </div>
        <img src = {locksPlacement} alt="" />
      </>  
    )
}

export default LocksSlider
