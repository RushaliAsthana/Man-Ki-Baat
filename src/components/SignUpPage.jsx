import React,{useState} from "react";
import Facebook from './images/Facebook.png';
import FacebookWhite from './images/fbwhite.png';
import Google from './images/Google.png';
import Googlewhite from './images/Googlewhite.png';
import Googleplay from './images/googleplay.png';
import Appstore from './images/appstore.png';
import {Link} from 'react-router-dom';
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
 
 
         return <div className="container-fluid text-center"  id="SIGNUP-PAGE">
         <div className="row " id="tophead">
           <h1 id="signupheader" className="white">Sign Up</h1>
           <br/><br/><br/>
          
           </div>
           <i data-toggle="tooltip" id="pwdicon" title="See Password" onClick={togPwd} className={seen?"fa fa-lock fa-2x white":"fa fa-unlock fa-2x white"} ></i>
           <form id="formcontainer">
           {!checkPwds? <span id="pwdnotsame" className="badge badge-danger">Passwords are not same!</span>:null}
            <div className="row">
            <div class="col-sm-10 offset-1" id="inp1white">
            <i id="unameicon" className="fa fa-envelope-o fa-lg white"></i>
             <input className="form-control" id="nameemail" value={pswd.uname} type="text" name="uname" onChange={handleChange} required placeholder="email or name"></input>
             </div>
            </div>
            <div className="row">
            <div class="col-sm-10 offset-1" id="inp2white" >
            
             <input className="form-control" value={pswd.pwd} name="pwd" onChange={ handleChange} type={seen?"password":"text"} required placeholder="password"></input>
             </div>
            </div>
            <div className="row">
            <div class="col-sm-10 offset-1" id="inp3white">
            <input id="confirmpwd" value={pswd.confirmpwd} name="confirmpwd" className="form-control " type="password" onFocus={notpCheck} onChange={handleChange} onBlur={passwordCheck} required placeholder="confirm password"></input>
             </div>
            </div>
           
           
           {/* {!checkPwds? <span id="pwdnotsame" className="badge badge-danger">Passwords are not same!</span>:null}<br></br> */}
           <div className="row">
           <div className="col-sm-6 offset-sm-3">
           
         
           <button  className="btn btn-block white border-white mt-4" disabled={!checkPwds} type="submit" >Submit</button> <br/>
        
        </div>
           </div> 
           </form>
           <div class="container" id="social">
           <span> <img id="fb-icon" height="50px" src={FacebookWhite}/></span> 
        <span className="white ml-3 mr-3" id="conn"><b>Connect With</b> </span>
        <span><img id="gog-icon" height="50px" src={Googlewhite}></img></span>
           </div><br/>
           <div className="container">
          <Link to={"/Man-Ki-Baat/Login"}  style={{ textDecoration: 'none' }}> <input id="loginbtn" onClick={test} className="btn btn-block border-white white" type="button"   value="Already a member? Log In " /> </Link>
          </div><br/>
     <div className="container-fluid row" id="apps">
     <img   id="playstore" className="img-responsive" src={Googleplay}/>
     <img   heigth="100px" id="appstore" className="img-responsive" src={Appstore}/>
     </div>
         </div>
}
export default Form;