import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from "./Marquee"
import SecTwo from "./SecTwo"
import CarouselSlide from "./Carousel"
import SecFive from "./SecFive"
import SecSix from "./SecSix"

const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Marquee />
        <SecTwo />
        <CarouselSlide />
        <SecFive />
        <SecSix />
    </>
  )
}

export default HomePage