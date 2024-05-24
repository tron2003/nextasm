import React from 'react'

export default function UserAdd() {
  return (
    <div className='h-screen'>
      <div className="p-4  bg-sky-700 rounded-md" >

        <form className='flex flex-col gap-4 '>

          <div className=" flex flex-row gap-5  justify-between">
            <div className="flex flex-col gap-8 w-full">
              <input placeholder='Username' type="text" className='text-white bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80'></input>
              <input placeholder='Password' type='text' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80'></input>
              <label className='bg-blue-900 pl-3 pt-5 pb-5 border-none rounded-md text-left w-full'>
                <select className='text-white bg-blue-900  border-none rounded-md w-full'>
                  <option disabled selected className='text-white'>isAdmin?</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>
            </div>

            <div className="flex flex-col gap-8 w-full ">
              <input placeholder='Email' type="email" className=' text-white bg-blue-900 pl-3 pt-5 pb-5 rounded-md  text-left pr-80 '></input>
              <input placeholder='Phone No.' type='' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md  text-left pr-80'></input>

              <label className='bg-blue-900 pl-4 pt-5 pb-5 border-none rounded-md text-left w-full'>
                <select className='text-white bg-blue-900 border-none rounded-md w-full'>
                  <option disabled selected className='text-white'>isActive?</option>
                  <option value="1">Yes</option>
                  <option value="0">No</option>
                </select>
              </label>


            </div>

          </div>
          <div className='w-full'>
            <textarea type="string" placeholder='Address' className='w-full h-48 rounded-md bg-blue-900 pl-4 pt-2 pb-2 pr-5 ' ></textarea>

          </div >
          <button type="submit" className='bg-teal-400 h-16 rounded-md font-semibold text-md'>Submit</button>
        </form>

      </div>
    </div>

  )
}
