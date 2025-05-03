import React, {  useEffect,useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import CardChip from '../assets/chip.png'

const Creditsection = () => {
  const { id } = useParams();
  const [allcredit , setAllcredit] =useState([]);

  const datahalder = async() => {
    const token = JSON.parse(localStorage.getItem('token'));

    const  {data}  = await axios.get('http://3.110.164.139:8080/creditCard/get-all',
      {
        headers: { 
          'Authorization': `Bearer ${token}`,
        }
      });
      // console.log(data.data);
      setAllcredit(data.data);
    } 
      useEffect( () => {
       datahalder();
      },[]);

   const getCardColor = (type) => {
    const colorMap = {
      SILVER: 'bg-gradient-to-br from-gray-400 to-gray-100',
      GOLD: 'bg-gradient-to-br from-yellow-500 to-yellow-200',
      PLATINUM: 'bg-gradient-to-br from-gray-200 to-gray-400',
      TITANIUM: 'bg-gradient-to-br from-gray-600 to-gray-300',
      BLACK: 'bg-gradient-to-br from-gray-900 to-gray-700',
      INFINITE: 'bg-gradient-to-br from-blue-900 to-blue-500',
      SIGNATURE: 'bg-gradient-to-br from-red-900 to-gray-800',
      ROYALE: 'bg-gradient-to-br from-purple-300 to-blue-300',
      IMPERIAL: 'bg-gradient-to-br from-red-600 to-red-800',
      CLASSIC: 'bg-gradient-to-br from-blue-800 to-blue-600',
      VALUE_PLUS: 'bg-gradient-to-br from-green-500 to-teal-300',
      PREMIER: 'bg-gradient-to-br from-orange-400 to-pink-300',
      TRAVEL: 'bg-gradient-to-br from-blue-800 to-teal-400',
      SHOPPING: 'bg-gradient-to-br from-pink-500 to-blue-500',
      CASHBACK: 'bg-gradient-to-br from-orange-500 to-yellow-500',
      MOVIE: 'bg-gradient-to-br from-red-800 to-purple-900',
      DINING: 'bg-gradient-to-br from-red-600 to-orange-400',
      ENTERTAINMENT: 'bg-gradient-to-br from-purple-700 to-red-600',
      LIFESTYLE: 'bg-gradient-to-br from-blue-500 to-blue-700',
      BUSINESS_BASIC: 'bg-gradient-to-br from-purple-800 to-teal-500',
      BUSINESS_PRO: 'bg-gradient-to-br from-blue-400 to-blue-600',
      BUSINESS_ELITE: 'bg-gradient-to-br from-purple-800 to-blue-700',
      CORPORATE_PLUS: 'bg-gradient-to-br from-green-800 to-emerald-200',
      CORPORATE_EXECUTIVE: 'bg-gradient-to-br from-blue-900 to-blue-400',
      STUDENT: 'bg-gradient-to-br from-green-300 to-teal-300',
      YOUTH: 'bg-gradient-to-br from-pink-600 to-blue-800',
      CAMPUS: 'bg-gradient-to-br from-red-400 to-yellow-300',
      GREEN: 'bg-gradient-to-br from-green-600 to-lime-400',
      CHARITY: 'bg-gradient-to-br from-red-600 to-orange-500'
    };
    
    return colorMap[type] || 'bg-gradient-to-br from-indigo-600 to-purple-600';
  };

  const getTextColor = (type) => {
    const darkTypes = ['BLACK', 'INFINITE', 'SIGNATURE', 'IMPERIAL', 'MOVIE', 'CORPORATE_EXECUTIVE'];
    return darkTypes.includes(type) ? 'text-gray-600' : 'text-gray-700';
  };

  

  return (
    <>
    <section className='  py-10 bg-[#D5C7BC] overflow-y-scroll overflow-x-auto'>
      
   <div className="flex gap-5 mx-4  py-32  ">

    {/* adds sections */}
    <div className='w-[720rem] h-150'>
     <div className="max-w-2xl mx-auto bg-gradient-to-br from-indigo-900 to-purple-800 rounded-2xl overflow-hidden shadow-2xl transform hover:scale-[1.02] transition-all duration-300 group">
  {/* Card Header */}
  <div className="px-8 pt-8 pb-6">
    <div className="flex justify-between items-start">
      <div>
        <span className="inline-block px-3 py-1 bg-white/20 rounded-full text-xs font-semibold text-white mb-2">LIMITED OFFER</span>
        <h2 className="text-3xl font-bold text-white">Premium Credit Card</h2>
        <p className="text-indigo-200 mt-1">Exclusive benefits for elite members</p>
      </div>
      <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
        <img src={CardChip} alt="" className='w-20 rounded-sm' />
      </div>
    </div>
  </div>

  {/* Features List */}
  <div className="bg-white/10 backdrop-blur-sm px-8 py-6 border-t border-white/10">
    <ul className="space-y-4">
      <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">5X Reward Points</p>
          <p className="text-indigo-200 text-sm">On all dining and entertainment purchases</p>
        </div>
      </li>
      <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">No Foreign Transaction Fees</p>
          <p className="text-indigo-200 text-sm">Use anywhere in the world with zero fees</p>
        </div>
      </li>
      <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">Priority Pass Access</p>
          <p className="text-indigo-200 text-sm">Complimentary airport lounge membership</p>
        </div>
      </li>
      <li className="flex items-start">
        <div className="flex-shrink-0 mt-1">
          <svg className="h-5 w-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <div className="ml-3">
          <p className="text-white font-medium">Rs:600 Travel Credit</p>
          <p className="text-indigo-200 text-sm">Annual credit for travel purchases</p>
        </div>
      </li>
    </ul>
  </div>

  {/* CTA Section */}
  <div className="px-8 py-6 bg-white/5 flex justify-between items-center">
    <div>
      <p className="text-indigo-200 text-sm">Annual Fee</p>
      <p className="text-white font-bold">
        <span className="line-through text-indigo-300 mr-2">&#8377;550</span>
        <span className="text-2xl">&#8377;450</span> first year
      </p>
    </div>
    <button className="px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full text-indigo-900 font-bold hover:shadow-lg hover:from-amber-500 hover:to-amber-700 transition-all duration-200 transform hover:-translate-y-0.5">
      Apply Now →
    </button>
  </div>
</div>
    </div>


      
      {/* all credit card sections  */}
      <div className="flex flex-wrap sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
        {allcredit.map((card) => (
          <main className='w-240 flex  h-105 bg-gray-200 px-1 rounded-sm'>
          <div 
          key={card.id}
          className={`${getCardColor(card.type)} ${getTextColor(card.type)} w-[30rem] h-60  mt-10 ml-[2rem] rounded-xl shadow-lg overflow-hidden  transition-transform duration-300 hover:scale-105 hover:shadow-xl`}
          >
            <div className="p-5 h-full flex flex-col ">
              <div className="flex justify-between items-start mb-2 pb-4 border-b border-opacity-20 border-white">
                <h3 className="text-xl font-bold">{card.name}</h3>
                <span className="text-xs font-semibold bg-gray-200 bg-opacity-20 px-3 py-1 rounded-full">
                  {card.type.replace(/_/g, ' ')}
                </span>
              </div>
              
              <div className="flex-grow">
                <div className='flex gap-5'>
                  <img src={CardChip} alt="" className='w-14 rounded-lg' />
                  <h1 className='mt-2'>Virtual Card</h1>
                </div>

                <div className="bg-opacity-10  rounded-lg mt-5">
                  <div className="flex flex-col">
                    <h1 className='text-sm'>Card Number</h1>
                    <span className="font-medium">7683-8738-8748-8478</span>
                    
                  </div>
                </div>

                   {/* card horlder name */}
                  <div className='flex justify-between mt-2'>
                    <div>
                   <h2 className='text-sm'>Card Holder</h2>
                    <h1 className='font-bold'>Jonh </h1>
                    </div>

                    <div>
                     <p>Expires</p>
                     <h1>04/28</h1>
                    </div>

                  </div>


              </div>
            </div>
          </div>


          <div>
             <div className='flex flex-col gap-5'>
              <h1 className='font-bold text-2xl ml-10 mt-10'>Tech Code Bank {card.name}</h1>
             <p className="opacity-90 ml-10 "><b>Description</b>:{card.description}</p>
             <ol className='ml-14 flex flex-col gap-2 list-disc'>
              <li>Luxury stay gift card from EaseMyTrip worth ₹10,000</li>
              <li>Special Access to The Quorum club with exceptional benefits</li>
              <li>Unlimited complimentary access to international and domestic airport lounges</li>
             </ol>

             <div className='flex ml-10  gap-4 bg-gray-200 w-[25rem] h-10 p-2 py'>
             <p>Joining Fee:&#8377;500+GST</p>
             <p className=''> Annual Fee:&#8377;{card.annualFee}+GST</p>
             </div>
             </div>
              <a href={`/credit/${card.id}`}>
              <button className="mt-4 ml-[-23rem] w-[20rem] py-2 px- bg-[#A20A3A] bg-opacity-90 text-gray-300 font-semibold rounded-lg hover:bg-opacity-20 transition-all duration-200 hover:-translate-y-1 hover:cursor-pointer border-[#A20A3A] border-1 hover:bg-none">
                Apply Now
              </button>
              </a>
          </div>
        </main>
        ))}
      </div>
    </div>
        </section>
    </>
  )
}

export default Creditsection