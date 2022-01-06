import React from 'react'
import Banner from '../components/Banner'
import Community from '../components/Community'
import Footer from '../components/Footer'
import LearnMore from '../components/LearnMore'
import NewsLetter from '../components/NewsLetter'
import VirtualLove from '../components/VirtualLove'

function LandingPage() {
    return (
        <>
          <Banner />  
          <VirtualLove />
          <LearnMore />
          <Community />
          <NewsLetter />
          <Footer />
        </>
    )
}

export default LandingPage
