import React from "react";
import './footer.css';
function Footer(){
    return(
        <div className="footer">
          <div className="footer_header">
            <div className="footer_left">
               <h6>P.S.R HOUSING PRIVATE LIMITED</h6>
            </div>
            <div className="footer_right">
                <ul>
                    <li id="partners">Partners
                        <ul>
                            <li>PavanSai</li>
                            <li>KumarSai</li>
                            <li>Chintu</li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li id="quick_links">Quick Links
                        <ul>
                            <li><a href="">Agency</a></li>
                            <li><a href="">Building</a></li>
                            <li><a href="">Rates</a></li>
                        </ul>
                    </li>
                </ul>
                <ul>
                    <li id="locations">Locations
                       <ul>
                          <li><a href="">Hyderabad</a></li>
                          <li><a href="">Khammam</a></li>
                          <li><a href="">Vijayawada</a></li>
                          <li><a href="">Warangal</a></li>
                          <li><a href="">Kadapa</a></li>
                          <li><a href="">Nellore</a></li>
                          <li><a href="">Tirupati</a></li>
                          <li><a href="">Vizag</a></li>
                       </ul>
                    </li>
                </ul>
                <ul>
                    <li id="contact">Contact Us
                        <ul>
                            <li>+91 9949421162</li>
                            <li><a href="">seelampavansaireddy@gmail.com</a></li>
                            <li id="contact_images"><img src="https://cdn-icons-png.flaticon.com/128/3128/3128304.png" alt="facebook"/>
                               <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="twitter"/>
                               <img src="https://cdn-icons-png.flaticon.com/512/3955/3955024.png" alt="instagram"/>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
          </div>
          <h5>© P.S.R All Rights Reserved</h5><br/>
        </div>
    )
}
export default Footer