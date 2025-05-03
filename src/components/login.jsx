import React from 'react'
import warning from '../assets/warning.png'
import rupee from '../assets/rupee.png'
import tv from '../assets/tv.png'
import creditcard from '../assets/creditcard.png'
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
 import { useContext  } from 'react'
import { UserContext }  from '../contextapi/index.jsx'
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom'


const Login = () => {
  const [email , setEmail] = React.useState('')
  const [password , setPassword] = React.useState('')
  const navigate = useNavigate();

 // const [ userdata , setUserData] = React.useState([])
   const  {setUserData } = useContext(UserContext);

   const handleSubmit = async(event) => {
     event.preventDefault();
    
    console.log(email , password)
       try {
      const { data } = await axios.post('http://3.110.164.139:8080/user/login', {
          email,
          password  
      },
      {
        headers: {
          'Content-Type': 'application/json',

        }
      })
    
      console.log(data.data)
      
      const userdata = data.data ;
      //const size = Object.keys(user).length;
      
      if(data.code == 1) { 
        localStorage.setItem('user', JSON.stringify(userdata))
        localStorage.setItem('token', JSON.stringify(userdata.token))  
        setUserData(userdata);
        toast.success('login success')
        navigate('/')
      }else{
        toast.warning('Invalid userId or password')
        setEmail('')
        setPassword('')
      }

    } catch (error) {
      console.error('Login error:', error)
      toast.error('Invalid userId or password')
    }
  }




  return (
    <>
 
     <h1 className='bg-[#A20A3A] w-100% h-10 mt-2 p-1 px-125 text-white text-lg relative top-33'>Welcome to PNB internet banking</h1>
    <main className='flex px-40 h-200 py-10 gap-10 relative top-30'>
    <section className='left-side '>
    <div className='w-90 h-108 bg-gray-100 border-1'>
      <h2 className='ml-4'>Exiting users login! if Not? <a className='text-[blue]' href="/signup">signup</a> </h2>
      <hr />
 <form action="post" onSubmit={handleSubmit}>
      <div className='flex flex-col gap-5 px-4 py-4'>

         <div>
              <label htmlFor="">Email ID</label>
              <input className='border-1 rounded-sm bg-white w-55 h-8 ml-7.5 text-black px-4' type="text"  placeholder='' required value={email} onChange={(e) =>setEmail(e.target.value) } />
        </div>
        <div>
               <label htmlFor="">password</label>
                <input className='border-1 rounded-sm bg-white w-55 h-8 ml-5 text-black px-4' type="text"  placeholder='' id='passwprd' required value={password} name={password} onChange={(e) =>setPassword(e.target.value) } />
         </div>
      </div>
     <hr />

     <div className='securitytips overflow-y-scroll'>
       <p className='p-1 px-4'> <a href="">Security tips</a></p>

       <ol className='list-decimal p-4 px-10 text-sm'>
        <li>Do not reveal passwords over phone/email etc. to any person including Bank.</li>
        <li>Change your password regularly. Keep your password a combination of alphabets, special characters and numbers.</li>
        <li>Forget your passwor  <NavLink to='/user/cahge-password' className='text-blue-400' > Reset Password </NavLink> </li>
       </ol>
     </div>
     <hr />
      <button type='submit' className='bg-[#FDBD30] w-30 h-8 rounded-sm mt-1 ml-25 hover:bg-[#fdbc30c9] text-white'> Continue </button>

 </form>
  
    </div>
    </section>
    <section className='flex flex-col right w-150 gap-4'>
      <img className='w-190 h-80' src="https://netbanking.netpnb.com/corp/L001/consumer/images/Login_pic.jpg?mtime=1674807782000" alt="" />

      <div className='flex gap-7'>
        <div className='card w-32 h-25 border-1 rounded-sm p-2'>
          <a className='text-[#A20A3A] text-sm' href="">Demo video</a>
          <img className='w-10 ml-8' src={tv} alt="" />
        </div>

        <div className='card w-32 h-25 border-1 rounded-sm p-2'>
          <a  className='text-[#A20A3A] text-sm' href=""> Enable tax facility</a>
          <img className='w-10 ml-8' src={rupee} alt="" />
        </div>

        <div className='card w-32 h-25 border-1 rounded-sm p-2'>
          <a className='text-[#A20A3A] text-sm' href="">Disable IBS  and MBS</a>
          <img className='w-10 ml-8' src={warning} alt="" />
        </div>

         <div className='card w-32 h-25 border-1 rounded-sm p-2'>
          <a className='text-[#A20A3A] text-sm' href="">Creadit card enable</a>
          <img className='w-10 ml-6' src={creditcard} alt="" />
        </div>

      </div>
    </section>
    </main>
    </>

  )
}

export default Login

