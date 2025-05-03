import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { toast } from 'react-toastify';


const Signup = () => {
 const navigate = useNavigate();

    const [user , setUser] = useState({
        name: "",
        email: "",
        phone: "",
        dob: "",
        password: "",
        gender:""
    })
    const hndlechange = (e) => {
        const {  name,value } = e.target
        setUser(prevUser => ({
            ...prevUser,
           [name] :value
        }))
    }
    const handleSubmit = async(e) => {
        e.preventDefault();

           try {
      const { data } = await axios.post('http://3.110.164.139:8080/user/register', {
          name: user.name,
          email: user.email,
          phone: user.phone,
          dob: user.dob,
          password: user.password,
          gender:user.gender
      },
        {
            headers: {
            'Content-Type': 'application/json'
            }
        }
    )
    console.log(data)
      console.log(data.data)
      const userdata = data.data;
      
      if(data.message == 'User Registerd Successfully') { 
        toast.success('login success')
        navigate('/login')
      }else{
        toast.error('login failed')
      }

    } catch (error) {
      console.error('Login error:', error)
      toast.warning('Invalid userId or password')
      navigate('/signup');
    }
    } 
 


  return (
    <div className=' w-100% h-120'>
        <h1 className='relative top-36 font-bold text-[#A20A3A] text-2xl text-center'>Please Register Your Account</h1>
        <div className='relative top-40 w-50% h-vh border-1 mx-60 py-4 px-[2rem]  justify-evenly text-center'>

            <form className='flex flex-col gap-5' action="" onSubmit={handleSubmit}>
                <div className='flex gap-20'>
                <input className='border-1 p-2 w-90' type="text" name='name' onChange={hndlechange} value={user.name} placeholder='Name' required />
                <input className='border-1 p-2 w-90' type="text" name='email' onChange={hndlechange} value={user.email} placeholder='Email' required />
                </div>

                <div className='flex gap-20'>
                <input className='border-1 p-2 w-90' type="text" name='phone' pattern='[0-9]{10}' minLength="10" maxLength="10" onChange={hndlechange} value={user.phone} placeholder='Phone' required />
                <input className='border-1 p-2 w-90' type="text" pattern='\d{2}-\d{2}-\d{4}' name='dob' onChange={hndlechange} value={user.dob} placeholder='DD-MM-YYYY' required />
                </div>

                <div className='flex gap-20'>
                {/* <input className='border-1 p-2 w-90' type="text" name='gender' onChange={hndlechange} value={user.gender} placeholder='Gender' required /> */}
                <select className='border-1 w-90' value={user.gender} name='gender' onChange={hndlechange} required>
                    <option  value="" > Select Gender </option>
                    <option  value="MALE"> MALE </option>
                    <option  value="FEMALE" > FEMALE</option>
                    <option  value="OTHER" > OTHER</option>
                </select>
                <input className='border-1 p-2 w-90' type="text" name='password' minLength="8" onChange={hndlechange} value={user.password} placeholder='password' required   />
                </div>
                <div>

                <button className='signup-btn w-70 h-10 bg-[#A20A3A] rounded-sm   hover:bg-[#a20a3ad7]'> SignUp</button>
                </div>

            </form>
        </div>
    </div>
  )
}

export default Signup