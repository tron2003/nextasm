import React from 'react';
import Sidebar from '@/app/ui/dashboard/sidebar/sidebar.jsx';
import Navbar from '../ui/dashboard/navbar/navbar.jsx';

export default function page({ children }) {
  return (
    <div className="flex flex-row bg-cyan-900">
      {/* Sidebar */}
      <div className="flex flex-colh bg-cyan-700 w-80 p-3">
        <Sidebar />
      </div>
      
      {/* Navbar */}
      <div className="flex-grow flex flex-col  gap-3  p-4">
        <div className="">
          <Navbar />
        </div>
        {/* Main Component */}
        <div className="text-white">
          {children}
        </div>
      </div>
    </div>
  );
};


