import React, { useState } from "react";
function Form(props)
{

   const [signUpLogin,toggleState]=useState(true);
   function test()
   {
      toggleState(signUpLogin=>!signUpLogin)
      props.fun()
   }

   function Social(props)
   {
      if(props.name==="fbIcon" && signUpLogin)
      return <img id="fb-icon" height="50px" src={process.env.PUBLIC_URL+"/images/Facebook.png"}/>
      else if(props.name==="fbIcon")
      return <img id="fb-icon" height="50px" src={process.env.PUBLIC_URL+"/images/fbwhite.png"}/>
      if(props.name==="googleIcon" && signUpLogin)
      return <img id="gog-icon" height="50px" src={process.env.PUBLIC_URL+"/images/Google.png"}/>
      else if(props.name=="googleIcon")
      return <img id="gog-icon" height="50px" src={process.env.PUBLIC_URL+"/images/Googlewhite.png"}/>
   }

   
   return <div className="text-center">
      {signUpLogin?<h1 id="loginheader">Login</h1>:<h1 id="signupheader">Sign Up</h1>}<br/>
   
     <h1>{signUpLogin}</h1>
      <div className="container" id={signUpLogin?"formContainer":"formContainer1"}>
      
         <form>
         <div className="row">
            <div className="col-sm-9  " id="Name">
            <input className="form-control " type="text"  required placeholder="email or name"></input>
            </div>
            <div  id="NameIcon">
            <i className={signUpLogin?"fa fa-envelope-o fa-lg":"fa fa-envelope-o fa-lg white"}></i>
            </div> 
         </div>
         <div className="row">
         <div id="PasswordIcon" className="mt-1 ml-4"><i className={signUpLogin?"fa fa-lock fa-2x":"fa fa-lock fa-2x white"} ></i></div>
            <div id="Password" className="col-sm-7">
            <input className="form-control " type="password" required placeholder="password"></input>
            </div>
         </div>
           <div className="row">  
           <div className="col-sm-9" id="subbox">{signUpLogin?<button id="loginsubmit" type="submit" className="btn  btn-block">Submit</button>:<input id="confirmpwd" className="form-control " type="password" required placeholder="confirm password"></input>}</div>
           
            </div>
         
   
        <div className="row">
        <div className="col-sm-8 offset-sm-1">
       <button className="btn btn-block" id={signUpLogin?"forgotpwd":"submitBtn"}  type={signUpLogin?"button":"submit"} >{signUpLogin?"Forgot Password":"Submit"}</button>
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
     <input className="btn btn-block" type="button" id={signUpLogin?"signupbtn":"loginBtn"} onClick={test} value={signUpLogin?"Sign Up":"Already a member? Log In "} />
     </div><br/><br/>
     <div className="container-fluid" id="apps">
        <img  width="200px" id="playstore" className="img-fluid" src={process.env.PUBLIC_URL+"/images/googleplay.png"}/>
        <img  width="200px" id="appstore" className="img-fluid" src={process.env.PUBLIC_URL+"/images/appstore.png"}/>
     </div>
   </div>
}
export default Form;