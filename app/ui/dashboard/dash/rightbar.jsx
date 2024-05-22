import React from 'react'
import { FaFire } from "react-icons/fa";
import { FaPlayCircle } from "react-icons/fa";
export default function Rightbar() {
  return (
    <div className='mt-52 '>
      <div className="bg-sky-700 rounded-lg p-5 pl-6 flex flex-col gap-3 ">
        <img src="/astronaut.png" alt="Your Image" className="flex flex-end" />
        <div className="flex flex-row items-center gap-2">

          <FaFire className='icon' color="red" />    <span className='text-md font-bold inline'>Available Now</span>
        </div>

        <h1 className='font-bold'>How to use the new version of the admin dashboard? </h1>
        <span className=' text-xs '>Takes 4 minutes to learn</span>
        <p className='text-md p-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo sit amet risus tincidunt viverra. </p>
        <div className='flex flex-row items-center gap-2 bg-violet-700 mr-auto p-2 rounded-lg' >
          <FaPlayCircle />
          <span className='font-semibold'>Watch</span>
        </div>
      </div>

      <div className="">second box</div>
    </div>
  )
}
