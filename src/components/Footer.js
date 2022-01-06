import React from 'react'

import facebook from '../images/landing/facebook.svg'
import instagram from '../images/landing/instagram.svg'
import twitter from '../images/landing/twitter.svg'
import youtube from '../images/landing/youtube.svg'

function Footer() {
    return (
        <div className="footer">
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <img src={youtube} alt="" />
        </div>
    )
}

export default Footer
