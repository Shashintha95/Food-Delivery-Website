import { useState } from 'react'
import './Loginpopup.css'
import { assets } from '../../assets/assets'
import PropTypes from 'prop-types'; // Import PropTypes


const Loginpopup = ({setShowLogin}) => {


    const [currState,setCurrState] = useState("Login");
  return (
   <>
    <div className='login-popup'>
        <form className="login-popup-container">
        <div className="login-popup-title">
        <h2>{currState}</h2>
        <img onClick={()=>setShowLogin(false)} src ={assets.cross_icon} alt=""/>
      
  </div>
    <div className='login-popup-inputs'>
        {currState==="Login"?<></>:<input type="text" placeholder='your name' required/>}
        
        <input type="email" placeholder='your emsil' required/>
        <input type="password" placeholder='your password' required/>
</div>
    <button>{currState=="Sign Up"?"Create account":"Login"}</button>
    <div className='loging-popup-condition'>
      <input type = "checkbox" required/>
      <p>By countinuing, I agree to the terms of use & privacy policy</p>
    </div>
{currState=="Login"
?<p>Create New Account?<span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
:<p>Already have an account?<span onClick={()=>setCurrState("Login")}>Login Here</span ></p>
}
</form>
</div>

    </>


);
}


// Add prop types validation
Loginpopup.propTypes = {
    setShowLogin: PropTypes.func.isRequired,
    setCurrState: PropTypes.func.isRequired,
};

export default Loginpopup
