'use client'
import Link from 'next/link'
import React from 'react'
import { GrTransaction } from "react-icons/gr";
import { FaUserAstronaut } from "react-icons/fa";
import { IoPricetagsOutline } from "react-icons/io5";
import { FaUsers } from "react-icons/fa";
import { HiOutlineUsers } from "react-icons/hi2";
import { TbReportSearch } from "react-icons/tb";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiDashboardHorizontalLine } from "react-icons/ri";
import { IoSettingsOutline } from "react-icons/io5";
import Image from 'next/image'
import { LuLogOut } from "react-icons/lu";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { usePathname } from 'next/navigation';


export default function Sidebar() {
    const pathname = usePathname(); // Get the current pathname
    // HTMLFormControlsCollection.
    return (
        <div className='text-white flex flex-col '>
            {/* Pages */}
            <div className="flex flex-row pb-4 pt-3 items-center gap-3">
                <Image src="/noavatar.png" alt='product image' width="50" height="50" className='rounded-full  inline ' />
                Tron
            </div>
            <pages className="">
                <ul className='text-md font-semibold'>Pages</ul>
                <div className='flex flex-col p-3 text-md font-normal'>
                    {/* Links for Pages */}
                    <Link href="/dashboard" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <RiDashboardHorizontalLine className="inline " />
                        Dashboard
                    </Link>
                    <Link href={`/dashboard/users`} className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <FaUserAstronaut className='inline' />
                        Users
                    </Link>
                    <Link href={`/dashboard/products`} className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <IoPricetagsOutline className='inline' />
                        Products
                    </Link>
                    <Link href="/Transactions" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <GrTransaction className='inline' />
                        Transactions
                    </Link>
                </div>
            </pages>

            {/* Analytics */}
            <analytics className="">
                <ul className='text-md font-semibold'>Analytics</ul>
                <div className='flex text-md flex-col p-3  font-normal'>
                    {/* Links for Analytics */}
                    <Link href="/dashboard" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg '>
                        <IoBriefcaseOutline className="inline " />
                        Revenue
                    </Link>
                    <Link href="/users" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <TbReportSearch className='inline' />
                        Reports
                    </Link>
                    <Link href="/products" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <FaUsers className='inline' />
                        Teams
                    </Link>
                </div>
            </analytics>

            {/* User */}
            <user className="">
                <ul className='text-md font-semibold'>User</ul>
                <div className='flex flex-col p-3 text-md font-normal'>
                    {/* Links for User */}
                    <Link href="/dashboard" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg '>
                        <IoSettingsOutline className="inline " />
                        Settings
                    </Link>
                    <Link href="/users" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <IoIosHelpCircleOutline className='inline' />
                        Help
                    </Link>
                    <Link href="/products" className='flex gap-2 items-center hover:bg-sky-700 p-3 rounded-lg'>
                        <LuLogOut className='inline' />
                        Logout
                    </Link>
                </div>
            </user>
        </div>
    )
}
