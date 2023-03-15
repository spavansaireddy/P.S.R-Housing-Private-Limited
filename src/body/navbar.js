import React from "react";
import {Link} from "react-router-dom";
import './navbar.css';
function Navbar(){
    return(
        <>
          <div className="Nav">
            <div className="responsive_nav">
                <ul>
                    <li><Link to="/"><abbr title="Home"><img src="https://cdn-icons-png.flaticon.com/512/845/845022.png" alt="home"/></abbr></Link></li>
                    <li><Link to="/about"><abbr title="About us"><img src="https://cdn-icons-png.flaticon.com/512/3815/3815458.png" alt="about"/></abbr></Link></li>
                    <li><Link to="/sales"><abbr title="Sales"><img src="https://cdn-icons-png.flaticon.com/128/2956/2956869.png" alt="sales"/></abbr></Link></li>
                    <li><Link to="/properties"><abbr title="Properties"><img src="https://cdn-icons-png.flaticon.com/128/9468/9468315.png" alt="properties"/></abbr></Link></li>
                </ul>
               </div>
            <div className="Nav_left">
               <img src="https://cdn-icons-png.flaticon.com/512/5153/5153213.png" alt="icon"/>
               <Link to="/"><h5>P.S.R HOUSING PRIVATE LIMITED</h5></Link>
            </div>
           
            <div className="Nav_center">
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/about">ABOUT US</Link></li>
                    <li><Link to="/sales">SALES</Link></li>
                    <li><Link to="/properties">PROPERTIES</Link></li>
                </ul>
            </div>
            <Link to="/login"><button>Login</button></Link>
           </div>
        </>
    )
}
export default Navbar