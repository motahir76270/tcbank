import React from 'react';

const Investors = () => {
  // Investor data
  const quickLinks = [
    { name: "Annual Reports", icon: "📈" },
    { name: "Quarterly Results", icon: "📊" },
    { name: "Investor Presentations", icon: "📑" },
    { name: "Shareholding Pattern", icon: "🧾" }
  ];

  const keyMetrics = [
    { label: "Market Cap", value: "₹1.2T" },
    { label: "EPS", value: "₹45.20" },
    { label: "P/E Ratio", value: "12.4" },
    { label: "Dividend Yield", value: "2.8%" }
  ];

  return (
    <div className='investors w-300 h-60 bg-white fixed z-111 ml-20 mt-[-6px] rounded-md shadow-lg border border-gray-200 overflow-hidden'>
      {/* Header */}
      <div className='bg-[#A20A3A] p-2 flex items-center justify-between'>
        <h2 className='text-white font-semibold text-sm'>Investor Relations</h2>
        <span className='text-xs text-white bg-[#8A0932] px-2 py-1 rounded-full'>NYSE: TCB</span>
      </div>
      
      {/* Main Content */}
      <div className='flex h-[calc(100%-36px)]'>
        {/* Left Section - Quick Links */}
        <div className='w-1/2 border-r border-gray-200 p-2'>
          <h3 className='text-xs font-semibold text-[#A20A3A] mb-2'>QUICK LINKS</h3>
          <ul className='space-y-1'>
            {quickLinks.map((item, index) => (
              <li key={index}>
                <a href="#" className='flex items-center text-xs p-1 hover:bg-gray-100 rounded transition-colors'>
                  <span className='mr-2'>{item.icon}</span>
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className='mt-3 p-2 bg-gray-50 rounded border border-gray-200'>
            <h4 className='text-[10px] font-medium text-gray-600 mb-1'>INVESTOR ALERT</h4>
            <p className='text-xs'>Q4 results announced on May 25</p>
          </div>
        </div>
        
        {/* Right Section - Key Metrics */}
        <div className='w-1/2 p-2'>
          <h3 className='text-xs font-semibold text-[#A20A3A] mb-2'>KEY METRICS</h3>
          <div className='grid grid-cols-2 gap-2'>
            {keyMetrics.map((metric, index) => (
              <div key={index} className='border border-gray-200 rounded p-2'>
                <p className='text-[10px] text-gray-600'>{metric.label}</p>
                <p className='text-sm font-bold'>{metric.value}</p>
              </div>
            ))}
          </div>
          
          <div className='mt-2 text-center'>
            <button className='text-xs bg-[#A20A3A] text-white px-3 py-1 rounded hover:bg-[#8A0932] transition-colors'>
              View Stock Chart
            </button>
          </div>
          
          <div className='mt-2 text-center'>
            <a href="#" className='text-[10px] text-[#A20A3A] hover:underline'>Contact Investor Relations →</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investors;