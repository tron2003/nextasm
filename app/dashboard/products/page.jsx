import React from 'react'
import Search from '@/app/ui/dashboard/dash/search.jsx'
import Link from 'next/link'

export default function Page() {
  return (
    <div className='h-screen'>
      <div className=' flex flex-col  bg-sky-700  p-4 rounded-lg'>

        <div className='flex flex-row justify-between items-center mb-4'>
          <Search placeholder="Search for a Product..." />
          <Link href='/dashboard/products/add'>
            <button className='text-white text-xs font-semibold bg-violet-700 p-2 rounded-lg hover:bg-slate-700'>
              Add New
            </button>
          </Link>
        </div>

        <div className='relative  '>
          <div className='bg-black opacity-50'></div>
          <table className=' w-full text-sm text-left rounded-lg rtl:text-right'>
            <thead className='text-xs uppercase '>
              <tr>
                <th scope='col' className=' px-6 py-3   '>Tile</th>
                <th scope='col' className=' px-6   py-3'>description</th>
                <th scope='col' className=' px-6 py-3'>price</th>
                <th scope='col' className=' px-6 py-3'>createdat</th>
                <th scope='col' className=' px-6 py-3'>Stock</th>
                <th scope='col' className=' px-6 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className=''>
                <td className='py-2  px-6'>Thello</td>
                <td className='py-2 px-6 '>Mal@gmail.comr</td>
                <td className='py-2 px-6'>1961</td>
                <td className='py-2 px-6'>client</td>
                <td className='py-2 px-6'>passive</td>
                <td className='py-2 px-6 flex gap-2'>
                  <Link href="/dashboard/users">
                    <button className='text-sm font-semibold bg-red-500 text-white rounded-lg p-1'>view</button>
                  </Link>
                  <Link href="/dashboard/users">
                    <button className='text-sm font-semibold bg-green-500 text-white rounded-lg p-1'>edit</button>
                  </Link>
                </td>
              </tr>
              <tr className=''>
                <td className='py-2 px-6'>Thello</td>
                <td className='py-2 px-6'>Mal@gmail.comr</td>
                <td className='py-2 px-6'>1961</td>
                <td className='py-2 px-6'>client</td>
                <td className='py-2 px-6'>passive</td>
                <td className='py-2 px-6 flex gap-2'>
                  <Link href="/dashboard/users">
                    <button className='text-sm font-semibold bg-red-500 text-white rounded-lg p-1'>view</button>
                  </Link>
                  <Link href="/dashboard/users">
                    <button className='text-sm font-semibold bg-green-500 text-white rounded-lg p-1'>edit</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='flex  flex-row justify-between'>
          <Link href="/prev">
            <button className='bg-green-900 p-2 rounded-lg text-xs  font-semibold'>--Previous</button>
          </Link>
          <Link href="/rere">
            <button className='bg-green-900 p-2 rounded-lg text-xs font-semibold'>Next++</button>
          </Link>
        </div>
      </div>
    </div>

  )
}
