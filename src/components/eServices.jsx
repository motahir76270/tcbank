import React from 'react';

const EServices = () => {
  // Left side services
  const featuredServices = [
    { name: "Fintech Initiatives", icon: "💻" },
    { name: "Positive Pay System", icon: "🔒" },
    { name: "WhatsApp Banking", icon: "💬" },
    { name: "OTP Based Aadhar", icon: "📱" }
  ];

  // Right side services
  const digitalServices = [
    "Retail Internet Banking",
    "Corporate Internet Banking",
    "BHIM TCB UPI",
    "Green-PIN Debit Card",
    "Missed Call Services"
  ];

  const otherServices = [
    "E-Statement",
    "SMS Banking",
    "Point Of Sale",
    "Card Transaction Control",
    "More Services"
  ];

  return (
    <div className='eServices flex w-300 h-60 bg-white fixed z-111 ml-20 mt-[-6px] rounded-md shadow-lg border border-gray-200 overflow-hidden'>
      {/* Left Panel - Featured Services */}
      <div className='w-100 border-r border-gray-200 p-3 bg-gray-50'>
        <h3 className='text-xs font-semibold text-[#A20A3A] mb-3'>FEATURED E-SERVICES</h3>
        <div className='flex flex-col gap-2'>
          {featuredServices.map((service, index) => (
            <button 
              key={index}
              className='flex items-center gap-2 w-full p-2 text-left text-xs hover:bg-[#A20A3A] hover:text-white transition-colors duration-200 rounded border border-gray-300'
            >
              <span className='text-sm'>{service.icon}</span>
              <span>{service.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Middle Panel - Digital Banking Services */}
      <div className='flex-1 flex divide-x divide-gray-200 overflow-hidden'>
        <div className='w-1/2 p-3 overflow-y-auto'>
          <h3 className='text-xs font-semibold text-[#A20A3A] mb-3'>DIGITAL BANKING</h3>
          <ul className='space-y-2'>
            {digitalServices.map((service, index) => (
              <li key={index}>
                <a href="#" className='flex items-center text-xs hover:text-[#A20A3A] transition-colors'>
                  <span className='w-2 h-2 bg-[#A20A3A] rounded-full mr-2'></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className='w-1/2 p-3 overflow-y-auto'>
          <h3 className='text-xs font-semibold text-[#A20A3A] mb-3'>OTHER SERVICES</h3>
          <ul className='space-y-2'>
            {otherServices.map((service, index) => (
              <li key={index}>
                <a href="#" className='flex items-center text-xs hover:text-[#A20A3A] transition-colors'>
                  <span className='w-2 h-2 bg-[#A20A3A] rounded-full mr-2'></span>
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right Panel - Quick Action Card */}
      <div className='w-80 border-l border-gray-200 p-3 flex flex-col justify-between bg-gray-50'>
        <div>
          <h3 className='text-xs font-semibold text-[#A20A3A] mb-2'>QUICK ACCESS</h3>
          <div className='bg-white border border-gray-300 rounded p-2 h-32 flex flex-col justify-center items-center text-center'>
            <div className='text-2xl mb-2'>📱</div>
            <p className='text-xs font-medium'>TCB mBanking</p>
            <p className='text-[10px] text-gray-600 mt-1'>Download our mobile app</p>
            <button className='mt-2 text-xs bg-[#A20A3A] text-white px-3 py-1 rounded hover:bg-[#8A0932] transition-colors'>
              Download Now
            </button>
          </div>
        </div>
        <a href="#" className='text-[10px] text-[#A20A3A] hover:underline text-center block'>View all e-services →</a>
      </div>
    </div>
  );
};

export default EServices;