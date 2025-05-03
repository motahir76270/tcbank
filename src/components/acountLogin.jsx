import React from 'react'
import axios from 'axios'

import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AcountLogin = () => {
const [userId , setUserId] = React.useState('')
const [password , setPassword] = React.useState('')

const navigate = useNavigate();

const handleSubmit = async(event) => {
  try{

    event.preventDefault();
    
    const token = JSON.parse(localStorage.getItem('token'))

    const {data} = await axios.post('http://3.110.164.139:8080/account/login', {
        userId,
        password
    },
    {
        headers: { 
            'Authorization': `Bearer ${token}`
        }
      })
      console.log(data)
      const userid = data.data.userId;
      console.log(userid)
      localStorage.setItem('userId' , JSON.stringify(userid));
      const id = data.code;
      localStorage.setItem('code', JSON.stringify(id));
      if(data.code == 1){
        toast.success(data.message)
        navigate('/');
      }else{
        toast.error("userId or password Incoorect Enter")
        setUserId("")
        setPassword("")
      }
    }catch{
      toast.error("something went wrong")
    }
 }

  return (
    <>
    <div className='w-100% h-150 bg-red-300 py-36  px-[30rem]'> 
<section className='left-side '>
    <div className='w-90 h-108 bg-gray-100 border-1'>
      <h2 className='ml-4'> Loging your NetBanking Id ? <a href="/createAccount" className='text-blue-600'>Create Acccount</a> </h2>
      <hr />
 <form action="post" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5 px-4 py-4'>

         <div>
              <label htmlFor="">Bank ID</label>
               <input className='border-1 rounded-sm bg-white w-55 h-8 ml-9 text-black px-4' type="text"  placeholder='' value={userId} onChange={(e) =>setUserId(e.target.value) } />
        </div>
        <div>
               <label htmlFor="">password</label>
                <input className='border-1 rounded-sm bg-white w-55 h-8 ml-5 text-black px-4' type="text"  placeholder='' id='passwprd' value={password} name={password} onChange={(e) =>setPassword(e.target.value) } />
         </div>
      </div>
     <hr />

     <div className='securitytips overflow-y-scroll'>
       <p className='p-1 px-4'> <a href="">Security tips</a></p>

       <ol className='list-decimal p-4 px-10 text-sm'>
        <li>Do not reveal passwords over phone/email etc. to any person including Bank.</li>
        <li>Change your password regularly. Keep your password a combination of alphabets, special characters and numbers.</li>
        <li>Use on-screen KEYPAD for logging when you are not using your own PC.</li>
       </ol>
     </div>
     <hr />
      <button type='submit' className='bg-[#FDBD30] w-30 h-8 rounded-sm mt-1 ml-[7rem] hover:bg-[#fdbc30c9] text-white'> Continue </button>

 </form>
  
    </div>
    </section>
         </div>
    </>
  )
}

export default AcountLogin ;