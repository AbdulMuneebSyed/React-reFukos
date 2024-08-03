import React from 'react'

function FooterButton({title}) {
  return (
    <button className='h-8 w-20 text-sm flex-shrink text-nowrap text-gray-600 borderrounded-3xl'>{title}</button>
  )
}

export default FooterButton