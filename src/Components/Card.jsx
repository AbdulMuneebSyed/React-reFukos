import React from 'react'
import { MdArrowRightAlt } from "react-icons/md";
function Card() {
  return (
    <div className='max-w-screen-xl h-[500px] p-10 flex flex-row gap-1'>
        <div className='flex flex-col w-2/5 bg-slate-700 px-5 py-5 rounded-lg hover:cursor-pointer'>
            <div className='flex justify-between'>
                <span className='font-extralight'>Up Next: News</span>
                <MdArrowRightAlt />
            </div>
            <div className='flex flex-col justify-between h-full'>
                <p className='font-sans text-wrap text-2xl pt-4 w-64'>
                    Insight and behind the scenes 
                </p>
                <div className='font-extralight text-slate-300 text-base'>explore what drives our team</div>
            </div>
            
        </div>
        <div className='w-3/4 flex flex-col px-5 py-5 rounded-xl bg-slate-700 hover:cursor-pointer'>
            <div className='flex justify-between '>
                <span className='font-extralight'>Get In Touch</span><MdArrowRightAlt />
            </div>
            <div className='flex flex-col justify-between h-full'>
                <p className='font-sans text-wrap text-3xl pt-4 w-64'>Let's get to it, together.</p>
                <div className='flex flex-col gap-5'>
                    <p className='text-8xl font-medium font-sans'>Start a Project</p>
                    <button className='h-10 w-32 rounded-3xl border border-white p-2'>Contact us</button>
                </div>
                </div>
        </div>
    </div>
  )
}

export default Card