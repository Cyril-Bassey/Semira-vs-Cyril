
import React from 'react'
import Navbar from '../Homepage/Navbar'
import ServicesParameters from './SectionOne'
import Marquee from '../Homepage/Marquee'
import SectionTwo from './SectionTwo'
import CaseStudyCard from './SectionThree'

const ServicesPage = () => {
  return (
    <div className=''>
      <Navbar />
      <ServicesParameters />
      <Marquee />
      <SectionTwo />
      <CaseStudyCard /> 

    </div>
  )
}

export default ServicesPage
