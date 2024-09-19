import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Marquee from "./Marquee"
import SecTwo from "./SecTwo"
import CarouselSlide from "./Carousel"
import SecFive from "./SecFive"
import SecSix from "./SecSix"
import AwardsSection from './AwardSection'
import IndustriesSection from './YourIndustryTailoredSolution'
import TeamSection from './TeamSection'
import Footer from './Footer'
import KnowledgeSection from './KnowledgeSection'
import GrowthSection from './DedicatedToYourGrowth'
import Hero2 from './Hero2'
import Header from './Hero2Prop'
import CaseStudy from '../What We Do/Components/MainCaseStudy'

// import HeroSection from './test'

const HomePage = () => {
  return (
    <>
        <Navbar />
        {/* <Hero /> */}
        {/* <HeroSection /> */}
        <Header />
        <div className='hidden lg:block'>
        {/* <Marquee /> */}
        </div>
        <SecTwo />
        <CaseStudy/>
        {/* <CarouselSlide /> */}
        {/* <SecFive /> */}
        <AwardsSection />
        <IndustriesSection />
        <TeamSection />
        <GrowthSection />
        <SecSix />
        <KnowledgeSection />
        <Footer />
    </>
  )
}

export default HomePage