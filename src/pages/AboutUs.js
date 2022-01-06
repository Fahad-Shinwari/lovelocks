import React from 'react'

import about from '../images/about/about.svg'
import flowLines from '../images/about/flow-lines.svg'
import blueLock from '../images/about/blue-lock.svg'
import blueBox from '../images/about/blue-text-box.svg'

import greenLock from '../images/about/green-lock.svg'
import greenBox from '../images/about/green-text-box.svg'

import orangeLock from '../images/about/orange-lock.svg'
import orangeBox from '../images/about/orange-text-box.svg'

import yellowLock from '../images/about/yellow-lock.svg'
import yellowBox from '../images/about/yellow-text-box.svg'

import purpleLock from '../images/about/purple-lock.svg'
import purpleBox from '../images/about/purple-text-box.svg'

import redLock from '../images/about/red-lock.svg'
import redBox from '../images/about/red-text-box.svg'

import team from '../images/about/team.svg'
import teamOne from '../images/about/team-six.svg'
import teamTwo from '../images/about/team-two.svg'
import teamThree from '../images/about/team-three.svg'
import teamFour from '../images/about/team-four.svg'
import teamFive from '../images/about/team-five.svg'
import NewsLetter from '../components/NewsLetter'
import Footer from '../components/Footer'

function AboutUs() {
    return (
        <div className="about">
          <div className="carousel">
            <img src={about} alt="" />
            <div className="carousel-caption">
              <h1>ABOUT US</h1>
            </div>
          </div>
          <div className="gb-banner">
          <p className="pt-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <h1 className="pt-5">ROADMAP</h1>
          <p className="pb-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since.</p>
          <div className="row hide-for-mobile flow">
            <div className="col-md-6 left-col">
            <div className="d-flex justify-content-between">
              <h2>02</h2>
              <img src={blueLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={blueBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>

              <div className="d-flex p-top justify-content-between">
              <h2>04</h2>
              <img src={redLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={redBox} alt="" />
              <p className="text-on-img-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>


              <div className="d-flex p-top justify-content-between">
              <h2>06</h2>
              <img src={yellowLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={yellowBox} alt="" />
              <p className="text-on-img-three">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>


            </div>
            <div className="col-md-6 col-bg">
              <div className="d-flex justify-content-between">
              <h2>01</h2>
              <img src={purpleLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={purpleBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>

              <div className="d-flex p-top justify-content-between">
              <h2>03</h2>
              <img src={orangeLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={orangeBox} alt="" />
              <p className="text-on-img-two">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>


              <div className="d-flex p-top justify-content-between">
              <h2>05</h2>
              <img src={greenLock} className="locks" alt="" />
              </div>
              <h2>LAUNCH ROADMAP</h2>
              <img src={greenBox} alt="" />
              <p className="text-on-img-three">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>

           </div>
          </div>

          <div className="row hide-for-desktop">
            <div className="col-12">
            <h2>Step 01</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={blueBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>

            <div className="col-12 pt-5">
            <h2>Step 02</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={redBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>

            <div className="col-12 pt-5">
            <h2>Step 03</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={greenBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>

            <div className="col-12 pt-5">
            <h2>Step 04</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={orangeBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>

            <div className="col-12 pt-5">
            <h2>Step 05</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={yellowBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>

            <div className="col-12 pt-5">
            <h2>Step 06</h2>
              <h2>LAUNCH ROADMAP</h2>
              <img src={purpleBox} alt="" />
              <p className="text-on-img">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets</p>
            </div>
          </div>

          

          <h1 className="mt-5">OUR TEAM</h1>
          <div className="team">    
            <img src={team} alt="" />
            <img src={teamOne} alt="" />
            <img src={teamTwo} alt="" />
            <img src={teamThree} alt="" />
            <img src={teamFive} alt="" />
            <img src={teamFour} alt="" />
          </div>
          </div>
          <NewsLetter />
          <Footer />

          
        </div>
    )
}

export default AboutUs
