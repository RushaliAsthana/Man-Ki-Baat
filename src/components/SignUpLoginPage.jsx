import React, { useState } from "react";
import Carousel from "./Carousel";
import welcomeImg from './images/welcome.png';
import Form from "./Form";
import './styles.css';
import Logo from './images/logo.png';
function SignUpLoginPage() {
    const [state, changeBg] = useState(true);
   
    function changingBg(s) {
        changeBg(s => !s)
    }
    return ( <div className = { state ? "signupContainer" : "loginContainer" } >
   
  
    {/* <img  height="80px" src={Logo} alt="Logo"/> */}
  

        <div className = "container-fluid">
        <div className = "row">
        <div className = "col-sm-1" > </div>
        <div className = "col-sm-4" >
        {/* <Form togval = { true }fun = { changingBg } > </Form>  */}
        <Form togval = { true } fun = { changingBg }></Form>
        </div> 
        <div className = "col-sm-1" ></div> 
        <div className = "col-sm-6 d-none d-lg-block d-md-block" >
        <div className = "container text-center mt-5 mb-5" >
        <img className = "img-fluid " id = "welcome" src = {welcomeImg}></img>
        <img src={Logo} id="logo" height="100px"></img> </div>  
        <Carousel> </Carousel> 
        </div> 
        </div> 
        </div> 
        </div>
    )
}
export default SignUpLoginPage;