'use client'
import React from 'react';
import { addUser } from '@/app/lib/actions.js';

export default function AddUsersPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    // You can access form data using event.target.elements
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    addUser(data); // Call your addUser function with form data
  };

  return (
    <div className='h-screen'>
      <div className="p-4 bg-sky-700 rounded-md">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
          <div className="flex flex-row gap-5 justify-between">
            <div className="flex flex-col gap-8 w-full">
              <input name="username" placeholder='Username' type="text" className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' required />
              <input name="password" placeholder='Password' type='password' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' required />
              <label className='bg-blue-900 pl-3 pt-5 pb-5 border-none rounded-md text-left w-full'>
                <select name="isAdmin" className='text-white bg-blue-900 border-none rounded-md w-full'>
                  <option value="">isAdmin?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </div>
            <div className="flex flex-col gap-8 w-full">
              <input name="email" placeholder='Email' type="email" className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' required />
              <input name="phone" placeholder='Phone No.' type='tel' className='bg-blue-900 pl-3 pt-5 pb-5 rounded-md text-left pr-80' />
              <label className='bg-blue-900 pl-4 pt-5 pb-5 border-none rounded-md text-left w-full'>
                <select name="isActive" className='bg-blue-900 border-none rounded-md w-full'>
                  <option value="">isActive?</option>
                  <option value="true">Yes</option>
                  <option value="false">No</option>
                </select>
              </label>
            </div>
          </div>
          <div className='w-full'>
            <textarea name="address" placeholder='Address' className='w-full h-48 rounded-md bg-blue-900 pl-4 pt-2 pb-2 pr-5' maxLength={200}></textarea>
          </div>
          <button type="submit" className='bg-teal-400 h-16 rounded-md font-semibold text-md'>Submit</button>
        </form>
      </div>
    </div>
  );
}
