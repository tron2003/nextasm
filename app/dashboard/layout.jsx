import React from 'react';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar.jsx';
import Navbar from '../ui/dashboard/navbar/navbar.jsx';

export default function page({ children }) {
  return (
    <div className="flex flex-row h-screen  bg-sky-950">
      {/* Sidebar */}
      <div className="flex flex-col h-full bg-sky-900 w-60 p-3">
        <Sidebar />
      </div>
      
      {/* Navbar */}
      <div className="flex-grow flex flex-col  gap-3 h-full p-4">
        <div className="">
          <Navbar />
        </div>
        {/* Maon Component */}
        <div className="text-white">
          {children}
        </div>
      </div>
    </div>
  );
};


