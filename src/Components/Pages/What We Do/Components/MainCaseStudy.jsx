import React from 'react';
import Carousel from './CaseStudy/CaseStudyCarouselComponent';

const caseStudiesData = [
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'Driveline',
    appointments: '90+',
    dealValue: '$1.5M',
    summary: '93 appointments and multi-million dollar deals for a retail non-broker agency',
    caseStudyUrl: '#'
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'GoHealth Urgent Care',
    appointments: '376',
    dealValue: '$100K',
    summary: '376 appointments booked for an on-demand consumer-centric care platform',
    caseStudyUrl: '#'
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'GoHealth Urgent Care1',
    appointments: '376',
    dealValue: '$100K',
    summary: '376 appointments booked for an on-demand consumer-centric care platform',
    caseStudyUrl: '#'
  },
  {
    imageUrl: 'https://via.placeholder.com/300',
    title: 'GoHealth Urgent Care2',
    appointments: '376',
    dealValue: '$100K',
    summary: '376 appointments booked for an on-demand consumer-centric care platform',
    caseStudyUrl: '#'
  },
  // Add 3 more case study objects with placeholder data
];

const CaseStudy = () => {
  return (
    <div className="flex flex-col items-center py-10 ">
      <h1 className="text-4xl font-bold mb-4 px-8 ">Check these growth cases</h1>
      <p className="text-lg text-gray-600 mb-10 px-8">
        Discover how other businesses increase their revenue through our help with appointment setting.
      </p>
      <Carousel caseStudies={caseStudiesData} />
    </div>
  );
};

export default CaseStudy;
