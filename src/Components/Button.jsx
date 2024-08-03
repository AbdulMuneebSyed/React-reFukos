import React from 'react'
import { IoIosReturnRight } from "react-icons/io";
import { FiCornerDownRight } from "react-icons/fi";
import { RiCornerDownRightFill } from "react-icons/ri";
import { IoMdReturnRight } from "react-icons/io";

function Button({content}) {
  return (
    <button className='mr-10 font-normal text-sm bg-white rounded-3xl text-black p-2 font-sans w-36'>{content}<IoMdReturnRight className='inline-block font-extrabold'/>
</button>
 
  )
}

export default Button