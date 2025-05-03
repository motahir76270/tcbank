import { useState } from 'react'
import './App.css'
import PageNotFound from './pages/pagenotfound'
import Navbar from './components/navbar'
import Main from './components/main'
import MobileBanking  from './components/mobileBanking'
import Marketfeed from './components/marketfeed'
import Footer from './components/footer'
import Login from './components/login'
import Forgetpaswd from './components/forgetpaswd' 
import Netpasswdreset from './components/netpasswdreset'
import Signup from './components/signup'
import NetBanking from './components/netBanking'
import { createBrowserRouter , RouterProvider} from 'react-router-dom'
import User from './components/user'
import  AcountLogin  from './components/acountLogin'
import CreatAccount  from './components/creatAccount'
import Creditapply from './pages/creditapply'
import Loanform from './pages/loanform'
import Creditsection from './pages/creditsection'
import ChagnePswdUser from './components/chagnePswdUser'
import Managerpanel from './components/managerpanel'


function App() {
  const [count, setCount] = useState(0)

   const router = createBrowserRouter([
    { path: '/', element : (
       <>     
     <Navbar />
     <Main />
     <MobileBanking />
     <Marketfeed />
     <Footer /> 
      </> ) },  
    { path: '/login', element : ( <>    <Navbar /> < Login /> <Footer />  </>  ) },  
    { path: "/signup", element : ( <>  <Navbar /> < Signup /> <Footer />   </> ) }, 
    { path: "/user", element : ( <>   <Navbar /> < User /> <Footer />   </> ) }, 
    { path: "/user/cahge-password", element : ( <>   <Navbar /> <ChagnePswdUser /> <Footer />   </> ) }, 
    { path: "/netbanking", element : ( <>  <Navbar />   <NetBanking /> <Footer />  </> ) } ,
    { path: "/al", element : ( <>  <Navbar />   <AcountLogin /> <Footer />  </> ) } ,
    { path: '/forgetPasswd', element : ( <>    <Navbar /> < Forgetpaswd /> <Footer />  </>  ) }, 
    { path: '/netPasswdchange', element : ( <>    <Navbar /> < Netpasswdreset /> <Footer />  </>  ) }, 
    { path: "/createAccount", element : ( <>  <Navbar />   <CreatAccount /> <Footer />  </> ) },
    { path: "/credit-card", element : ( <>  <Navbar />  <Creditsection/> <Marketfeed /> <Footer />  </> ) },
    { path: "/credit/:id", element : ( <>  <Navbar />   <Creditapply/>  <Footer />  </> ) },
    { path: "/loanApply", element : ( <>  <Navbar />   <Loanform/> <Footer />  </> ) },
    { path: '/manager', element : ( <>    <Navbar /> <Managerpanel />  </>  ) },  
    { path: '*', element : ( <>     < PageNotFound />  </>  ) },  
     
 
  ])

  return (
    <>
    
     <RouterProvider router={router} />
  
    </>
  )
}

export default App
