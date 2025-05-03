// contexts/UserContext.jsx
import { createContext, useState,useEffect } from 'react';


export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  //const [user, setUser] = useState([]);
  var [ userdata, setUserData ] = useState({});
  var [acountdata , setAcountdata] = useState([]);
  
  const [creditdetails ,setCreditdetails] = useState([])
  console.log(creditdetails)

    useEffect(() => {
  try {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  } catch (error) {
    console.error('Failed to parse user data', error);
    localStorage.removeItem('user');
  }
}, [setUserData]);



  useEffect(() => {
  try {
    const accoundetail = localStorage.getItem('accoundetail');
    const creditdata = localStorage.getItem('crditdetail')
    if (accoundetail) {
      setAcountdata(JSON.parse(accoundetail));
    }
    if(creditdata){
      setCreditdetails(JSON.parse(creditdata));
    }
  } catch (error) {
    console.error('Failed to parse user data', error);
    localStorage.removeItem('code');
    
  }
}, []);

   

   
  return (
    <UserContext.Provider value={{ userdata, setUserData , acountdata , setAcountdata, creditdetails , setCreditdetails }}>
      {children}
    </UserContext.Provider>
  );
};

