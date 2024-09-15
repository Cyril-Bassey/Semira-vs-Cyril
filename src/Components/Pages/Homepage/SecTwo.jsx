import React from 'react'
import CardProps from './CardProps'


const SecTwo = () => {
  return (
    <div className='w-screen mt-7 lg:mt-0'>
      <div className='p:2 lg:p-8  '>
       <p className='text-4xl md:text-6xl font-bold mb-3 text-center'>Lead generation <br />
       services that win clients</p>
       <p className='text-center text-md text-gray-500'>You can put all your energy into scaling your business while we set up a <br /> consistent stream of vetted business leads to your pipeline.</p>
    </div>

    <div className='px-3 mt-5 lg:mt-0 lg:px-20 grid md:grid-cols-4 gap-5' >
      <CardProps 
      slanttext={"POPULAR"}
      title={"Appointment Setting"}
      text={"All-inclusive B2B appointment booking with high lead-to-deal potential. Start getting new opportunities within weeks."}/>
      <CardProps 
      title={"Cold email outreach"}
      text={"Increase engagement, appointments attendance, and conversion to deals with clear-cut outreach campaigns."}/>
      <CardProps 
      slanttext={"NEW"}
      title={"Intent-based cold calling"}
      text={"Multiply your appointment rate by 30% activating phone conversations with prospects and securing solid deals."}/>
      <CardProps 
      title={"Account based marketing"}
      text={"Build strong partnerships with high-value accounts with hyper-targeted and personalized outreach campaigns."}/>

      <CardProps 
      slanttext={"POPULAR"}
      title={"Appointment Setting"}
      text={"All-inclusive B2B appointment booking with high lead-to-deal potential. Start getting new opportunities within weeks."}/>
      <CardProps 
      title={"Cold email outreach"}
      text={"Increase engagement, appointments attendance, and conversion to deals with clear-cut outreach campaigns."}/>
      <CardProps 
      slanttext={"NEW"}
      title={"Intent-based cold calling"}
      text={"Multiply your appointment rate by 30% activating phone conversations with prospects and securing solid deals."}/>
      <CardProps 
      title={"Account based marketing"}
      text={"Build strong partnerships with high-value accounts with hyper-targeted and personalized outreach campaigns."}/>
    </div>
    </div>
  )
}

export default SecTwo