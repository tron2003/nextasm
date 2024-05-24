import React from 'react'
import { FaRegCopyright } from "react-icons/fa";
export default function footer() {
    return (
        <div className='flex flex-row justify-between mt-20'>

            <div>TronAdmin</div>
            <div className=" flex flex-row gap-2 items-center ">
                <FaRegCopyright />
                <span>All rights reserved</span> </div>
        </div>
    )
}
