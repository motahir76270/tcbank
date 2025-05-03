import React, { useContext, useState } from 'react'
import axios from 'axios'
import { useEffect} from 'react'
import { toast } from 'react-toastify';
import { UserContext } from '../contextapi/index';

const LoanSection = () => {
const  { creditdetails } = useContext(UserContext);
//console.log(creditdetails)

const [loanData , setLoanData] =useState([])
  const loanDetail = async() => {
    const token = JSON.parse(localStorage.getItem('token'));
    const userId = JSON.parse(localStorage.getItem('userId'));
    const { data } = await axios.get(`http://3.110.164.139:8080/loan/get-all/${userId}?userId=${userId}`,
      {
        headers: { 
          'Authorization': `Bearer ${token}`
        }
      } )
      console.log(data);
      if(data.code == 1){
        setLoanData(data.data);
      }else{
        toast.warning('something went wrong');
      }
  } 

  useEffect( ()=> {
  loanDetail();
  },[]);

  return (
    <>

    <nav className='flex w-100%'> 
         <a href="/loanApply">
     <button className='bg-[#A20A3A] w-[30rem] h-10 border-gray-400 border-1 text-gray-200 hover:bg-[#a20a3ad3] cursor-pointer'> Apply Loan</button>
        </a>
      
        <a href="/credit-card">
     <button className='bg-[#A20A3A] w-[30rem] h-10 border-gray-400 border-1 text-gray-200 hover:bg-[#a20a3ad3] cursor-pointer'> Apply Credit </button>
        </a>

  
    </nav>


    <main className=' flex h-80  mt-10 mx-20 justify-between'> 
    {loanData.map((elem) => (
  <div 
    key={elem.id}
    className="max-w-md  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mb-6 transition-all duration-300 hover:shadow-lg"
  >
    <div className="p-8" key={elem.id}>
      <div className="flex justify-between items-start">
        <div>
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Loan ID: #{elem.loanId}
          </div>
          <div className="mt-1 flex items-center">
            <span className="text-gray-900 font-bold text-2xl">
              ₹{elem.loanAmount?.toLocaleString('en-IN')}
            </span>
            <span className={`ml-3 px-2 py-1 text-xs rounded-full ${
              elem.status === 'approved' ? 'bg-green-100 text-green-800' :
              elem.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-red-100 text-red-800'
            }`}>
              {elem.status?.charAt(0).toUpperCase() + elem.status?.slice(1)}
            </span>
          </div>
        </div>
        <div className="bg-indigo-100 p-2 rounded-lg">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </div>
      </div>

      <div className="mt-15 border-t border-gray-200 pt-4">
        <div className="flex items-center text-gray-500 text-sm">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          Created: {new Date(elem.createdAt).toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })}
        </div>

        <div className="mt-4 flex space-x-4">
          <button className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            View Details
          </button>
          <button className="px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Download
          </button>
        </div>
      </div>
    </div>
  </div>
))}
    <hr />



   <section className="bg-white w-80 h-74 ml-10 rounded-lg shadow-md overflow-hidden">
  <div className="border-b border-gray-200 px-6 py-4 bg-gray-50">
    <h3 className="text-lg font-medium text-gray-900">Credit Details</h3>
  </div>
  
  <div className="divide-y divide-gray-200">
    {Object.entries(creditdetails).map(([key, value]) => (
      <div key={key} className="px-6 py-4 hover:bg-gray-50 transition-colors duration-150">
        <div className="grid grid-cols-3 gap-4 ">
          <dt className="text-sm font-medium text-gray-500 capitalize">
            {key.replace(/([A-Z])/g, ' $1').trim()}
          </dt>
          <dd className="col-span-2 text-sm ml-20 text-gray-900 font-mono truncate">
            {String(value) || <span className="text-gray-400 italic">Not available</span>}
          </dd>
        </div>
      </div>
    ))}
  </div>
  
  <div className="bg-gray-50 px-6 py-3 text-right">
    <span className="text-xs text-gray-500">Last updated: {new Date().toLocaleString()}</span>
  </div>
</section>

    </main>

   



    </>
  )
}

export default LoanSection