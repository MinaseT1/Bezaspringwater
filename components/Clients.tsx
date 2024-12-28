import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingcards'
import { companies, testimonials } from '@/data'

export const  Clients = () => {
  return (
    <div className='py-20'>
        <h1 className='heading'>
            We Deliver The Quality  {' '}
            <span className='text-blue-400'>Water</span>
        </h1>
        <div className='flex flex-col items-center'>
          <div className='[h-50] md:h-[30rem] rounded-md flex flex-col antialiased items-center relative overflow-hidden'>
          <InfiniteMovingCards
           items={testimonials}
           direction='right'
           speed='slow'
          />
          <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
            {companies.map(({id, img, name}) => (
              
              <div key={id} className='flex md:max-w-50 max-w-32 gap-2'>
                
                <img
                  src={img}
                  alt={name}
                  className='md:w-20 w-20 gap-2 '
                />
                
              
              </div>
            ))}
            
            
          </div>
          
          </div>
          
          </div>
          </div>
  )
}
