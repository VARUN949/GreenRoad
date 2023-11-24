import React from "react";
import { useState } from "react";
import mapimage from "../images/map.png";
import "./Display.css";
import Signal from "./Signal";


const Display = () => {

  const [formData, setFormData] = useState({
    circleId:0,
    coordinates:{
      latitude: parseFloat(23.105555),
      longitude: parseFloat(72.597444),
    },
    address:{
      circleName: " ",
      road: " ",
      area: " ",
      city: " ",
      pincode: 123456,
    }   
  });
  const [numberOfSignals,setNumberOfSignals]=useState({
    number:0,
    list:[],
    condition:[true,false]
  });
  const handleChange = (e) => {

    if(e.target.name==="circleName" || e.target.name==="road" ||  e.target.name==="area" ||  e.target.name==="city" ||  e.target.name==="pincode")
    {
      setFormData({
        ...formData,
        address:{
          ...formData.address,
          [e.target.name]: e.target.value,
        }
      });
    }
      if(e.target.name==="circleId")
    {
      setFormData({
        ...formData,
          [e.target.name]: e.target.value,
      });
     
    }

    if(e.target.name==="latitude" || e.target.name==="longitude")
    {
      setFormData({
        ...formData,
        coordinates:{
          ...formData.coordinates,
          [e.target.name]: parseFloat(e.target.value),
        }
      });
    }
    if(e.target.name==="numberOfSignals")
    {
      setNumberOfSignals({
        ...numberOfSignals,
        number:Number(e.target.value)
      })
    }    
  };
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    try {
      const response = await fetch('https://greenroad-gr.onrender.com/app/p1/add-circle', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

        console.log(formData);


      if(response.ok)
      {
      alert('Form data submitted successfully!');
      }

      console.log(formData);
      
    } catch (error) {
      alert('Error submitting form data');
    }
    setNumberOfSignals({
      ...numberOfSignals,
      list:Array.from({ length: numberOfSignals.number - 1 + 1 }, (_, index) => 1 + index),
      status:Array.from({ length: numberOfSignals.number }, () => false)
    })
    console.log(numberOfSignals);
  };


  return (
    <>
      <div className="map">
        <img src={mapimage} className="bgimg" alt="" />

        <div className="container_sec">
          <h3 >Basic Information</h3>

          <form onSubmit={handleSubmit} >
            <div className="info">
              <label className="item">
                circleId
                <input type="number" name="circleId" value={formData.circleId} onChange={handleChange}/>
              </label>

              <label className="item">
                Number of Signals
                <input type="number" name="numberOfSignals" value={numberOfSignals.number} onChange={handleChange}/>
              </label>

              <label className="item">
                Circle Name:
                <input type="text" name="circleName" value={formData.address.circleName} onChange={handleChange}/>
              </label>

              <label className="item">
                Road Name
                <input type="text" name="road" value={formData.address.road} onChange={handleChange} />
              </label>

              <label className="item">
                area Name
                <input type="text" name="area" value={formData.address.area} onChange={handleChange}/>
              </label>

              <label className="item">
                City Name
                <input type="text" name="city" value={formData.address.city} onChange={handleChange}/>
              </label>

              <label className="item">
                Pincode
                <input type="number" name="pincode" value={formData.address.pincode} onChange={handleChange}/>
              </label>
              < h3>Location Information</h3>


              <label className="item">
                latitude
                <input type="text" name="latitude" value={formData.coordinates.latitude} onChange={handleChange}/>
              </label>

              <label className="item">
                longitude
                <input type="text" name="longitude" value={formData.coordinates.longitude} onChange={handleChange}/>
              </label>
              <input type="submit" className="button" value="Add a Location "/>
            </div>
          </form>
        </div>

        <div className="container">
          {numberOfSignals.list.map((signal,index)=>{
            return(
              
              <Signal formData={formData} numberOfSignals={numberOfSignals} setNumberOfSignals={setNumberOfSignals} key={index} signalID={signal} ></Signal>
            )
          })}
        </div>
      </div>
    </>
  );
};

export default Display;
