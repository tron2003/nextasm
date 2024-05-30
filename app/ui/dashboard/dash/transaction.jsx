// import Image from 'next/image';
import React from 'react';

export default function Transaction() {
  return (
    <div className='bg-sky-700 flex rounded-lg flex-col gap-4'>
      <h1 className='ml-2 mt-2 text-xl font-medium'>Latest Transactions</h1>
      <div className='relative overflow-x-auto rounded-lg'>
        <table className='w-full text-sm text-left rounded-lg rtl:text-right'>
          <thead className='text-xs uppercase'>
            <tr>
              <th scope='col' className='px-6 py-3'>
                Name
              </th>
              <th scope='col' className='px-6 py-3'>
                Status
              </th>
              <th scope='col' className='px-6 py-3'>
                Date
              </th>
              <th scope='col' className='px-6 py-3'>
                Amount
              </th>
            </tr>
          </thead>
          <tbody className=''>
            <tr className='bg-sky-700'>
              <th scope='row' className='flex flex-row gap-1 px-6 py-4 font-medium whitespace-nowrap justify-items-center'>
                <img src='/noavatar.png' alt='Product Image' className="rounded-full" width={50} height={50} />
                Johnny Bravo
              </th>
              <td className=' px-6 py-4 '>

                <span className='text-xs font-md bg-yellow-400 p-1 rounded-md'>Pending</span>

              </td>
              <td className='px-6 py-4'>
                <span>14.02,2023 </span>
              </td>
              <td className='px-6 py-4'>
                <span>

                  $2999
                </span>
              </td>
            </tr>
            <tr className='bg-sky-700'>
              <th scope='row' className='flex flex-row gap-1 px-6 py-4 font-medium whitespace-nowrap'>
                <img src='/noavatar.png' alt='Product Image' className="rounded-full" width={25} height={25}  />
                Johnny Bravo
              </th>
              <td className=' px-6 py-4 '>

                <span className='text-xs font-md bg-slate-400 p-1 rounded-md'>Done</span>

              </td>
              <td className='px-6 py-4'>
                <span>14.02,2023 </span>
              </td>
              <td className='px-6 py-4'>
                <span>

                  $2999
                </span>
              </td>
            </tr>
            <tr className='bg-sky-700'>
              <th scope='row' className='flex flex-row gap-1 px-6 py-4 font-medium whitespace-nowrap'>
                <img src='/noavatar.png' className="rounded-full" width={25} height={25} alt='Product Image' />
                Johnny Bravo
              </th>
              <td className=' px-6 py-4 '>

                <span className='text-xs font-md bg-red-600 p-1 rounded-md'>Cancelled</span>

              </td>
              <td className='px-6 py-4'>
                <span>14.02,2023 </span>
              </td>
              <td className='px-6 py-4'>
                <span>

                  $2999
                </span>
              </td>
            </tr>
            <tr className='bg-sky-700'>
              <th scope='row' className='flex flex-row gap-1 px-6 py-4 font-medium whitespace-nowrap'>
                <img src='/noavatar.png' className="rounded-full" width={25} height={25} alt='Product Image' />
                Johnny Bravo
              </th>
              <td className=' px-6 py-4 '>

                <span className='text-xs font-md bg-yellow-400 p-1 rounded-md'>Pending</span>

              </td>
              <td className='px-6 py-4'>
                <span>14.02,2023 </span>
              </td>
              <td className='px-6 py-4'>
                <span>

                  $2999
                </span>
              </td>
            </tr>
            <tr className='bg-sky-700'>
              <th scope='row' className='flex flex-row gap-1 px-6 py-4 font-medium whitespace-nowrap'>
                <img src='/noavatar.png' className="rounded-full" width={25} height={25} alt='Product Image' />
                Johnny Bravo
              </th>
              <td className=' px-6 py-4 '>

                <span className='text-xs font-md bg-slate-400 p-1 rounded-md'>Done</span>

              </td>
              <td className='px-6 py-4'>
                <span>14.02,2023 </span>
              </td>
              <td className='px-6 py-4'>
                <span>

                  $2999
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
