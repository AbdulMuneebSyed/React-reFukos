import React from 'react'
import Button from './Button'
function Product({name,discription,live ,mover ,index}) {
  let bool = "Live Website";
  if(live===false){
    bool="Case Study";
  }
  
  return (
    <div onMouseEnter={()=>{mover(index)}} className='bg-black w-full h-56 flex items-center flex-row justify-between px-12 relative'>        
        <h1 className='text-5xl text-center'>{name}</h1>
        <div className='pr-40'><p className='w-72 mb-3'>{discription}</p>
        <Button content={bool} /></div>
        
    </div>
  )
}

export default Product