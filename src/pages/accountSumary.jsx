import React from 'react';
import {  FiSettings, FiEye, FiEyeOff } from 'react-icons/fi';

import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import Transfer from './transfer';
import Withdraw from './withdraw';
import Diposite from './deposite';

import { useContext  } from 'react'
import { UserContext } from '../contextapi/index'



const AccountSumary = () => {
  
  
  var { acountdata }   = useContext(UserContext);
  
  var [showBalance, setShowBalance] = React.useState(false);
  
    const [value, setValue] = React.useState('1');
    
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    
   // Sample data
   const accounts = [
     {
       id: 1,
       type: 'Savings Account',
       number: acountdata.accountNumber,
       balance: Number(acountdata.balance),
       lastTransaction: '15 May 2023'
      }
    ];
  
  return (
    <div className="h-150 bg-gray-200 p-4 md:p-8">
      {/* Header */}
      <div className="flex  items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-blue-900"> Net Banking</h1>
          <p className="text-gray-600">Welcome back, Customer</p>
        </div>
       

      </div>

      {/* Account Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        {accounts.map(account => (
          <div key={account.id} className="bg-white rounded-lg shadow-md p-4 border-l-4 border-blue-600">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{account.type}</p>
                <p className="font-medium text-gray-800">XXXXXX{account.number.slice(-4)}</p>
              </div>
              <button 
                onClick={() => setShowBalance(!showBalance)}
                className="text-gray-500 hover:text-blue-600"
                >
                {showBalance ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            
            <div className="mt-4">
              <p className="text-gray-500 text-sm">Available Balance</p>
              <p className="text-2xl font-bold text-blue-900">
                {showBalance ? 
                  account.balance.toLocaleString('en-IN', { style: 'currency', currency: 'INR' }) 
                  : '••••••'}
              </p>
            </div>
            
            <div className="mt-4 flex justify-between text-sm">
              <p className="text-gray-500">Last transaction: {account.lastTransaction}</p>
              <button className="text-blue-600 font-medium">View Details</button>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Actions</h2>
        <div className="grid grid-col-2 gap-4">
            
       <Box width="100%" height={200} > 
      <TabContext width="100%" value={value} >
        <TabList  onChange={handleChange}  >
          <Tab width="33.33%" label="Withdraw" value="1"  />
          <Tab width="33.33%" label="Transfer"  value="2"  />
          <Tab width="33.33%" label="deposite"  value="3"  />
        </TabList>

        <TabPanel value="1"> <Withdraw />  </TabPanel>
        <TabPanel value="2">  <Transfer />   </TabPanel>
       <TabPanel value="3">  <Diposite />  </TabPanel>
        
     </TabContext>
      </Box>

        </div>
      </div>


     
    </div>
  );
  
};
  export default AccountSumary;