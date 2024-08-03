import React from 'react'
import Button from './Button'
function NavBar() {
  return (
    <div className='flex justify-between items-center pr-10'>
        <div className='max-w-screen-xl p-6 flex flex-row gap-20 items-center '>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg" alt="" className='w-[100px] h-[20px] '/>
        <li className='flex gap-11 justify-center font-extralight text-sm font-sans '>
            <ul className='hover:cursor-pointer hover:font-semibold' >Home</ul>
            <ul className='flex justify-center items-center gap-1'><span className='inline-block w-1 h-1 bg-[#00FF19] rounded-full' style={{boxShadow:"0 0 0.85em #00FF19"}}></span>Work</ul>
            <ul className='hover:cursor-pointer hover:font-semibold'>About</ul>
            <ul className='hover:cursor-pointer hover:font-semibold'>News</ul>
            <ul className='hover:cursor-pointer hover:font-semibold'>Careers</ul>
        </li>
        
    </div>
    <Button content = {"Start a Project"}/>
    </div>
    
  )
}

export default NavBar