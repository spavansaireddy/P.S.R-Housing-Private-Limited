import React from "react";
import Navbar from "./navbar";
import './about.css';
import Footer from "../footer/footer";

function About(){
    return(
        <>
        <br/>
         <Navbar/><br/><br/>
         <div className="about">
            <div className="about_header">
              <div className="about_left">
                 <img src="https://images.pexels.com/photos/208736/pexels-photo-208736.jpeg?auto=compress&cs=tinysrgb&w=600" alt="about_img"/>
              </div>
              <div className="about_right">
                  <h3>ABOUT US</h3>
                  <h5>We Provide The Best <br/>Property For You !</h5>
                  <div className="paras">
                    <span id="para1">
                        <p>P.S.R Housing Private Limited is a Private incorporated on 24 Apr <br/>
                           2019.It is classified as Non-govt company and is registered at<br/>
                           Companies, Hyderabad. It is involved in Real estate activities with<br/>
                           or leased property.
                        </p>
                    </span>
                    <span id="para2">
                        <p>
                            This class includes buying,selling,renting and operating of self-<br/>
                            owned or leased real estate such as apartment building and <br/>
                            dwellings, non-residential buildings,developing and subdiving real<br/>
                            estate into lots etc..
                        </p>
                    </span>
                    <span id="para3">
                        <p>
                            Also included are development and sale of land and cemetry lots.<br/>
                            operating of apartment hotels and residential mobile home sites.
                        </p>
                    </span>
                    <br/>
                    <a href="#">Learn More</a>
                  </div>
              </div>
            </div>
            
         </div><br/>
         <Footer/>
        </>
    )
}
export default About