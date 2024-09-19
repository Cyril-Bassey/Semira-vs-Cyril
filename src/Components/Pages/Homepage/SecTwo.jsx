import React from 'react'
import CardProps from './CardProps'

const SecTwo = () => {
  return (
    <div className='w-screen pt-20 lg:pt-32 lg:mt-0 bg-gray-950 pb-12'>
      <div className='px-4 lg:px-8'>
        {/* Title Section */}
        <p className='text-xl md:text-5xl lg:text-6xl font-bold mb-4 text-center text-gray-300 font-montserrat'>
          Lead Generation <br /> Services That Win Clients
        </p>
        <p className='text-center text-sm lg:text-lg text-gray-400 font-montserrat'>
          You can put all your energy into scaling your business while we set up a <br className='hidden sm:block' /> consistent stream of vetted business leads to your pipeline.
        </p>
      </div>

      {/* Cards Section */}
      <div className='mt-8 px-3 lg:px-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <CardProps
          slanttext={'POPULAR'}
          title={'Appointment Setting'}
          text={'All-inclusive B2B appointment booking with high lead-to-deal potential. Start getting new opportunities within weeks.'}
        />
        <CardProps
          title={'Cold Email Outreach'}
          text={'Increase engagement, appointments attendance, and conversion to deals with clear-cut outreach campaigns.'}
        />
        <CardProps
          slanttext={'NEW'}
          title={'Intent-based Cold Calling'}
          text={'Multiply your appointment rate by 30% activating phone conversations with prospects and securing solid deals.'}
        />
        <CardProps
          title={'Account-based Marketing'}
          text={'Build strong partnerships with high-value accounts with hyper-targeted and personalized outreach campaigns.'}
        />
        <CardProps
          slanttext={'POPULAR'}
          title={'Appointment Setting'}
          text={'All-inclusive B2B appointment booking with high lead-to-deal potential. Start getting new opportunities within weeks.'}
        />
        <CardProps
          title={'Cold Email Outreach'}
          text={'Increase engagement, appointments attendance, and conversion to deals with clear-cut outreach campaigns.'}
        />
        <CardProps
          slanttext={'NEW'}
          title={'Intent-based Cold Calling'}
          text={'Multiply your appointment rate by 30% activating phone conversations with prospects and securing solid deals.'}
        />
        <CardProps
          title={'Account-based Marketing'}
          text={'Build strong partnerships with high-value accounts with hyper-targeted and personalized outreach campaigns.'}
        />
      </div>
    </div>
  )
}

export default SecTwo
