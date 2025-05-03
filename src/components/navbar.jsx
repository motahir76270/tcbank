import React from 'react'
import Logo from '../assets/logo.png'
import { NavLink } from 'react-router-dom';
import { useState , useEffect } from 'react';
import AboutUs from './aboutUs'
import Produtcs from './produtcs'
import EServices from './eServices'
import Inverstors from './Investors'

import { useContext  } from 'react'
import { UserContext } from '../contextapi/index'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';

const Navbar = () => {
  var  { userdata }   = useContext(UserContext);
  var  { acountdata }   = useContext(UserContext);
  var   username  =[acountdata.userName];
  
  const [showpage, setShowPage] = useState(false);

  const { setAcountdata } = useContext(UserContext);
  
  const navigate = useNavigate();
  
  const toggle = (page) => {
    setShowPage(showpage === page ?null:page);
  }

  const handleLogout = async() => { 
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    setTimeout( ()=> { 
    localStorage.removeItem('accoundetail');
    }, 100);
    toast.success('Logout success');  
    navigate('/')
    window.location.reload();
  }

  const userCheck = () => {
     try{
      console.log('clicked');
      if(  userdata && Object.entries(userdata).length > 0 ){
        navigate('/user');
      }else{
        toast.warning('please login your user account');
        navigate('/login');
      }
     }catch{
      navigate('*');
     }
  }


  const handleAcount = async(e) => {
    try {
       e.preventDefault();
       console.log('clicked');  
 
       e.preventDefault();
       console.log('clicked');
       const token = JSON.parse(localStorage.getItem('token'));
       const code = JSON.parse(localStorage.getItem('code'));
   
       const {data} =  await axios.get(`http://3.110.164.139:8080/account/getById/${code}`,{
         headers: {
           'Authorization': `Bearer ${token}` 
         }
       });

      if( !(userdata && Object.entries(userdata).length > 0) ){
      toast.warning('please login your userid');
      navigate('/login'); 
       }
      const accoundetail = data.data;
    if( data.code == 1 ){
      setAcountdata(accoundetail);
      localStorage.setItem('accoundetail', JSON.stringify(accoundetail));
      console.log(accoundetail);
      toast.success('Account details fetched successfully');
      navigate('/netbanking');
    }else{
      navigate('/al')
    }
    } catch (error) {
    console.error('Error fetching account details:', error);
    navigate('/al');
     }        
  } 


  return (
    <>
    <nav className="fixed z-112 w-100% ">

      <div className="flex  justify-between  bg-[#A20A3A] w-[85rem]  h-20 py-5 px-[2rem] mt-[-8px]">
          <img src={Logo} alt=""  className='w-18 h-12 absolute rounded-full'/>
        <div className=''>
          <h1 className="text-[#FDBD30] font-bold text-xl ml-[7rem]">
            Tech Code bank
          </h1>
          <p className="text-white text-sm ml-[7rem]">...the name you can BANK upon !</p>
        </div>

        <div className="flex gap-3">
          <ul className='flex gap-3'>
            <li> <a href="" className='text-[#FDBD30] text-sm'>Fees and services</a></li>
            <li> <a href="" className='text-[#FDBD30] text-sm'>PNB Apps</a></li>
            <li><a href="" className='text-[#FDBD30] text-sm'>Calculator</a></li>
            <li> <a href="" className='text-[#FDBD30] text-sm' > Tenders </a></li>
            <li> <a href=""  className='text-[#FDBD30] text-sm' > Public Notices </a></li>
          </ul>
          <div className='flex gap-2'> 
            <input className='w-40 h-8 p-2 text-white bg-[#CD2159] rounded-sm' type="text" placeholder='Search'/>
            <ul>
                <li> <NavLink href=""  className='text-[#FDBD30] text-sm' >  Hi to 9264092640 </NavLink></li>
            </ul>
                   
           { userdata && Object.entries(userdata).length > 0 ? ( <div className='flex gap-5 text-center '> <h1 className='bg-blue-400 w-10 h-10 rounded-full p-1 text-2xl'> T </h1>  <button onClick={handleLogout} className="login-btn btn text-white w-30 h-10 bg-[#cd2159] rounded-lg"> logout</button> </div>
            ) : (  <NavLink to="/login"> <button className="login-btn btn text-white w-30 h-10 bg-[#cd2159] rounded-lg" > login </button> </NavLink>
            )}
            
          </div>
        </div>
      </div>

      <div className="flex py-2 px-30 gap-6 bg-[#FDBD30] w-100% h-16 sticky-top  ">
        
        <ul className='flex gap-10 my-auto font-bold text-2xl'>
             <li> <a href="/"  className='text-[#A20A3A] text-sm' > Home </a> </li>
             <li> <button   className='text-[#A20A3A] text-sm'  onClick={() => toggle('about')} > About Us <span className="material-symbols-outlined align-middle">keyboard_arrow_up</span> </button> </li>
             <li> <button  className='text-[#A20A3A] text-sm' onClick={() => toggle('Products')} > Products <span className="material-symbols-outlined align-middle">keyboard_arrow_up</span> </button></li>
              <li> <button  className='text-[#A20A3A] text-sm' onClick={() => toggle('Services')} > E-Services <span className="material-symbols-outlined align-middle">keyboard_arrow_up</span> </button></li>
             <li> <button  className='text-[#A20A3A] text-sm'  onClick={() => toggle('Inverstors')} > Inverstors <span className="material-symbols-outlined align-middle">keyboard_arrow_up</span> </button></li>
             { userdata.roleId === 1 ? <li> <NavLink to="/manager"  className='text-[#A20A3A] text-sm' > Dashboard </NavLink></li> : null } 
               <li> <button onClick={userCheck}  className='text-[#A20A3A] text-sm' > Account </button></li> 
                 
        </ul>
        <button onClick={ handleAcount } className='bg-[#A20A3A] text-white w-40 h-10 rounded-lg'> <a href="/netbanking"> Internet Banking </a> </button>
      </div>
      
      { showpage === 'about' && <AboutUs />  }
      { showpage === 'Products' &&  <Produtcs />  }
      { showpage === 'Services' &&  <EServices />  }
      { showpage === 'Inverstors' &&  <Inverstors />  }

    
    </nav>

    </>
  );
}

export default Navbar;