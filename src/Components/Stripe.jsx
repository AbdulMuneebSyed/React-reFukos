import React from 'react'

function Stripe({url,no}) {
  return (
    <span className='flex flex-row w-60 gap-6 items-center border border-slate-600 p-2 h-20'> <img src={url} alt="" /> <span>{no}</span> </span>
  )
}

export default Stripe