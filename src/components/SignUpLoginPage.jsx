import React, { useState, useEffect } from "react";
import Carousel from "./Carousel";
import LoginPage from "./LoginPage";
import SignupPage from "./SignUpPage";
import welcomeImg from './images/welcome.png';

import './styles.css';
import Logo from './images/logo.png';
import Logo1 from "./images/logo1.png";
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
function SignUpLoginPage() {
    const [state, changeBg] = useState(true);
   
    function changingBg(s) {
        changeBg(s => !s)
    }
    useEffect(()=>
    {
        
        var currentLocation = window.location.pathname;
        if(currentLocation==="/Man-Ki-Baat/Signup")
        changeBg(false)
        else
        changeBg(true)
    })
    

    
    return ( <div className = { state ? "signupContainer container-fluid" : "loginContainer container-fluid" } >
   
    <nav className="navbar navbar-expand-sm  ">
   <a className="ml-auto" href="#">
    <img id="logo" src={state?Logo:Logo1} alt="Logo"/>
  </a>
</nav>
        <div className = "container-fluid" id="cont1">

        <div className = "row">
        <div className = "col-sm-1" > </div>
        <div className = "col-sm-4" >
        <Router>
        <Switch>
            <Route path="/Man-Ki-Baat/Login" exact    render={(props) => <LoginPage {...props} fun={changingBg} />} ></Route>
            <Route path="/Man-Ki-Baat/Signup" exact  render={(props) => <SignupPage {...props} fun={changingBg} />}></Route>
            </Switch>
        </Router>
        
        </div> 
        <div className = "col-sm-1" ></div> 
        <div className = "col-sm-6 d-none d-lg-block d-md-block" >
        <div className = "container text-center mt-5 mb-5" >
        <img className = "img-fluid " id = "welcome" src = {welcomeImg}></img>
        </div>  
        <Carousel> </Carousel> 
        </div> 
        </div> 
        </div> 
        </div>
    )
}
export default SignUpLoginPage;