import React from 'react'

export default function ProductAdd() {
    return (
        <div className='h-screen'>
            <div className="p-4  bg-sky-700 rounded-md" >

                <form className='flex flex-col gap-4 '>

                    <div className=" flex flex-row gap-5  justify-between">
                        <div className="flex flex-col gap-8 w-full">
                            <input placeholder='Title' type="text" className='text-white bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80'></input>
                            <input placeholder='Price' type='number' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80'></input>
                            <input placeholder='color' type='text' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80'></input>

                        </div>

                        <div className="flex flex-col gap-8 w-full ">
                            <label className='bg-blue-900 pl-4 pt-5 pb-5 border-none rounded-md text-left w-full'>
                                <select className='text-white bg-blue-900 border-none rounded-md w-full'>
                                    <option disabled selected className='text-white'>Choose a Category?</option>
                                    <option value="general">Kitchen</option>
                                    <option value="phone">phone</option>
                                    <option value="computer">computer</option>
                                    <option value=""></option>
                                </select>
                            </label>
                            <input placeholder='stock' type="number" className=' text-white bg-blue-900 pl-3 pt-5 pb-5 rounded-md  text-left pr-80 '></input>
                            <input placeholder='size' type='number' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md  text-left pr-80'></input>



                        </div>

                    </div>
                    <div className='w-full'>
                        <textarea type="desc" placeholder='Description' className='w-full h-48 rounded-md bg-blue-900 pl-4 pt-2 pb-2 pr-5 ' ></textarea>

                    </div >
                    <button type="submit" className='bg-teal-400 h-16 rounded-md font-semibold text-md'>Submit</button>
                </form>

            </div>
        </div>

    )
}
