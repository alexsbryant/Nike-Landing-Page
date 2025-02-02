import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 pal-semibold text-4xl capitalize'>We Provide You
          <span className='text-coral-red'> Super</span>
          <br />
          <span className='text-coral-red'>Quality</span> Shoes
        </h2>
        <p className='mt-4 lg:max-w-lg font-sans text-slate-500 text-lg leading-7'>Special offer text</p>
        <p className='mt-6 lg:max-w-lg font-sans text-slate-500 text-lg leading-7'>Special offer text two.</p>
        <div className='mt-11'>
          <Button
            label="View Details"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer