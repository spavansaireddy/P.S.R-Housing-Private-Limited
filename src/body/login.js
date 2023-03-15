import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";
import './login.css';
function Login(){
    return(
        <><br/>
         <Navbar/>
         <div className="Login_header">
            <div className="Login_left">
               <h5>Login To Continue</h5>
               <p>Login with your data that you entered <br/>during your registration.</p>
               <form>
                  <input type="email" placeholder="Email address" required/>
                  <input type="password" placeholder="Password" required/>
               </form>
               <Link to="/login"><button>Login In</button></Link>
               <a href="">Forget Password?</a>
               <Link to="/sign"><button>Sign up Now</button></Link>
            </div>
            <div className="Login_right">
                <img src="https://images.pexels.com/photos/1181325/pexels-photo-1181325.jpeg?auto=compress&cs=tinysrgb&w=600"alt="LoginRight"/>
            </div>
         </div>
         
        </>
    )
}
export default Login