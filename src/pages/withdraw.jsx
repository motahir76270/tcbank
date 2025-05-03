import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
import Paysucess from './paysucess';
//import { useNavigate } from 'react-router-dom';

const Withdraw = () => {
  //  const navigate = useNavigate();
    
  const [ step, setStep ] = useState(1);
  
  const [ formData, setFormData ] = useState({
    amount: '',
    remarks: '',
    userId: '',
    userNetPassword: '',
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
  };
  
  const handleStep1Submit = (e) => {
    e.preventDefault();
    if (formData.amount && formData.remarks) {
      setStep(2);
    } else {
      alert('Please fill out amount and remark');
    }
  };
  
  const handleFinalSubmit = async(e) => {
    
    try{
      e.preventDefault();
      
      const token = JSON.parse(localStorage.getItem('token'))
      console.log('Submitted data:', formData);
      
      const   amount =formData.amount;
      const remarks = formData.remarks;
      const userId = formData.userId ;
      const userNetPassword = formData.userNetPassword ;
      
      const  {data}  = await axios.post('http://3.110.164.139:8080/transactions/withdraw',{
        amount,
        remarks,
        userId,
        userNetPassword,
      } , 
      {
        headers: { 
          'Authorization': `Bearer ${token}`,
        }
      });
      if ( data.code == 1) {
        toast(<Paysucess /> ,{
        position: "top-center",
        autoClose: 12000,
        closeButton: false,
        hideProgressBar: true,
        style: {
          border: '1px solid #e0e0e0',
          borderRadius: '8px',
          marginTop:'100px',
          maxWidth: '320px',
          boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        }   

      });
    

      //setTimeout(() => navigate('/netbanking'), 1000);

   }else{
    toast.error(data.message)
   }
    }catch{
  toast.error('Transaction failed');
  //reset input value 
      }
  };


  return (
  <div className='mt-5'>

 {step === 1 && (
        <form onSubmit={handleStep1Submit} action="" className='flex gap-14'>
          <div className='gap-66.5'>
          <label htmlFor="">Account</label>
          <br />
          <input type="number" className='border-1 border-gray-400 w-[20rem] h-10 bg-gray-300 px-5'  name="amount"
              value={formData.amount}
              onChange={handleChange}
              required /> 
          </div>

          <div className='gap-40'>
            <label htmlFor="">Remark</label>
            <br />
            <input type="text" className='border-1 border-gray-400 w-[20rem] h-10 bg-gray-300 px-5'
              name="remarks"
              value={formData.remarks}
              onChange={handleChange}
              required />
          </div>

           <div className='absolute mt-20'>
          <button type="submit" className='withdraw-btn w-[20rem] h-10 bg-red-400 shadow-md rounded-sm'>Withdraw-next </button>
           </div>
 
        </form>
    )}

      {step === 2 && (
        <form onSubmit={handleFinalSubmit} className='flex flex-col gap-5 '>
<section className='paymentForm w-[30rem] h-80 bg-gray-900 fixed mt-[-25rem] ml-[10rem] z-111 opacity-[.9] px-10 py-8 flex flex-col gap-8'>
          
   <a href="/netbanking" className='absolute right-[3rem] mt-[-10px] text-3xl'>X</a>
        <p>Net UPI</p>

       <div className='flex flex-col'>
         
         
            <input className='border-1 px-30'  id="standard-basic" label="UserId" variant="standard"
              type="text"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              required
              />
      </div>

      <div className='flex flex-col'>
        
            <input className='payinput px-40 border-1'  
              type="password"
              name="userNetPassword"
              value={formData.userNetPassword}
              onChange={handleChange}
              required
              />
          
      </div>
          <div className='ml-[7rem]'>
          <Button variant="contained" type="submit" > proceed payment </Button>
          </div>
     </section>
        </form>
     
    )}
  


      </div>
      
  )
}

export default Withdraw