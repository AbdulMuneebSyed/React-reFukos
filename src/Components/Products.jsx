import React, { useState } from 'react'
import Product from './Product'
import { motion } from 'framer-motion'


function Products() {
    const [pos,setPos] = useState(0);
    const data = [
        {
            name:"Arqitel",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"Cula",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"Layout Land",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"TTR",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:false
        },
        {
            name:"Maniv",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"Singularity",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"Like Magic",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        },
        {
            name:"Silvr",
            discription:"With a continuous 3D animation, we showcase Arqitel approach and show how migration data translates into real estate.",
            live:true
        }
    ]
    function mover(val){
        setPos(val * 14)
    }
  return (
    <div className='relative'>
      {data.map((ele,index) => <Product mover={mover} index={index} name={ele.name} discription={ele.discription} key={index+"name"} live={ele.live} /> ) }
      <div className='absolute  w-full h-full top-0 pointer-events-none'> 
      <motion.div initial={{y:pos}} animate={{y:pos+'rem'}} className='window left-96 overflow-hidden translate-y-[18rem] absolute w-[25rem] h-[13rem] bg-white rounded-lg'>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-100 '></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-200'></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-300'></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-400'></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-500'></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-600'></motion.div>
        <motion.div animate={{y:pos+'rem'}} className='w-full h-full bg-sky-700'></motion.div>
      </motion.div>
      </div>
    </div>
  )
}

export default Products