import { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'

const LoginPopup = ({setLogin}) => {
    const [current,setCurrent] = useState('Sign Up')
  return (
    <div className="popup">
      <div className="popup-content">
      <div className="popup-title">
            <h2>{current}</h2>
            <img src={assets.cross_icon} onClick = {() => setLogin(false)} alt="" />
       </div>
       <form className="popup-form">
        {
            current === 'Sign Up' && (
                <div className="popup-full-name">
                    <input type="text" placeholder='First Name' className="form-control" />
                    <input type="text" placeholder='Last Name' className="form-control" />
                </div>
            )
        }
        <div className="popup-email">
            <input type="email" name="email" placeholder='Your Email' className="form-control" id="" />
        </div>
        <div className="popup-password">
            <input type="password" name="password" placeholder='Enter Password' className="form-control"  id="" />
        </div>
        {current === 'Sign Up' && (
            <div className="popup-pass-con">
                <input type="password" name="password_confirmation" id="" className="form-control" placeholder='Confirm Password' />
                <input type="number" name="phone" placeholder='Phone Number' className="form-control" id="" />
            </div>
        )}
        <button className="popup-btn" type='submit'>
            {current}
        </button>
        
            {
                current === 'Sign Up' ? (
                    <p className="popup-login">
                        Already have an account 
                        <span className="sign-in" onClick = {() => setCurrent('Sign In')}>LogIn</span>
                    </p>
                ) : (
                    <p className="popup-sign-up">
                        Don't have an account 
                        <span onClick = {() => setCurrent('Sign Up')} >Sign Up</span>
                    </p>
                )
            }
            
       
       </form>
      </div>
    </div>
  )
}

export default LoginPopup