import React, { useState } from 'react'
import { motion ,useScroll,useMotionValueEvent} from 'framer-motion';
function Work() {
  const [images,setImages] = useState(
    [
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef09178195ce0073e38f3_Refokus%20Tools-1.png" ,top:"35%",left:"50%",isActive:false
  
      },
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0accfe1b3e66bc55462_Refokus%20Tools.png" ,top:"42%",left:"47%",isActive:false
  
      },
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0acbc45cb2f4fc5c6b2_Yahoo.png" ,top:"49%",left:"50%",isActive:false
      },
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef092455ce2cf591e52d1_Rainfall.png" ,top:"56%",left:"40%",isActive:false
      },
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0ac7e7179d210dc41f0_Summon.png",top:"58%",left:"50%",isActive:false
      },
      {
        url:"https://cdn.prod.website-files.com/6334198f239547d0f9cd84b3/634ef0af108a465002975acd_Showcase%20Websites%20(1).png",top:"60%",left:"48%",isActive:false
      }
    ]
  );
  const { scrollYProgress } = useScroll();

scrollYProgress.on("change", (data) => {
  function imagesShow(arr){
    setImages((prev)=>
    prev.map((ele,index)=>
      arr.indexOf(index)===-1 ? {...ele, isActive : false} :{...ele , isActive :true}
    )
    );
  }
  data=Math.floor(data*100);
  // console.log(data +" hai")
  switch(Math.floor(data )){
      case 0: imagesShow([]);
      break;
      case 1:imagesShow([0]);
      break;
      case 4:imagesShow([0,1]);
      break;
      case 6:imagesShow([0,1,2]);
      break;
      case 7:imagesShow([0,1,2,3]);
      break;
  }
})

  return (
    <div className='w-full'>
    <div className='max-w-screen-2xl text-white text-center bg-black  p-0 relative'>
    
    <p className='text-[40vw] text-center  font-sans font-medium hover:cursor-default leading-none relative overflow-hidden'> work</p>
    <p className='relative pt-0 mt-0 font-light text-slate-400 '>Web design, Web Development, Creative Development </p>
    <div className='w-full h-full absolute top-0 '>
      {
        images.map((ele,index)=> (ele.isActive && <img src={ele.url} alt="" className='absolute w-60 rounded-md -translate-x-[30%] -translate-y-[10%]' style={{top:ele.top,left:ele.left}}/> )
        )
      }
    </div>
    </div>
    
    </div>
  )
}

export default Work;