import React from 'react'
import { useState,useContext } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
import { toast } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
import Paysucess from './paysucess';
// import { UserContext } from '../contextapi/index';


const Diposite = () => { 
  const [paysucess , setPaysucess ] = useState(false);


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
        console.log('Submitted data:', formData);
        
        const token = JSON.parse(localStorage.getItem('token'))
        console.log('Submitted data:', formData);
        const   amount =formData.amount;
        const remarks = formData.remarks;
        const userId = formData.userId ;
        const userNetPassword = formData.userNetPassword ;
        
        const  {data}  = await axios.post('http://3.110.164.139:8080/transactions/deposite',{
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

    if( data.code == 1 ) {
      setPaysucess(true)
        //RESET DATA
          setFormData( {
          amount: '',
          remarks: '',
          userId: '',
          userNetPassword: '',
    })
      // toast( <Paysucess /> , {
      //   position: "top-center",
      //   autoClose: 6000,
      //   closeButton: false,
      //   hideProgressBar: true,
      //   style: {
      //     border: '1px solid #e0e0e0',
      //     borderRadius: '8px',
      //     marginTop:'100px',
      //     maxWidth: '320px',
      //     boxShadow: '0 3px 10px rgba(0, 0, 0, 0.1)',
      //     backgroundColor: 'white',
      //   }
      // });
    }else{
      toast.error('Incorrect Net Id or NetPIN')
            //RESET DATA
          setFormData( {
          amount: '',
          remarks: '',
          userId: '',
          userNetPassword: '',
    })
    }
      }catch{
         toast.error('Transaction failed'); 
      } 
     }

     if(paysucess) {
      toast( <Paysucess /> , {
        position: "top-center",
        autoClose: 6000,
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
     }

  return (
  <>
   
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
          <button type="submit" className='withdraw-btn w-[20rem] h-10 bg-green-400 shadow-md rounded-sm'>Deposite</button>
           </div>
 
        </form>
    )}

      {step === 2 && (
  <form onSubmit={handleFinalSubmit} className='flex flex-col gap-5'>
  <section className='paymentForm w-[30rem] h-90 bg-white fixed mt-[-27rem] ml-[10rem] z-[111] opacity-90 px-10 py-8 flex flex-col gap-6 rounded-lg shadow-xl border border-gray-200'>
    {/* Close Button */}
    <a href="/netbanking" className='absolute right-8 top-4 text-3xl text-gray-500 hover:text-gray-700 transition-colors'>×</a>
    
    {/* Title */}
    <h3 className='text-xl font-semibold text-gray-800'>Net UPI Payment</h3>

    {/* UPI ID Field */}
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-medium text-gray-600'>NET ID</label>
      <input 
        className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
        type="text"
        name="userId"
        value={formData.userId}
        onChange={handleChange}
        required
        placeholder="R025798399"
      />
    </div>

    {/* Password Field */}
    <div className='flex flex-col gap-1'>
      <label className='text-sm font-medium text-gray-600'>Password</label>
      <input 
        className='border border-gray-300 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all'
        type="password"
        name="userNetPassword"
        value={formData.userNetPassword}
        onChange={handleChange}
        required
        placeholder="Enter your password"
      />
    </div>

    {/* Submit Button */}
    <div className='flex justify-center mt-2'>
      <Button 
        variant="contained" 
        type="submit"
        sx={{
          bgcolor: '#1976d2',
          '&:hover': { bgcolor: '#1565c0' },
          px: 4,
          py: 1.5,
          fontSize: '1rem',
          textTransform: 'none'
        }}
      >
        Proceed to Payment
      </Button>
    </div>
  </section>
</form>
     
    )}

      </div>

  </>
  )
}

export default Diposite