import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'

export const RecentProjects = () => {
  return (
    <div className='py-20' id='project'>
        <h1 className='heading'>
            Our {' '}
            <span className='text-blue-400'>Team</span>
        </h1>
        <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
            {projects.map(({ id, title, des, img}) => (
                <div key={id} className='lg:min-h-[32.5rem] h-[30rem] flex items-center justify-center sm:w-96 w-[80vw}'>
                   <PinContainer title={title}>
                    <div className='relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[45vh] lg:h-[40vh] mb-10'>
                        <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                            <img src="/bg.png" alt="bg-img" />
                        </div>
                        <img 
                        src={img} 
                        alt={title}
                        className='z-10 absolute-bottom-0' />
                    </div>
                    <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>
                        {des}
                    </h1>
                    
                   </PinContainer>
                </div>
            ))}
            

        </div>
        

    </div>
    
  )
}
