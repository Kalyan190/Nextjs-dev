"use client"
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'

const ScrollToTop = () => {
   const [isVisisble,setisVisible] = useState(false)
   
   // show hide functionality - button appears when user scrolls down 
   useEffect(()=>{
      const toggleVisibility = ()=>{
         if(window.scrollY > 300){
            setisVisible(true)
         }else{
            setisVisible(false)
         }
      }
      window.addEventListener("scroll",toggleVisibility)
      return ()=> window.removeEventListener("scroll",toggleVisibility)
   },[])

   const scrollToTop = ()=>{
      window.scrollTo({
         top: 0,
         behavior: "smooth"
      })
   }

  return (
    <div className='fixed bottom-4 animate-pulse right-4 '>
      {
         isVisisble && (
            <button onClick={scrollToTop} className='bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none '>
               <FaArrowUp/>
            </button>
         )
      }
    </div>
  )
}

export default ScrollToTop