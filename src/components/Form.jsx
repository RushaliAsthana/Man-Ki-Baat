import React, { useState } from "react";
import './styles.css';
import Facebook from './images/Facebook.png';
import FacebookWhite from './images/fbwhite.png';
import Google from './images/Google.png';
import Googlewhite from './images/Googlewhite.png';
import Googleplay from './images/googleplay.png';
import Appstore from './images/appstore.png';
function Form(props)
{
   
   const [signUpLogin,toggleState]=useState(true);
   const [seen,pwdToggle]=useState(true);
   const [checkPwds,check]=useState(true);
   const [pswd,setPwd]=useState({
      uname:"",
      pwd:"",
      confirmpwd:"",
   });
   function notpCheck()
   {
      check(true)
   } 
  function passwordCheck()
  {
     
     if(pswd.pwd!==pswd.confirmpwd)
     check(false)
     else 
     {
     check(true)
     }

  }
  
   function handleChange(event)
   {
      const {name,value}=event.target;
      setPwd(prevValue=>{
         return {
            ...prevValue,
            [name]:value
         }
      });
      
     
   }

   function togPwd()
   {
      pwdToggle(seen=>!seen)
   } 
  
   function test()
   {
       pswd.uname="";
       pswd.pwd="";
       pswd.confirmpwd="";
       check(true);
      toggleState(signUpLogin=>!signUpLogin)
      props.fun()
   }
 
   function Social(props)
   {
      if(props.name==="fbIcon" && signUpLogin)
      return <img id="fb-icon" height="50px" src={Facebook}/>
      else if(props.name==="fbIcon")
      return <img id="fb-icon" height="50px" src={FacebookWhite}/>
      if(props.name==="googleIcon" && signUpLogin)
      return <img id="gog-icon" height="50px" src={Google}/>
      else if(props.name=="googleIcon")
      return <img id="gog-icon" height="50px" src={Googlewhite}/>
   }

   
   return <div className="text-center"  id={signUpLogin?"SIGNUP-PAGE":"LOGIN-PAGE"}>
      {signUpLogin?<h1 id="loginheader">Login</h1>:<h1 id="signupheader">Sign Up</h1>}<br/>
    
      {checkPwds==false && <p className="badge badge-danger">Passwords are not same!</p>}

      <div className="container" id={signUpLogin?"formContainer":"formContainer1"}>
      
         <form id="newsletter">
         <div className="row">
            <div className="col-sm-9  " id="Name">
            <input className="form-control " value={pswd.uname} type="text" name="uname" onChange={handleChange} required placeholder="email or name"></input>
            </div>
            <div  id="NameIcon">
            <i className={signUpLogin?"fa fa-envelope-o fa-lg":"fa fa-envelope-o fa-lg white"}></i>
            </div> 
         </div>
         <div className="row">
         <div id="PasswordIcon" className="mt-1 ml-4"><i data-toggle="tooltip" title="See Password" onClick={togPwd} className={seen?signUpLogin?"fa fa-lock fa-2x":"fa fa-lock fa-2x white":signUpLogin?"fa fa-unlock fa-2x":"fa fa-unlock fa-2x white"} ></i></div>
            <div id="Password" className="col-sm-7">
            <input  className="form-control " value={pswd.pwd} name="pwd" onChange={ handleChange} type={seen?"password":"text"} required placeholder="password"></input>
            </div>
         </div>
           <div className="row">  
           <div className="col-sm-9" id="subbox">{signUpLogin?<button id="loginsubmit" type="submit" className="btn  btn-block">Submit</button>:<input id="confirmpwd" value={pswd.confirmpwd} name="confirmpwd" className="form-control " type="password" onFocus={notpCheck} onChange={handleChange} onBlur={passwordCheck} required placeholder="confirm password"></input>}</div>
           
            </div>
         
   
        <div className="row">
        <div className="col-sm-8 offset-sm-1">
        
       <button className="btn btn-block" id={signUpLogin?"forgotpwd":"submitBtn"} disabled={!checkPwds} type={signUpLogin?"button":"submit"} >{signUpLogin?"Forgot Password":"Submit"}</button>
       
       </div>
     </div>
     </form>
      </div>
     <br/><br/><br/><br/>

     <div className="container" id="social">
     
     <span><Social name="fbIcon"></Social></span>
        <span className={!signUpLogin&&"white"}><b>Connect With</b> </span>
        <span><Social name="googleIcon"></Social></span>
     </div><br/>
     <div className="container">
     <input className="btn btn-block"  type="button" id={signUpLogin?"signupbtn":"loginBtn"} onClick={test} value={signUpLogin?"Sign Up":"Already a member? Log In "} />
     </div><br/>
     <div className="container-fluid" id="apps">
        <img  width="200px" id="playstore" className="img-fluid" src={Googleplay}/>
        <img  width="200px" id="appstore" className="img-fluid" src={Appstore}/>
     </div>
   </div>
}
export default Form;