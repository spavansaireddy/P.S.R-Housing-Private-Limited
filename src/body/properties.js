import React from "react";
import './properties.css';
import Navbar from "./navbar";
import Footer from "../footer/footer";
let property_data = [
    {
        id:"0",
        Image:"https://images.pexels.com/photos/463996/pexels-photo-463996.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"5,70,00,000/-",
        type:"Detached House",
        place:"kerala,India"
    },
    {
        id:"1",
        Image:"https://images.pexels.com/photos/3958958/pexels-photo-3958958.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"7,10,50,000/-",
        type:"Bungalow",
        place:"Punjab,India"
    },
    {
        id:"2",
        Image:"https://images.pexels.com/photos/9475438/pexels-photo-9475438.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"6,00,00,000/-",
        type:"Manor",
        place:"Telangana,India"
    },
    {
        id:"3",
        Image:"https://images.pexels.com/photos/8583736/pexels-photo-8583736.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"3,20,00,000/-",
        type:"Mansion",
        place:"Delhi,India"
    },
    {
        id:"4",
        Image:"https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"4,00,00,000/-",
        type:"Castle",
        place:"AndhraPradesh,India"
    },
    {
        id:"5",
        Image:"https://images.pexels.com/photos/3813470/pexels-photo-3813470.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"2,10,00,000/-",
        type:" Town House",
        place:"TamilNadu,India"
    },
    {
        id:"6",
        Image:"https://images.pexels.com/photos/816198/pexels-photo-816198.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"5,70,00,000/-",
        type:"Dormitory",
        place:"Mumbai,India"
    },
    {
        id:"7",
        Image:"https://images.pexels.com/photos/8031878/pexels-photo-8031878.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"1,10,00,000/-",
        type:" Farmhouse",
        place:"Pune,India"
    },
    {
        id:"8",
        Image:"https://images.pexels.com/photos/6267516/pexels-photo-6267516.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        price:"6,20,00,000/-",
        type:"Cottage",
        place:"Noida,India"
    },
    {
        id:"9",
        Image:"https://images.pexels.com/photos/1797393/pexels-photo-1797393.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"3,45,00,000/-",
        type:"Mansion",
        place:"Haryana,India"
    },
    {
        id:"10",
        Image:"https://images.pexels.com/photos/219532/pexels-photo-219532.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"1,76,00,000/-",
        type:"Terraced",
        place:"Kadapa,India"
    },
    {
        id:"11",
        Image:"https://images.pexels.com/photos/234248/pexels-photo-234248.jpeg?auto=compress&cs=tinysrgb&w=600",
        price:"9,28,00,000/-",
        type:"Villa",
        place:"Khammam,India"
    }
]
function Properties(){
    return(
        <><br/>
         <Navbar/>
          <div className="property_container">
          <h3>Our Featured Properties</h3>
          <p id="p1">These are our recent brouchers with the property name, price and location</p>
         <div className="property_header">
         {
            property_data.map((data,id)=>(
                <div className="property_inner">
                  <img src={data.Image} alt="img" key={id}/>
                  <p>{data.price}</p>
                  <h5>{data.type}</h5>
                  <p>{data.place}</p>
                </div>
            ))
         }
         </div>
          </div><br/>
          <Footer/>
        </>
    )
}
export default Properties