import React from 'react'
import {  Link } from 'react-router-dom';

import cloudOne from '../images/landing/cloud-one.svg'
import cloudTwo from '../images/landing/cloud-two.svg'
import cloudThree from '../images/landing/cloud-three.svg'
import cloudFour from '../images/landing/cloud-four.svg'
import cloudFive from '../images/landing/cloud-five.svg'

function Banner() {
    return (
        <div className="banner">
         <div className="container">
          <div className="row">
            <div className="col-md-6 text-banner">
              <h1>THE</h1>
              <h1>LOVE BRIDGE</h1>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat.Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat</p>
              <p>True love with an NFT.</p>
              <p>Click the button.</p>
            </div>
            <div className="col-md-6 cloud-img hide-for-mobile">
              <div className="d-flex justify-content-between">
                <img src = {cloudOne} alt="" />
                <img src = {cloudTwo} alt="" />
              </div>
              <div className="text-center"><img src = {cloudThree} alt="" /></div>
              <div className="d-flex justify-content-between">
                <img src = {cloudFour} alt="" />
                <img src = {cloudFive} alt="" />
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-between mt-5">
            <div className="bg-btn d-flex justify-content-between">
            <p>Single sign</p>
            <Link to="/select"><button>Click here</button>
              </Link>
              </div>
              <div className="bg-btn d-flex justify-content-between">
              <p>DOUBLE sign</p>
              <Link to="/select-double"><button>Click here</button>
              </Link>
              </div>
              <button className="gradient-btn"><Link to="/find-lock">FIND MY LOCK</Link></button>
          </div>
         </div> 
        </div>
    )
}

export default Banner
