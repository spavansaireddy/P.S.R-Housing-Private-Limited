import React from "react";
import {Link} from "react-router-dom";
import Navbar from "./navbar";
import './sign.css';
function Sign(){
    return(
        <><br/>
          <Navbar/><br/><br/><br/>
          <div className="signup">
             <form>
               <input type="text" placeholder="First Name" required/>
               <input type="text" placeholder="Last Name" required/>
               <input type="email" placeholder="Email" required/>
               <input type="password" placeholder="password" required/>
               <input type="password" placeholder="conform password" required/>
             </form><br/>
               <button>Register</button>
               <Link to="/login"><button>Login</button></Link> 
          </div>
        </>
    )
}
export default Sign