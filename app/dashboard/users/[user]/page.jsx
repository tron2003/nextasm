import React from 'react'

export default function page() {
  return (
    <div className='h-screen'>
      <div className=' flex justify-between gap-10'>
        <div className=" ">
          <div className="w-full bg-blue-900 p-3 rounded-lg flex flex-col gap-2 ">

            <img src='/noavatar.png' width={450} height={450} className='rounded-md' ></img>
            <span className='pl-1'>Helo worlds</span>
          </div>
        </div>
        <div className="w-full flex flex-col gap-2 p-2 bg-sky-800 rounded-lg ">


          <label className='flex flex-col rounded-lg '>
            UserName
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='John Karten'></input>
          </label >
          <label className='flex flex-col rounded-lg '>
            Email
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="email" placeholder='Johnkarten@gmail.com'></input>
          </label>
          <label className='flex flex-col '>
            Password
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="password" placeholder='1212121'></input>
          </label>
          <label className='flex flex-col rounded-lg '>
            Address
            <textarea className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='John Karten'></textarea>
          </label>
          <label className='flex flex-col rounded-lg '>
            IsAdmin?
            <select className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='John Karten'>
              <option className='rounded-lg' value={true}>Yes</option>
              <option className='rounded-lg' value={false}>No </option>

            </select>
          </label>
          <label className='flex flex-col rounded-lg '>
            IsActive?
            <select className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='John Karten'>
              <option className='rounded-lg' value={true} >Yes</option>
              <option className='rounded-lg' value={false}>No </option>

            </select>
          </label>



          <button type="submit" className='bg-teal-400 h-16 mt-6 rounded-md font-semibold text-sm'>Submit</button>
        </div>

      </div>



    </div>
  )
}
