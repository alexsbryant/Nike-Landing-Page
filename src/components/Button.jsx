import React from 'react'

const Button = ({ label, iconURL }) => {
  return (
    <button className='flex justify-center items-center gap-2 w-50 h-13 px-7 py-4 border font-mont text-lg leading-none bg-red-400 rounded-full text-white border-red-400'>
        {label}
        <img 
          src={iconURL} 
          alt="arrow right" 
          className='ml-2 rounded-full w-5 h-5'
        />
    </button>
  )
}

export default Button