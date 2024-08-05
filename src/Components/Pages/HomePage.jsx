import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from './Marquee'
import SecTwo from "./SecTwo"
import CarouselSlide from "./Carousel"

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Marquee />
        <SecTwo />
        <CarouselSlide />
    </>
  )
}

export default HomePage