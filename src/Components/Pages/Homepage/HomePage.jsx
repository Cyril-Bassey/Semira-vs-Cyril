import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from "./Marquee"
import SecTwo from "./SecTwo"
import CarouselSlide from "./Carousel"
import SecFive from "./SecFive"
import SecSix from "./SecSix"
import SectionFour from './SectionFour'


const HomePage = () => {
  return (
    <>
        <Navbar />
        <Hero />
        <Marquee />
        <SecTwo />
        <CarouselSlide />
        <SecFive />
        < SectionFour />
        <SecSix />
    </>
  )
}

export default HomePage