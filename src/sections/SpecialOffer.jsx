import React from 'react'
import Button from '../components/Button'
import { offer } from '../assets/images'
import { arrowRight } from '../assets/icons'

const SpecialOffer = () => {
  return (
    <section className='flex flex-wrap items-center max-xl:flex-col-reverse gap-10 max-container'>
      <div className='flex-1'>
        <img src={offer} width={773} height={687} className='object-contain w-full'/>
      </div>
      <div className='flex flex-1 flex-col'>
        <h2 className='mt-10 pal-semibold text-4xl capitalize'>
          <span className='text-coral-red'> Special</span> Offer
        </h2>
        <br />
        <p className='mt-4 lg:max-w-lg font-sans text-slate-500 text-lg leading-7'>Winter sale items just dropped...</p>
        <p className='mt-6 lg:max-w-lg font-sans text-slate-500 text-lg leading-7'>Check out our latest sale items, with up to 30% off select styles and colors.  Offer ends March 1st 2025.</p>
        <div className='mt-11 flex flex-wrap gap-4'>
          <Button
            label="Shop now"
            iconURL={arrowRight}
          />
          <Button 
            label="Learn More"
            backgroundColor="bg-white"
            borderColor="border-slate-gray"
            textColor="text-slate-gray"
          />
        </div>
      </div>
    </section>
  )
}

export default SpecialOffer