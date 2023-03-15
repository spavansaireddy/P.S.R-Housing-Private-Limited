import React from "react";
import Footer from "../footer/footer";
import Navbar from "./navbar";
let about_data= [
    {
        id:"0",
        image:"https://cdn-icons-png.flaticon.com/512/747/747545.png",
        heading:"Make Your Dream True",
        text:"Know what a dream home is not. Like anything else in life, you can't realize your dream home if you don't know what it is -and isn't, definitionally. For purpose of this conversation, our definition of a dream home is closely related to our aspiration and our visions in a cople of key ways!"
    },
    {
        id:"1",
        image:"https://cdn-icons-png.flaticon.com/512/3003/3003040.png",
        heading:"Start Your Membership",
        text:"As a new member, you're subscribed to our monthly newsletter. Be on the lookout for an email at the end of every month with great discounts!"
    },
    {
        id:"2",
        image:"https://cdn-icons-png.flaticon.com/128/1659/1659146.png",
        heading:"Enjoy Your New Home",
        text:"May every corner of your house be filled with immense happiness and love. May this home be the comforting place that your are seeking for!"
    }
]
function Sales(){
    return(
        <><br/>
         <Navbar/>
          <div className="sales_header">
          <div className="about_section">
                {
                    about_data.map((data,id)=>(
                        <div>
                          <img src={data.image} alt="images" key={id}/>
                          <h4>{data.heading}</h4>
                          <p>{data.text}</p>
                        </div>
                    ))
                }
            </div>
            <div className="about_article">
                <h4>Frequently Asked Questions By Customers</h4>
                <details>
                    <summary>What type of payment methods <br/>do you accept ?</summary><br/>We accept the payments like via Net banking, Debit & Credit cards, UPI.
                </details>
                <details>
                   <summary>Can I cancel my Membership?</summary><br/>Yes, You can cancel any time your subscription package. A confirmation mail will be sent <br/>
                            to you on your email & also same will be reflected in your account.
                </details>
                    
                <details>
                    <summary>How Many Accounts Can I Create <br/>On The Site?</summary><br/>Only,one account can create in this site per one mobile number.
                </details>
                <details>
                    <summary>Is It Free Of Charge To Open An<br/> Account?</summary><br/>Yes, it is Free of charge to open an account.
                </details>    
                <details>
                   <summary>How can we access Enterprise plan?</summary><br/>You simply needs to contact the Company Check sales team by filling contact form.
                </details>  
            </div><br/><br/><br/>
          </div><br/>
          <Footer/>
        </>
    )
}
export default Sales