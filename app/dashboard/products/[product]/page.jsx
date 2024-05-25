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
            Title
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" name ="title" placeholder='JohTitle'></input>
          </label >
          <label className='flex flex-col rounded-lg '>
            Price
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="number" placeholder='price'></input>
          </label>
          <label className='flex flex-col '>
            Stock
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="number" placeholder='stocks'></input>
          </label>
          <label className='flex flex-col rounded-lg '>
            Color
            <input className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='color'></input>
          </label>
          <label className='flex flex-col rounded-lg '>
            Category
            <select className='p-3 mt-2 bg-blue-900 rounded-lg' type="text" placeholder='John Karten'>
              <option className='rounded-lg' value="kitchen">Kitchen</option>
              <option className='rounded-lg' value="computers">Computers</option>

            </select>
          </label>
          <label className='flex flex-col rounded-lg '>
            Description
            <textarea className='p-3 mt-2 bg-blue-900 rounded-lg'type="desc" placeholder='Description'></textarea>
          </label>



          <button type="submit" className='bg-teal-400 h-16 mt-6 rounded-md font-semibold text-sm'>Submit</button>
        </div>

      </div>



    </div>
  )
}
