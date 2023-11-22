import React from "react";
import { useState } from "react";
import mapimage from "../images/map.png";
import "./Display.css";


const DisplaySignale = () => {

  const [formSignalData, setFormSignalData] = useState({

    signalId:"",
    circleId:"",
    signalStatus:"",
    junctionType:"",

    aspects:{
        currentColor:"red",
        durationInSeconds:0,
        green:0,
        red:0,
        yellow:0,
    },
    address:{
        circleName: " ",
        road: " ",
        area: " ",
        city: " ",
        pincode:0,
      },
  
    location:{
        latitude:1.1,
        longitude:1.1,
        angle:0,
    },
  });



  // Array(formSignalData.newNumberOfSignals).fill('')

  const handleChange = (e) => {

    if(e.target.name==="signalId" || e.target.name==="circleId" || e.target.name==="signalStatus" || e.target.name==="junctionType")
    {
      setFormSignalData({
        ...formSignalData,
          [e.target.name]: e.target.value,
      });
     
    }
    if(e.target.name==="currentColor" || e.target.name==="durationInSeconds" ||  e.target.name==="green" ||  e.target.name==="red" ||  e.target.name==="yellow")
    {
        if(e.target.name!=="currentColor")
        {
            setFormSignalData({
                ...formSignalData,
                aspects:{
                  ...formSignalData.aspects,
                  [e.target.name]: parseInt(e.target.value),
                }
              });
        }
        else{
            setFormSignalData({
                ...formSignalData,
                aspects:{
                  ...formSignalData.aspects,
                  [e.target.name]: e.target.value,
                }
              });
        }
      
    }
    if(e.target.name==="circleName" || e.target.name==="road" || e.target.name==="area" || e.target.name==="city" || e.target.name==="pincode")
    {
        if(e.target.name==="pincode"){
            setFormSignalData({
                ...formSignalData,
                address:{
                  ...formSignalData.address,
                  [e.target.name]: parseInt(e.target.value),
                }
              });
        }
        else{
            setFormSignalData({
                ...formSignalData,
                address:{
                  ...formSignalData.address,
                  [e.target.name]: e.target.value,
                }
              });
        }
        
    }
    if(e.target.name==="latitude" || e.target.name==="longitude" || e.target.name==="angle"){
        setFormSignalData({
            ...formSignalData,
            location:{
              ...formSignalData.location,
              [e.target.name]: parseFloat(e.target.value),
            }
          });
    }

    }
  const handleSubmit = async (e) => {
   
    e.preventDefault();
    try {
        console.log(formSignalData)
      const response = await fetch('https://greenroad-gr.onrender.com/app/p1/add-signal-light', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formSignalData),
      });

      if(response.ok)
      {
      alert('Form data submitted successfully!');
      }

      
    } catch (error) {
      alert('Error submitting form data');
    }
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
              signal Id
                <input type="text" name="signalId" value={formSignalData.signalId} onChange={handleChange}/>
              </label>

              <label className="item">
              circle Id
                <input type="text" name="circleId" value={formSignalData.circleId} onChange={handleChange}/>
              </label>

              <label className="item">
              signal Status
                <input type="text" name="signalStatus" value={formSignalData.signalStatus} onChange={handleChange} />
              </label>

              <label className="item">
              junction Type
                <input type="text" name="junctionType" value={formSignalData.junctionType} onChange={handleChange} />
              </label>
                <hr></hr>



              <h3 >Aspects</h3>
              <label className="item">
              Current Color
                <input type="text" name="currentColor" value={formSignalData.aspects.currentColor} onChange={handleChange}/>
              </label>

              <label className="item">
              Duration In Seconds
                <input type="number" name="durationInSeconds" value={formSignalData.aspects.durationInSeconds} onChange={handleChange}/>
              </label>

              <label className="item">
              Green
                <input type="number" name="green" value={formSignalData.aspects.green} onChange={handleChange}/>
              </label>
              <label className="item">
              Red
                <input type="number" name="red" value={formSignalData.aspects.red} onChange={handleChange} />
              </label>
              <label className="item">
              Yellow
                <input type="number" name="yellow" value={formSignalData.aspects.yellow} onChange={handleChange} />
              </label>
            </div>
          </form>
        </div>
    
        <div className="container">
          <h3 >Address</h3>
          <form onSubmit={handleSubmit} >
            <div className="info">
              <label className="item">
              circle Name
                <input type="text" name="circleName" value={formSignalData.address.circleName} onChange={handleChange}/>
              </label>

              <label className="item">
              road
                <input type="text" name="road" value={formSignalData.address.road} onChange={handleChange}/>
              </label>

              <label className="item">
              area
                <input type="text" name="area" value={formSignalData.address.area} onChange={handleChange} />
              </label>

              <label className="item">
              city
                <input type="text" name="city" value={formSignalData.address.city} onChange={handleChange} />
              </label>
              <label className="item">
              pincode
                <input type="number" name="pincode" value={formSignalData.address.pincode} onChange={handleChange}/>
              </label>
              <hr></hr>


              <h3 >Location</h3>
              <label className="item">
              latitude
                <input type="text" name="latitude" value={formSignalData.location.latitude} onChange={handleChange}/>
              </label>
              <label className="item">
              longitude
                <input type="text" name="longitude" value={formSignalData.location.longitude} onChange={handleChange}/>
              </label>
              <input type="submit" className="button" value="Add a Signal "/>

              <div className="spacer"></div>

            </div>
          </form>
        </div>
      </div>
    </>
  );
  };

export default DisplaySignale;
