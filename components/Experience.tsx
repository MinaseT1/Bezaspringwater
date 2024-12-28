import { workExperience } from '@/data'
import React, { ReactNode } from 'react'
import { Button } from './ui/MovingBordes';

const Experience = () => {
  function card(value: { id: number; title: string; desc: string; className: string; thumbnail: string }, index: number, array: { id: number; title: string; desc: string; className: string; thumbnail: string }[]): ReactNode {
    throw new Error('Function not implemented.')
  }

  return (
    <div className='py-20' id='testimonials'>
        <h1 className='heading'>
            Beza Water is 
            <span className='text-blue-400'> Unique </span>
        </h1>
        <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
          {workExperience.map((card) =>(
            <Button
             key={card.id}
             duration={Math.floor(Math.random()* 10000 + 10000)}
             className='flex-1 text-white border-neutral-200 dark:border-slate-800'
            >
              <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2 '>
                <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-27 md:w-25 w-16'/>
                <div className='lg:ms-5'>
                  <h1 className='text-start text-xl md:text-2xl font-bold'>
                    {card.title}
                  </h1>
                  <p className='text-start text-white-100 mt-3 font-semibold'>
                    {card.desc}
                  </p>

                </div>
              </div>

            </Button>
          ))}
            

        </div>


    </div>
  )
}

export default Experience