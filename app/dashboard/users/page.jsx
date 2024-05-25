'use client'
import React, { useEffect, useState } from 'react'
import Search from '@/app/ui/dashboard/dash/search.jsx'
import Link from 'next/link'
import fetchUsers from "@/app/lib/data"
// import { User } from '@/app/lib/models'
export default function Page() {

  const [users, setUsers] = useState([])
  const UsersPage = async () => {
    const users = await fetchUsers()
    setUsers(users)
    console.log(users)
  }



  return (
    <div className='h-screen'>
      <div className=' flex flex-col  bg-sky-700  p-4 rounded-lg'>

        <div className='flex flex-row justify-between items-center mb-4'>
          <Search placeholder="Search for a User..." />
          <Link href='/dashboard/users/add'>
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


                <th scope='col' className=' px-6 py-3'>Name</th>
                <th scope='col' className=' px-6   py-3'>Email</th>
                <th scope='col' className=' px-6 py-3'>Created</th>
                <th scope='col' className=' px-6 py-3'>Role</th>
                <th scope='col' className=' px-6 py-3'>Status</th>
                <th scope='col' className=' px-6 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>

              {users.map((user) => (



                <tr key={user.id}>





                  <td className='py-2  px-6'>
                    <div className=' flex flex-row gap-2'>
                      <img src={user.img || "/noavatar.png"} width={25} height={25} className='rounded-full'></img>
                      {user.username}
                    </div>
                  </td>
                  <td className='py-2 px-6 '>{user.email}</td>
                  <td className='py-2 px-6'>{user.createdAt}</td>
                  <td className='py-2 px-6'>{user.isadmin ? 'Admin' : 'User'}</td>
                  <td className='py-2 px-6'>{user.isactive ? 'Active' : 'Inactive'}</td>
                  <td className='py-2 px-6 flex gap-2'>
                    <Link href="/dashboard/users">
                      <button className='text-sm font-semibold bg-red-500 text-white rounded-lg p-1'>view</button>
                    </Link>
                    <Link href="/dashboard/users">
                      <button className='text-sm font-semibold bg-green-500 text-white rounded-lg p-1'>edit</button>
                    </Link>
                  </td>
                </tr>

              ))}

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