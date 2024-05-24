import React from 'react';
import { FaFire, FaPlayCircle, FaRocket } from "react-icons/fa";
// import { CiLogout } from "react-icons/ci";
import { IoIosLogOut } from "react-icons/io";
export default function Rightbar() {
  return (
    <div className='mt-52'>
      {/* First Box */}
      <div className="relative bg-sky-700 rounded-lg p-5 flex flex-col gap-3 bg-cover bg-bottom" style={{ backgroundImage: "url('/astronaut.png')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative flex flex-row items-center gap-2">
          <FaFire className='icon' color="red" />
          <span className='text-md font-bold inline text-white'>Available Now</span>
        </div>
        <h1 className='relative font-bold text-white'>How to use the new version of the admin dashboard?</h1>
        <span className='relative text-xs text-white'>Takes 4 minutes to learn</span>
        <p className='relative text-md text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo sit amet risus tincidunt viverra.</p>
        <div className='relative flex flex-row items-center gap-2 bg-violet-700 p-2 rounded-lg self-start'>
          <FaPlayCircle />
          <span className='font-semibold text-white'>Watch</span>
        </div>
      </div>

      {/* Second Box */}
      <div className="relative bg-sky-700 rounded-lg flex flex-col gap-3 mt-5 p-6">
        <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg"></div>
        <div className="relative flex flex-row items-center gap-2">
          <FaRocket />
          <span className='text-md font-bold text-white'>Coming Soon</span>
        </div>
        <h1 className='relative font-bold text-white'>New Server actions are Available partial pre-rendering is coming up!</h1>
        <span className='relative text-xs text-white'>Boost your productivity</span>
        <p className='relative text-md text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec justo sit amet risus tincidunt viverra.</p>
        <div className='relative flex flex-row items-center gap-2 bg-violet-700 p-2 rounded-lg self-start'>
          < IoIosLogOut />
          <span className='font-semibold text-white'>Learn</span>
        </div>
      </div>
    </div>
  );
}
