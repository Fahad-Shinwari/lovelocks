import React from 'react'
import LocksSlider from './LocksSlider'
import cloudFive from '../images/landing/cloud-five.svg'

function LearnMore() {
    return (
        <div className="gb-banner learn">
          <div className="row">
            <div className="col-md-6 bg-grey hide-for-mobile">
              <LocksSlider />
            </div>
            <div className="col-md-6 learn-text">
              <div className="d-flex justify-content-between"><h1>THE</h1> <img src = {cloudFive} alt="" className="hide-for-mobile" /></div>
              <h1>LOVE BRIDGE</h1>
              <p>Hit the tab button and the lorem ipsum text gets automatically generated.</p>
              <button>LEARN MORE</button>
            </div>
          </div>
        </div>
    )
}

export default LearnMore
