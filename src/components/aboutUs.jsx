import React from 'react';

const AboutUs = () => {
  return (
    <div className='aboutUs flex w-300 h-60 bg-white absolute z-111 ml-20 mt-[-6px] rounded-md shadow-lg border border-gray-100 overflow-hidden'>
      {/* Left Section - Organizational Structure */}
      <div className='w-80 border-r border-gray-200 p-4 flex flex-col gap-2 bg-gray-50'>
        <h1 className='text-[#A20A3A] font-bold text-sm'>Organisational Structure</h1>
        <button className='w-full py-1 text-xs hover:bg-[#A20A3A] hover:text-white transition duration-200 border border-[#A20A3A] rounded'>
          Board of Directors
        </button>
        <button className='w-full py-1 text-xs hover:bg-[#A20A3A] hover:text-white transition duration-200 border border-[#A20A3A] rounded'>
          Management Team
        </button>
        <button className='w-full py-1 text-xs hover:bg-[#A20A3A] hover:text-white transition duration-200 border border-[#A20A3A] rounded'>
          Committees
        </button>
      </div>
      
      {/* Middle Section - Links */}
      <div className='flex-1 flex gap-8 p-4 border-r border-gray-200 overflow-auto'>
        <ul className='flex flex-col gap-2'>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Schuna</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Origin of PNB</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Heritage</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Gallery</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Sports Activities</a>
          </li>
        </ul>

        <ul className='flex flex-col gap-2'>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Corporate Mission</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Profile</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Subsidiaries</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Business Report</a>
          </li>
          <li>
            <a href="#" className='text-xs hover:text-[#A20A3A] transition duration-200'>Learning Center</a>
          </li>
        </ul>
      </div>

      {/* Right Section - Cards */}
      <div className='w-100 p-3 flex flex-col gap-2 overflow-auto'>
        <div className='flex-1 min-h-0 grid grid-cols-2 gap-2'>
          <div className='bg-gray-50 rounded-sm p-2 flex items-center justify-center text-xs border border-gray-200 hover:bg-[#A20A3A] hover:text-white transition duration-200'>
            Card 1
          </div>
          <div className='bg-gray-50 rounded-sm p-2 flex items-center justify-center text-xs border border-gray-200 hover:bg-[#A20A3A] hover:text-white transition duration-200'>
            Card 2
          </div>
          <div className='bg-gray-50 rounded-sm p-2 flex items-center justify-center text-xs border border-gray-200 hover:bg-[#A20A3A] hover:text-white transition duration-200'>
            Card 3
          </div>
          <div className='bg-gray-50 rounded-sm p-2 flex items-center justify-center text-xs border border-gray-200 hover:bg-[#A20A3A] hover:text-white transition duration-200'>
            Card 4
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;