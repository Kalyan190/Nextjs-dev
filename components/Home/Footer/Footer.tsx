import React from 'react'
import { FaDribbble, FaFacebook, FaTwitter } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='mt-16 mb-4'>
        <div className='w-[80%] mx-auto items-start grid-cols-1 sm:grid-cols-2 grid md:grid-cols-2 lg:grid-cols-4 gap-10'> 
           <div className='space-y-5'>
              <h1 className='text-lg font-bold'>Solution</h1>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Enterprice</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Workflow</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Team</p>
           </div>

           <div className='space-y-5'>
              <h1 className='text-lg font-bold'>Company</h1>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>News & Press</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>

           </div>

           <div className='space-y-5'>
              <h1 className='text-lg font-bold'>Resources</h1>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Webinar & Events</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Podcast</p>
              <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>E-book & Guides</p>
           </div>

           <div className='space-y-5'>
              <h1 className='text-lg font-bold'>Contact Us</h1>
              <div className='mt-6'>
                 <h1 className='text-sm text-gray-600'>Our Mobile Number</h1>
                 <h1 className='text-base font-bold text-blue-950 mt-1'>+0123 433434343</h1>
              </div>

              <div className='mt-6'>
                 <h1 className='text-sm text-gray-600'>Our Email</h1>
                 <h1 className='text-base font-bold text-blue-950 mt-1'>kalyaniit795@gmail.com</h1>
              </div>
           </div> 
        </div>
        <div className='mt-8 py-3 w-[80%] mx-auto border-t flex flex-col md:flex-row justify-between items-center text-gray-600 text-sm'>
           <p className='text-center md:text-left'>copyright @ 2025 Webdev. All rights reserved</p>
           <div className='flex items-center space-x-4 mt-4 md:mt-0 '>
              <span>Social : </span>
              <span className='text-gray-500 hover:text-gray-800'><FaFacebook /></span>
              <span className='text-gray-500 hover:text-gray-800'><FaTwitter /></span>
              <span className='text-gray-500 hover:text-gray-800'><FaDribbble /></span>
           </div>
        </div>
    </div>
  )
}

export default Footer