import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../contextapi/index';
import CardChip from '../assets/chip.png'

const VirtualCard = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { acountdata } = useContext(UserContext);
  const vicard = acountdata.card;
  const userName = acountdata.userName;

  // Format card number with spaces
  const formatCardNumber = (number) => {
    return number.replace(/(\d{4})/g, '$1 ').trim();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[600px] bg-gray-200 p-6">
      {/* 3D Card Container */}
      <div 
        className="w-[380px] h-[240px] perspective-1000 cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        {/* Card element with flip animation */}
        <div className={`relative w-full h-full transition-all duration-700 ease-in-out transform-style-preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}>
          
          {/* Front of the card - Premium Design */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-[#1a2a6c] to-[#b21f1f] text-white p-6 flex flex-col justify-between">
            {/* Card Header */}
            <div className="flex justify-between items-start">
              <div className="text-sm font-light opacity-80">{vicard.type}</div>
              <div className="text-2xl font-bold italic tracking-wider">VISA</div>
            </div>
            
            {/* Card Chip */}
            <div className="flex items-center gap-4 mt-4">
              <div className="w-12 h-8 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md flex items-center justify-center">
               <img src={CardChip} alt="" className='rounded-sm' />
              </div>
              <div className="text-xs font-light opacity-70">Virtual Card</div>
            </div>
            
            {/* Card Number */}
            <div className="mt-6">
              <div className="text-xs opacity-80 mb-1">Card Number</div>
              <div className="text-xl tracking-widest font-medium font-mono">
                {formatCardNumber(vicard.cardNumber)}
              </div>
            </div>
            
            {/* Card Footer */}
            <div className="flex justify-between items-end mt-4">
              <div>
                <div className="text-xs opacity-80">Card Holder</div>
                <div className="text-sm font-medium tracking-wider">{userName.toUpperCase()}</div>
              </div>  
              <div className="text-right">
                <div className="text-xs opacity-80">Expires</div>
                <div className="text-sm font-medium">{vicard.expiryDate}</div>
              </div>
            </div>
            
            {/* Glossy overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/20 pointer-events-none"></div>
          </div>

          {/* Back of the card - Security Features */}
          <div className="absolute w-full h-full backface-hidden rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 text-white rotate-y-180 transform-style-preserve-3d p-6">
            {/* Magnetic strip */}
            <div className="w-full h-8 bg-black mt-4"></div>
            
            {/* CVV Section */}
            <div className="bg-white h-10 mt-6 rounded flex justify-end items-center px-3">
              <div className="text-black font-mono tracking-widest">{vicard.cvv}</div>
            </div>
            <div className="text-xs text-gray-400 mt-1 text-right">CVV</div>
            
            {/* Bank Info */}
            <div className="mt-8 text-center">
              <div className="text-xs text-gray-400">Customer Service</div>
              <div className="text-sm">1800 123 4567</div>
            </div>
            
            {/* Hologram */}
            <div className="absolute bottom-4 left-4 w-12 h-8 bg-gradient-to-r from-yellow-400 via-purple-500 to-blue-500 rounded-sm opacity-80"></div>
            
            {/* Disclaimer */}
            <div className="absolute bottom-2 right-4 text-[8px] text-gray-500 text-right">
              This card is property of {acountdata.bankName || 'PNB Bank'}
            </div>
          </div>
        </div>
      </div>

      {/* Flip Button with Modern Design */}
      <button 
        onClick={() => setIsFlipped(!isFlipped)}
        className="mt-8 px-8 py-3 bg-gradient-to-r from-[#1a2a6c] to-[#b21f1f] text-white rounded-full hover:shadow-lg transition-all duration-300 flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
        </svg>
        {isFlipped ? 'Show Front Side' : 'Show Back Side'}
      </button>
      
      {/* Card Actions */}
      <div className="flex gap-4 mt-6">
        <button className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors">
          Freeze Card
        </button>
        <button className="px-5 py-2 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100 transition-colors">
          Share Details
        </button>
      </div>
    </div>
  );
};

export default VirtualCard;