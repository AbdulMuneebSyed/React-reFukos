import React from 'react'
import Stripe from './Stripe.jsx'
function Stripes() {
    let data = [
        {
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            no:"15"
        },
        {
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            no:"2"
        },{
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            no:"52"
        },{
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
            no:"15"
        },
        {
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
            no:"2"
        },{
            url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
            no:"52"
        }
    ]
  return (
    <div className='bg-black overflow-hidden whitespace-nowrap py-20 pt-20'>
        <div className=' flex flex-row relative'>{data.map((ele,index)=> <Stripe url={ele.url} no={ele.no} key={index}/> ) }</div>
        
    </div>
    
  )
}

export default Stripes