'use client'
import React from 'react'
import Search from '@/app/ui/dashboard/dash/search.jsx'
import Link from 'next/link'
import { fetchProducts } from '@/app/lib/data.js'  
import Pagination from '@/app/ui/dashboard/dash/pagination.jsx'

const Page = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className='h-screen'>
      <div className='flex flex-col bg-sky-700 p-4 rounded-lg'>

        <div className='flex flex-row justify-between items-center mb-4'>
          <Search placeholder="Search for a Product..." />
          <Link href='/dashboard/products/add'>
            <button className='text-white text-xs font-semibold bg-violet-700 p-2 rounded-lg hover:bg-slate-700'>
              Add New
            </button>
          </Link>
        </div>

        <div className='relative'>
          <div className='bg-black opacity-50'></div>
          <table className='w-full text-sm text-left rounded-lg rtl:text-right'>
            <thead className='text-xs uppercase'>
              <tr>
                <th scope='col' className='px-6 py-3'>Title</th>
                <th scope='col' className='px-6 py-3'>Description</th>
                <th scope='col' className='px-6 py-3'>Price</th>
                <th scope='col' className='px-6 py-3'>Created At</th>
                <th scope='col' className='px-6 py-3'>Stock</th>
                <th scope='col' className='px-6 py-3'>Action</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className='py-2 px-6'>
                    <div className='flex flex-row gap-2'>
                      <img src={product.img} alt={"/noavatar.png"} width={25} height={25} className='rounded-full' />
                      {product.title}
                    </div>
                  </td>
                  <td className='py-2 px-6'>{product.desc}</td>
                  <td className='py-2 px-6'>{product.price}</td>
                  <td className='py-2 px-6'>{product.createdAt?.toString().slice(4, 16)}</td>
                  <td className='py-2 px-6'>{product.stock}</td>
                  <td className='py-2 px-6 flex gap-2'>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className='text-sm font-semibold bg-red-500 text-white rounded-lg p-1'>view</button>
                    </Link>
                    <Link href={`/dashboard/products/${product.id}`}>
                      <button className='text-sm font-semibold bg-green-500 text-white rounded-lg p-1'>edit</button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className=''>
          <Pagination count={count} />
        </div>
      </div>
    </div>
  )
}

export default Page
