import React from 'react'
import {useState} from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { toast } from 'react-toastify';
import axios from 'axios';
import Paysucess from './paysucess';

const Transfer = () => {
    const [ step, setStep ] = useState(1);

    const [ formData, setFormData ] = useState({
      receiverAccountNumber:'',
      amount: '',
      remarks: '',
      userId: '',
      userNetPassword: '',
    });

      const handleStep1Submit = (e) => {
    e.preventDefault();
    if (formData.amount && formData.remarks && formData.receiverAccountNumber) {
      setStep(2);
    } else {
      alert('Please fill out amount and remark');
    }
  };

  
      const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFinalSubmit = async(e) => {
      e.preventDefault();
      const token = JSON.parse(localStorage.getItem('token'))
      console.log('Submitted data:', formData);
      const receiverAccountNumber =formData.receiverAccountNumber ;
      const   amount =formData.amount;
      const remarks = formData.remarks;
      const userId = formData.userId ;
      const userNetPassword = formData.userNetPassword ;
      
      const  {data}  = await axios.post('http://3.110.164.139:8080/transactions/transfer',{
        receiverAccountNumber,
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
      console.log(data)

       if(data.code == 1){
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
       }else{
        toast.error("Transaction failed")
       }
      
    }

  return (
<>
    <div className='mt-5'>
      {step === 1 && (
        <form onSubmit={handleStep1Submit} action="" className='flex gap-14'>

          <div className='gap-66.5'>
          <label htmlFor="">Account Number</label>
          <br />
          <input type="number" className='border-1 border-gray-400 w-[20rem] h-10 bg-gray-300 px-5'  name="receiverAccountNumber"
              value={formData.receiverAccountNumber}
              onChange={handleChange}
              required /> 
          </div>


          <div className='gap-66.5'>
          <label htmlFor="">Amount</label>
          <br />
          <input type="number" className='border-1 border-gray-400 w-[10rem] h-10 bg-gray-300 px-5'  name="amount"
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
          <button type="submit" className='withdraw-btn w-[20rem] h-10 bg-blue-400 shadow-md rounded-sm'>Transerfer-next </button>
           </div>
 
        </form>
    )}

    </div>








   <section>
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
   </section>



</>
  )
}

export default Transfer