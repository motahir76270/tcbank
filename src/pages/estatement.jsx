import React, { useEffect, useState ,useContext } from 'react';
import axios from 'axios';
import { UserContext } from '../contextapi/index';

const Estatement = () => {
    const [trasactionhistory , setTrasactionhistory] =useState([]);
    

   const historyHanlde = async() => {
    try{
       const userId = JSON.parse(localStorage.getItem('userId'));
       const token = JSON.parse(localStorage.getItem('token'));

       const {data} = await axios.get(`http://3.110.164.139:8080/transactions/history/${userId}`,
        {  headers: { 
            'Authorization': `Bearer ${token}`
        } }
       ) 
       
         const trasaction = data.data.transactionResponseDTOs;
         localStorage.setItem('trasaction' , JSON.stringify(trasaction))
         console.log(trasaction)
         setTrasactionhistory(trasaction);
        
      }catch(err){
        console.log(err)
        
      }
    }
    
    useEffect( ()=> {
      historyHanlde();
       localStorage.getItem('trasaction')
   },[])
  


  return (
    <div className="max-w-6xl h-150 mx-auto p-6 bg-gray-100 rounded-lg shadow-md overflow-y-scroll">
      <div className="flex items-center mb-6 ml-[2rem]">
        <h2 className="text-2xl font-bold text-[#A20A3A]">Transaction History</h2>
      
      </div>

      <div className="overflow-x-auto overflow-y-scroll">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Description
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Category
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Date
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
             
              <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                Amount
              </th>
            </tr>
          </thead>

           <tbody className="bg-white divide-y divide-gray-200 overflow-y-scroll">
            {trasactionhistory.slice(1).reverse().map((data) => (
              <tr key={data.transactionId} className="hover:bg-gray-50">
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">{data.description}</div>
                      <div className="text-sm text-gray-500">{data.transactionType}</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{data.transactionType}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">{new Date(data.timestamp).toLocaleDateString()}</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${data.status === 'completed' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                    {data.status}
                  </span>
                </td>
              
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <span className={data.transactionType === 'DEPOSIT' ? 'text-green-600' : 'text-red-600'}>
                    Rs {data.transactionType === 'DEPOSIT' ? '+' : '-'}{data.amount.toFixed(2)}
                  </span>
                </td>
              </tr>
            ))}

          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Estatement;