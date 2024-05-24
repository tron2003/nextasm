'use client'

import React from 'react'
import { FaSearch } from 'react-icons/fa'

export default function Search({ placeholder }) {
    return (
        <div className="">
            <div className="flex flex-row items-center gap-2 border-none bg-sky-800 p-2 pr-1 pl-3 text-white rounded-lg">
                <FaSearch className='flex flex-row size-3' />
                <input
                    placeholder={placeholder}
                    type='text'
                    className='text-xs border-none bg-sky-800 outline-none pl-1 placeholder-white'
                />
            </div>
        </div>
    )
}
