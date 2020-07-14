import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import welcomeImg from './images/welcome.png';
import BgImg from "./images/Bg.png";
import SignupBg from "./images/Signupbackground.png";
import LoginMobileImg from "./images/Loginmobile.png";
import SignupMobilebg from "./images/SignUpmobile.png";
import Form from "./Form";
import './styles.css';
import Logo from './images/logo.png';
function SignUpLoginPage() {
    const [state, changeBg] = useState(true);
  useEffect(() => {
            document.body.style.backgroundSize="100vw 100vh";
            document.body.style.backgroundRepeat="no-repeat"; 
            if(window.innerWidth>500)
            {
            {state? document.body.style.backgroundImage=`url(${BgImg})`: document.body.style.backgroundImage=`url(${SignupBg})`};
            }
            else
            {
            {state? document.body.style.backgroundImage=`url(${LoginMobileImg})`: document.body.style.backgroundImage=`url(${SignupMobilebg})`};
            }
           });
    function changingBg(s) {
        changeBg(s => !s)
    }
    return ( <div  className ="container-fluid" >
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
        <img src={Logo} height="100px"></img> </div>  
        <Carousel> </Carousel> 
        </div> 
        </div> 
        </div> 
        </div>
    )
}
export default SignUpLoginPage;