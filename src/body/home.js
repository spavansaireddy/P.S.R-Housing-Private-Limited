import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./navbar";
import './home.css';
import Footer from "../footer/footer";
function Home(){
    return(
        <><br/>
          <Navbar/><br/><br/>
          <div className="home_header">
              <div className="home_header_inner">
               <h4>Find Your Own <br/>Perfect Place To<br/>Live.</h4>
               <Link to='/sign'><button>Sign Up</button></Link>
              </div>
          </div><br/><br/>
          <Footer/>
        </>
    )
}
export default Home