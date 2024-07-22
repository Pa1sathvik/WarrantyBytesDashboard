import React from 'react'
import './Login.scss'
import warrantyBytes from '../images/logo/WarrantyBytes.png'
import { Button } from 'semantic-ui-react'

export default function Login() {
  return (
    <div className='login'>

        <div className='min-h-screen bg-primaryV1 py-8'>
        <div className='flex'>
            
           </div> 
            <div className='login__container'>
            <img src={warrantyBytes} alt="Warranty Bytes"></img>
            <h1>Sign in to WarrantyBytes</h1>
            <Button>SignIn with Google</Button>
            </div>
        </div>
    </div>
  )
}
