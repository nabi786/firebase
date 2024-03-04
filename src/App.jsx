
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import "./App.css"
import { TextField } from '@mui/material'
import { useState } from 'react'
import { auth } from './firebase/index'
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";


function App() {
  const [phone, setPhone] = useState("")
  const [user,setUser] = useState("")
  const [otp,setOTP] = useState("")


  const sendOTP = async () => {
    try {
      console.log("phone number is ", phone)
      const newCaptcha = new RecaptchaVerifier(auth,"recaptcha",{})
      const confirmation = await signInWithPhoneNumber(auth,phone,newCaptcha)
      setUser(confirmation)
      console.log("confirmation is ", confirmation)
    } catch (err) {
      console.log("err is ", err)
    }

  }


  const varifyOTP = async()=>{
    try{
      const data = await user.confirm(otp)

      console.log("this is is data ",data)
    }catch(err){
      console.log("err is ", err)
    }
  }

  return (
    <>
      <div className='phoneInput'>
        <PhoneInput
          country={'pk'}
          value={phone}
          onChange={(phone)=>{setPhone("+"+phone)}}
        />
        <button
        onClick={sendOTP}
        style={{ margin: "auto", display: "block", backgroundColor: "dodgerblue", color: 'white', marginTop: "10px" }}>
          Send OTP
        </button>

        <div id="recaptcha">

        </div>

        <TextField
          placeholder='123456'
          sx={{ marginTop: "10px" }}
          onChange={(e)=>{setOTP(e.target.value)}}
          />

        <button
        onClick={varifyOTP}
        style={{ margin: "auto", display: "block", backgroundColor: "dodgerblue", color: 'white', marginTop: "10px" }}>
          Varify OTP
        </button>

      </div>
    </>
  )
}

export default App


