import React from 'react'
import CardProps from './CardProps'


const SecTwo = () => {
  return (
    <>
      <div className='p-8'>
       <p className='text-4xl md:text-6xl font-bold mb-3 text-center'>Featured Posts</p>
       <p className='text-center text-md text-gray-500'>We are committed to ensuring that you grow spiritually</p>
    </div>

    <div className='px-20 grid md:grid-cols-4 gap-5'>
      <CardProps 
      slanttext={"POPULAR"}
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>
      
      <CardProps 
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci."}/>
      <CardProps 
      slanttext={"NEW"}
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>
      <CardProps 
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>

      <CardProps 
      slanttext={"POPULAR"}
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci."}/>
      <CardProps 
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>
      <CardProps 
      slanttext={"NEW"}
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>
      <CardProps 
      title={"Lorem ipsum"}
      text={"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad nemo unde ab rerum repellendus, doloremque recusandae adipisci"}/>
    </div>
    </>
  )
}

export default SecTwo