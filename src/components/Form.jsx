import React,{useState} from "react";
import Facebook from './images/Facebook.png';
import FacebookWhite from './images/fbwhite.png';
import Google from './images/Google.png';
import Googlewhite from './images/Googlewhite.png';
import Googleplay from './images/googleplay.png';
import Appstore from './images/appstore.png';
import Logo from "./images/logo.png";
import Logo1 from "./images/logo1.png";
import './styles.css';
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

         return <div className="container-fluid text-center"  id={signUpLogin?"SIGNUP-PAGE":"LOGIN-PAGE"}>
         <div className="row " id="tophead">
           {signUpLogin?<h1 id="loginheader">Login</h1>:<h1 id="signupheader" className="white">Sign Up</h1>}
              <img src={signUpLogin?Logo:Logo1} className="imp-responsive hide" height="90px"/>
           <br/><br/><br/>
           </div>
           <i data-toggle="tooltip" id="pwdicon" title="See Password" onClick={togPwd} className={seen?signUpLogin?"fa fa-lock fa-2x":"fa fa-lock fa-2x white":signUpLogin?"fa fa-unlock fa-2x":"fa fa-unlock fa-2x white"} ></i>
           <form id="formcontainer">
            <div className="row">
            <div class="col-sm-10 offset-1" id={signUpLogin?"inp1":"inp1white"}>
            <i id="unameicon" className={signUpLogin?"fa fa-envelope-o fa-lg":"fa fa-envelope-o fa-lg white"}></i>
             <input className="form-control" id="nameemail" value={pswd.uname} type="text" name="uname" onChange={handleChange} required placeholder="email or name"></input>
             </div>
            </div>
            <div className="row">
            <div class="col-sm-10 offset-1" id={signUpLogin?"inp2":"inp2white"} >
            
             <input className="form-control" value={pswd.pwd} name="pwd" onChange={ handleChange} type={seen?"password":"text"} required placeholder="password"></input>
             </div>
            </div>
            <div className="row">
            <div class="col-sm-10 offset-1" id={signUpLogin?"inp3":"inp3white"}>
            {signUpLogin?<input id="loginsubmit" type="submit" className="btn btn-block" name="Submit"></input>:<input id="confirmpwd" value={pswd.confirmpwd} name="confirmpwd" className="form-control " type="password" onFocus={notpCheck} onChange={handleChange} onBlur={passwordCheck} required placeholder="confirm password"></input>}
             </div>
            </div>
           
           
           {!checkPwds? <span id="pwdnotsame" className="badge badge-danger">Passwords are not same!</span>:null}<br></br>
           <div className="row">
           <div className="col-sm-6 offset-sm-3">
           
           {/* <button className="btn btn-block" id={signUpLogin?"forgotpwd":"submitBtn"} disabled={!checkPwds} type={signUpLogin?"button":"submit"} >{signUpLogin?"Forgot Password":"Submit"}</button> */}
           <button  className={signUpLogin?"btn btn-block border-black":"btn btn-block white border-white"} disabled={!checkPwds} type={signUpLogin?"button":"submit"} >{signUpLogin?"Forgot Password":"Submit"}</button> <br/>
        
        </div>
           </div> 
           </form>
           <div class="container" id="social">
           <span><Social id="fbIcon" name="fbIcon"></Social></span> 
        <span className={!signUpLogin&&"white"} id="conn"><b>Connect With</b> </span>
        <span><Social name="googleIcon"></Social></span>
           </div><br/>
           <div className="container">
           <input id={signUpLogin?"signupbtn":"loginbtn"} className={signUpLogin?"btn btn-block border-black":"btn btn-block border-white"}  type="button"  onClick={test} value={signUpLogin?"Not a Member? Sign Up":"Already a member? Log In "} /> 
          </div><br/>
     <div className="container-fluid row" id="apps">
     <img   id="playstore" className="img-responsive" src={Googleplay}/>
     <img   heigth="100px" id="appstore" className="img-responsive" src={Appstore}/>
     </div>
         </div>
}
export default Form;