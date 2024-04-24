import React from 'react'
import Navbar from './Header/Navbar'
import Hero from './Header/Hero'
import HeroAbout from './Header/HeroAbout'
import Destination from './Destinations/Destination'
import Guides from './Destinations/Guides'
import Client from './Destinations/Client'
import Stories from './Destinations/Stories'
import Footer from './Footer/Footer'

const Container = () => {
  return (
    <>
      <div className="container mx-auto px-20 py-5">
        <Navbar />
        <Hero />
        <HeroAbout />
        <Destination />
        <Guides />
        <Client />
        <Stories />
      </div>
      <Footer/>
    </>
  );
}

export default Container