import React from 'react';

const Products = () => {
  // Sample bank products data
  const products = [
    { name: "Premium Savings", interest: "4.25%", minBalance: "₹10,000" },
    { name: "Business Banking", interest: "3.75%", minBalance: "₹50,000" },
    { name: "Senior Citizen FD", interest: "7.50%", minBalance: "₹25,000" },
    { name: "Digital Savings", interest: "4.00%", minBalance: "₹5,000" },
  ];

  return (
    <div className='products w-300 h-60 bg-white fixed z-111 ml-20 mt-[-6px] rounded-md shadow-lg border border-gray-200 overflow-hidden'>
      {/* Header */}
      <div className='bg-[#A20A3A] p-2 flex items-center justify-between'>
        <h2 className='text-white font-semibold text-sm'>Our Banking Products</h2>
        <span className='text-xs text-white bg-[#8A0932] px-2 py-1 rounded-full'>New</span>
      </div>
      
      {/* Products Grid */}
      <div className='grid grid-cols-2 gap-2 p-2 h-[calc(100%-36px)] overflow-y-auto'>
        {products.map((product, index) => (
          <div key={index} className='border border-gray-100 rounded-sm p-2 hover:shadow-md transition-all duration-200'>
            <h3 className='text-xs font-medium text-[#A20A3A]'>{product.name}</h3>
            <div className='mt-1 flex justify-between items-center'>
              <span className='text-[10px] text-gray-600'>Rate:</span>
              <span className='text-xs font-bold'>{product.interest}</span>
            </div>
            <div className='mt-1 flex justify-between items-center'>
              <span className='text-[10px] text-gray-600'>Min Bal:</span>
              <span className='text-xs'>{product.minBalance}</span>
            </div>
            <button className='mt-2 w-full text-xs bg-[#A20A3A] text-white py-1 rounded hover:bg-[#8A0932] transition-colors'>
              Apply Now
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className='absolute bottom-0 left-0 right-0 bg-gray-50 border-t border-gray-200 p-1 text-center'>
        <a href="#" className='text-xs text-[#A20A3A] hover:underline'>View all products →</a>
      </div>
    </div>
  );
};

export default Products;