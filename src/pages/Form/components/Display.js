import React from "react";
import { useState } from "react";
import mapimage from "../images/map.png";
import map1 from "../images/map1.jfif";
import "./Display.css";


const Display = () => {

  const [formData, setFormData] = useState({
    circleId:0,
    numberOfSignals: 0,
    coordinates:{
      latitude: parseFloat(1.1),
      longitude: parseFloat(1.1),
    },
    address:{
      circleName: " ",
      road: " ",
      area: " ",
      city: " ",
      pincode: 1234,
    },
    signalIds:[200,300,400],
    
  });



  // Array(formData.newNumberOfSignals).fill('')

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

    if(e.target.name==="numberOfSignals")
    {
      console.log(e.target.value)
      if(e.target.value>0){
      setFormData({
        ...formData,
          [e.target.name]:parseInt(e.target.value),
          // signalIds:new Array( parseInt(e.target.value)).fill(1).map((value, index) => value + index),
      });
    }
    else{
      setFormData({
        ...formData,
          [e.target.name]: e.target.value,
      });
    }
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
    // console.log(formData);
    
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
  };

  return (
    <>
      <div className="map">
        <img src={mapimage} className="bgimg" alt="" />

        <div className="mapimage">
          <img src={map1} alt="" />
        </div>
        <div className="container">
          <h3 >Basic Information</h3>

          <form onSubmit={handleSubmit} >
            <div className="info">
              <label className="item">
                circleId
                <input type="number" name="circleId" value={formData.circleId} onChange={handleChange}/>
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
              <label className="item">
                Number Of Signals
                <input type="number" name="numberOfSignals" value={formData.numberOfSignals} onChange={handleChange} />
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
      </div>
    </>
  );
};

export default Display;
