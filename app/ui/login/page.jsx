import React from 'react'

export default function page() {
    return (
        <div className=' flex justify-center items-center h-screen bg-violet-700'>


            <div className=' bg-cyan-700 p-7 pt-14 pb-16 w-46 rounded-xl  '>
                <form className=' flex flex-col gap-4  w-full shadow-md'>
                    <input type='text' placeholder='Username' className='p-3 pr-14 bg-blue-950 text-white rounded-lg border-none'></input>
                    <input type='password' placeholder='Password' className='p-3  pr-14 bg-blue-950 text-white rounded-lg border-none'></input>
                    <button className='bg-emerald-400 border-none rounded-md p-4'> Login</button>
                </form>

            </div>
        </div>
    )
}
