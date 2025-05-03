import React from 'react'
import { toast } from 'react-toastify';

const Paysucess = () => {
  return (
   
        <div style={{ textAlign: 'center', padding: '15px 30px', fontFamily: 'Arial, sans-serif' }}>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '15px' }}>
              <div style={{
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                marginTop:'20px',
                backgroundColor: '#4BB543', // Green checkmark background
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 16.17L4.83 12L3.41 13.41L9 19L21 7L19.59 5.59L9 16.17Z" fill="white"/>
                </svg>
              </div>
            </div>
            <h3 style={{ margin: '10px 0 5px', color: '#333', fontSize: '18px' }}>Your payment was successful Deposite</h3>
            <p style={{ margin: '5px 0', color: '#666', fontSize: '14px', lineHeight: '1.4' }}>
              Thank you for your payment. We will<br />be in contact with more details shortly.
            </p>
            <button 
              style={{
                marginTop: '15px',
                padding: '8px 20px',
                backgroundColor: '#4BB543',
                color: 'white',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '14px'
              }}
              onClick={() => toast.dismiss()}
              >
              Done
            </button>
          </div>
 
  )
}

export default Paysucess;