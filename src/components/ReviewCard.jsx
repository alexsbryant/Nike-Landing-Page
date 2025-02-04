import React from 'react'
import { star } from '../assets/icons'

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
  return (
    <div className='flex justify-center items-center flex-col text-center w-full max-w-md mx-auto'>
      <img 
        src={imgURL}
        alt="customer"
        className='rounded-full object-cover w-[120px] h-[120px]'
      />
      <p className='mt-6 max-w-sm text-center font-sans text-slate-500 text-lg leading-7'>{feedback}</p>
      <div className='mt-3 flex justify-center items-center gap-2.5'>
        <img 
          src={star}
          width={24}
          height={24}
          alt='rating star'
          className='object-contain m-0'
        />
        <p className='text-xl font-mont text-slate-500'>({rating})</p>
      </div>
      <h3 className='mt-1 pal-semibold text-xl text-center w-fit mx-auto'>{customerName}</h3>
    </div>
  )
}

export default ReviewCard