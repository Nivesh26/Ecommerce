import React from 'react'
import Header from '../UserComponent/Header'
import Footer from '../UserComponent/Footer'
import Hero from '../UserComponent/Hero'
import cta from '../UserComponent/cta'

const Home = () => {
  return (
    <div>
        <Header />
        <Hero />  
        <cta />
        <Footer />
    </div>
  )
}

export default Home