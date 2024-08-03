import React from 'react'
import FooterButton from './FooterButton'
function Footer() {
    let data =[
        {
            name:"Privacy Policy"
        },
        {
            name:"Cookie Policy"
        },{
            name:"Impressum"
        },{
            name:"Terms"
        },{
            name:"Webflow Agency"
        }
    ]
  return (
    <div className='h-10  flex flex-row justify-between overflow-hidden items-center'>
        <div className='flex flex-row gap-4 pl-10'>
        {
            data.map((ele,index)=> <FooterButton title={ele.name} key={index+ele.name}/> )
        }
    </div>
        <img src="https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/6637ba0d8481b4339b1cda4f_Frame%2048097733.svg" alt="" className='h-10 w-40 overflow-hidden absolute right-24' />
    </div>
  )
}

export default Footer