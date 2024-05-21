'use client'
import React from 'react'
import { MdOutlineMessage } from "react-icons/md";
import { usePathname } from 'next/navigation'
import { FaSearch } from 'react-icons/fa'
import { FaRegBell } from "react-icons/fa6";
import Link from 'next/link';
import { IoEarth } from "react-icons/io5";
export default function navbar() {

    const path = usePathname();
    return (
        <div className='flex flex-row gap-3 h-full p-2 text-sm rounded-md bg-slate-700'>
            <span className='ml-0 flex items-center'>{path.split('/').pop()}</span>
            <dev className="ml-auto flex flex-row  items-center gap-2 max-w-screen-md  bg-slate-800 p-2  text-white rounded ">
                <FaSearch className='border-0  bg-slate-800 flex ' />
                <input placeholder='search ' type='text' className='text-sm  border-none bg-slate-800  outline-none ' ></input>
            </dev>
            <icons className='flex flex-row gap-3 items-center text-white mr-1'>
                <Link href="/message" className='text-white' >
                    <MdOutlineMessage className='' size={20} />
                </Link>
                <Link href="/notification">
                    <FaRegBell size={20} />
                </Link>
                <Link href="/worldwide">
                    <IoEarth size={20} />
                </Link>


            </icons>
        </div>
    )
}
