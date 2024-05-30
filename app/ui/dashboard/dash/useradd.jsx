// import {addUser} from '@/app/lib/actions.js'
// import React from 'react'

// export default function addUserPage() {
//   return (
//     <div className='h-screen'>
//       <div className="p-4 bg-sky-700 rounded-md">

//         <form action={addUser} className='flex flex-col gap-4' >

//           <div className="flex flex-row gap-5 justify-between">
//             <div className="flex flex-col gap-8 w-full">
//               <input name="username" placeholder='Username' type="text" className=' bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' required />
//               <input name="email" placeholder='Password' type='text' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' required />
//               <label className='bg-blue-900 pl-3 pt-5 pb-5 border-none rounded-md text-left w-full'>
//                 <select name="isAdmin" id="isAdmin" className='text-white bg-blue-900 border-none rounded-md w-full'>
//                   <option value={false} className='text-white'>isAdmin?</option>
//                   <option value={true}>Yes</option>
//                   <option value={false}>No</option>
//                 </select>
//               </label>
//             </div>

//             <div className="flex flex-col gap-8 w-full">
//               <input placeholder='Email' type="email" name="email" className=' bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' />
//               <input placeholder='Phone No.' type='phone' name="phone" className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' />

//               <label className='bg-blue-900 pl-4 pt-5 pb-5 border-none rounded-md text-left w-full'>
//                 <select name="isActive" id="isActive" className=' bg-blue-900 border-none rounded-md w-full'>
//                   <option value={true} className='text-white'>isActive?</option>
//                   <option value={true}>Yes</option>
//                   <option value={false}>No</option>
//                 </select>
//               </label>
//             </div>
//           </div>

//           <div className='w-full'>
//             <textarea name="address"
//               id="address" placeholder='Address' className='w-full h-48 rounded-md bg-blue-900 pl-4 pt-2 pb-2 pr-5'></textarea>
//           </div>

//           <button type="submit" className='bg-teal-400 h-16 rounded-md font-semibold text-md'>Submit</button>
//         </form>

//       </div>
//     </div>
//   )
// }
