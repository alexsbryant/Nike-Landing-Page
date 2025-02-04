import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReviews = () => {
  return (
    <section className='max-container mx-auto'>
        <h3 className='pal-semibold text-4xl text-center w-fit mx-auto'>
          What Our
          <span className='text-coral-red'> Customers </span>
           Are Saying...
        </h3>
    <p className='m-auto mt-4 max-w-lg text-center info-text w-fit mx-auto'>Hear genuine stories from our satisfied customers.</p>
    <div className='mt-20 flex flex-wrap justify-center items-center max-md:flex-col gap-14'>
      {reviews.map((review) => (
        <ReviewCard 
          key={review.customerName}
          imgURL={review.imgURL}
          customerName={review.customerName}
          rating={review.rating}
          feedback={review.feedback}
        />
      ))}
    </div>

    </section>
  )
}

export default CustomerReviews
