import React from 'react'
import { FaUsers } from "react-icons/fa";
export default function totalusers() {
    return (


        <div className="bg-sky-700  flex flex-row gap-4 p-5 w-full rounded-lg hover:bg-sky-900">


            <FaUsers className='rounded-full mt-1' size={24} />
            <div className="flex flex-col gap-2  ">

                <span className='text-lg'>TotalUsers</span>
                <span className='text-2xl font-semibold'>2029</span>
                <span className='text-md'> <span className='text-green-400'>
                    {12}%
                </span > more than Prevoius</span>
            </div>


        </div>


    )
}
