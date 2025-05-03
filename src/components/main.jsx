import React from 'react'
import Sliders from './slides'



const Main = () => {

  return  (
    <>
    <div className="bg-[#aa9ca1] w-100% h-110 relative top-34 w-100% "> 
      <Sliders />
      <div className='bg-[#FDBD30] w-100% h-12  '> 
        <p className='py-3 px-3 text-[#CD2159] font-bold'>It is informational  that the customer  charges for over and above free transactions on other bank's ATMs are revised as Rs.23/-per  financial transaction.</p>
      </div>
     </div>
    <hr />
    </>
  ) 
}

export default Main