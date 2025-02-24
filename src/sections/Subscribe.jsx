import React from 'react'
import Button from '../components/Button'

const Subscribe = () => {
  return (
    <section 
      className='max-container flex justify-center items-center flex-col gap-10'
      id="contact-us"
    > 
        <h3 className='text-4xl leading-[68px] lg:max-w-md pal-semibold'>Sign up for
          <span className='text-coral-red'> Updates</span> & News
        </h3>
      <div className='lg:max-w-[50%] w-full flex items-center max-sm:flex-col gap-5 p-2.5 sm:border sm:border-slate-500 rounded-full'>
        <input 
          type='text'
          placeholder='Enter email to subscribe!'
          className='input'
        />
        <div className='flex max-sm:justify-end items-center max-sm:w-full'>
          <Button 
            label='Sign Up'
            fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe