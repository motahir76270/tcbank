import React from 'react'
import Box from '@mui/material/Box';
import TabList from '@mui/lab/TabList';
import Tab from '@mui/material/Tab';
import TabPanel from '@mui/lab/TabPanel';
import TabContext from '@mui/lab/TabContext';
import Dashboard from '../manager/dashboard'
import User from '../manager/user'
import Loandetail from '../manager/loandetail'
import Creditapp from '../manager/credit-app'


const Managerpanel = () => {
  const [value, setValue] = React.useState('1');
    const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <main className='w-100% py-34'>
      <Box width="100%" height={200} className="flex p-0 m-0"> 
      <TabContext width="100%" value={value} >
        <TabList  onChange={handleChange} orientation='vertical'  className='flex bg-gray-400  w-60 h-150 py-5  '>
          <Tab width="50%" label="dashboard"  value="1"  />
           <Tab width="50%" label="user" value="2"  />
          <Tab width="50%" label=" loan detail "  value="3"  />
          <Tab width="50%" label="credit card "  value="4"  />
        </TabList>

           <section className='bg-gray-200 w-[70rem] h-150  '>
        <TabPanel value="1">  <Dashboard /> </TabPanel>
        <TabPanel value="2"> <User /> </TabPanel>
        <TabPanel value="3">  <Loandetail /> </TabPanel>
        <TabPanel value="4">  <Creditapp />  </TabPanel>
    

      </section>

     </TabContext>
      </Box>

    </main>
  )
}

export default Managerpanel