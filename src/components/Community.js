import React from 'react'

import locks from '../images/landing/locks-side.svg'
import telegram from '../images/landing/telegram.svg'
import twitter from '../images/landing/twitter-discord.svg'

function Community() {
    return (
        <div className="community">
          <div className="gb-banner row">
            <div className="col-md-6">
              <h2>JOIN OUR</h2><h2>COMMUNITY</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias aut, repellat ipsum facere voluptate dicta obcaecati deserunt nobis suscipit eaque?
              </p>
            </div>
            <div className="col-md-6">
            <img src = {locks} alt="" />
            </div>
            <div className="d-flex discord-icons">
            <button className="discord-btn">JOIN OUR DISCORD</button>
            <img src = {twitter} alt="" />
            <img src = {telegram} alt="" />
            </div>

          </div>
        </div>
    )
}

export default Community
