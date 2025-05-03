import React from 'react'

import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';

import Myprofile from '../pages/myprofile';
import AccountSumary from '../pages/accountSumary';
import Estatement from '../pages/estatement';
import Virtualcard from '../pages/virtualcard';
import LoanSection from '../pages/loanSection'
import Netpasswdreset from '../components/netpasswdreset'
import ForgetPassword from '../components/forgetpaswd'
import { toast } from 'react-toastify';

import { useNavigate } from 'react-router-dom';


function NetBanking() {
  
  const [value, setValue] = React.useState('1');
  const [acountdata , setAcountdata] = React.useState([]);

  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const accountLogout = () => {
    localStorage.removeItem('accoundetail');
    localStorage.removeItem('code');
    toast.success('Logout success');
    navigate('/')
    window.location.reload();
  }
 

  return (
    <div className='w-100% h-200 py-40 px-10 bg-gray-300'>

    <div className='absolute right-[2.5rem]'>
       <button onClick={accountLogout} className='logoutAcc-btn bg-red-600 w-26 h-10 hover:bg-red-400 cursor-pointer' >Logout</button>
    </div>
        <div>
         
    <Box width="100%" height={200} className="flex p-0 m-0"> 
      <TabContext width="100%" value={value} >
        <TabList  onChange={handleChange} orientation='vertical'  className='flex bg-amber-300  w-60 h-150 py-5  '>
          <Tab width="50%" label="Profile"  value="1"  />
           <Tab width="50%" label="Account Sumary" value="2"  />
          <Tab width="50%" label="e-statement"  value="3"  />
          <Tab width="50%" label="Get virtual-card"  value="4"  />
           {/* <Tab width="50%" label="Credit card"  value="5"  /> */}
           <Tab width="50%" label="Loan Section"  value="5"  />
           <Tab width="50%" label="change password"  value="6"  />
           <Tab width="50%" label="Reset Transaction PIN"  value="7"  />

         
        </TabList>

      <section className='bg-gray-200 w-[70rem] h-150  '>
        <TabPanel value="1">  <Myprofile  />  </TabPanel>
        <TabPanel value="2">  <AccountSumary /> </TabPanel>
        <TabPanel value="3">  <Estatement /> </TabPanel>
        <TabPanel value="4">   <Virtualcard />  </TabPanel>
        {/* <TabPanel value="5">   <Creditsection />  </TabPanel> */}
        <TabPanel value="5">   <LoanSection />  </TabPanel>
        <TabPanel value="6">   <ForgetPassword />  </TabPanel>
        <TabPanel value="7">   <Netpasswdreset />  </TabPanel>

      </section>

     </TabContext>
      </Box>
        </div>

    </div>
  )
}

export default NetBanking 