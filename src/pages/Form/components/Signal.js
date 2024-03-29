import React,{useState} from 'react'
import "./Display.css";


export default function Signal({formData,ID,numberOfSignals,setNumberOfSignals}) {

    const [formSignalData, setFormSignalData] = useState({

        signalId:"",
        circleId:formData.circleId,
        signalStatus:"working",
        junctionType:"crossroads with traffic light",
    
        aspects:{
            currentColor:"red",
            durationInSeconds:120,
            red:20,
            yellow:5,
            green:5
        },
        address:{
            circleName:formData.address.circleName,
            road:formData.address.road,
            area:formData.address.area,
            city: formData.address.city,
            pincode:formData.address.pincode,
          },
      
        location:{
            latitude:23.105555,
            longitude:72.597444,
            angle:90,
        },
      });
   
      const handleChange=(e)=>{
        if(e.target.name==="signalId"){
            setFormSignalData({
                ...formSignalData,
                signalId:e.target.value,
            })
        }
        if(e.target.name==="latitude" || e.target.name==="longitude"){
                setFormSignalData({
                    ...formSignalData,
                    location:{
                      ...formSignalData.location,
                      [e.target.name]: parseFloat(e.target.value),
                    }
                  });
        }
        if(e.target.name==="red" || e.target.name==="yellow" || e.target.name==="green"){
          setFormSignalData({
            ...formSignalData,
            aspects:{
              ...formSignalData.aspects,
              [e.target.name]:parseInt(e.target.value)
            }
          })
        }
        // console.log(formSignalData)
      }
      const handleSubmit= async(e) =>{
        e.preventDefault();
        const updateCondition=[...numberOfSignals.condition]
        updateCondition[ID]=true
        setNumberOfSignals({
            ...numberOfSignals,
            condition:updateCondition
        })
        const element = document.getElementById(`signal${ID}`);        
        try {
          const response = await fetch('https://greenroad-gr.onrender.com/app/p1/add-signal-light', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formSignalData),
          });
          // console.log(formSignalData)
          if(response.ok)
          {
          alert('Form data submitted successfully!');
          element.style.display="none"
          }
          else{
            alert('Error submitting form data');
          }
    
          
        } catch (error) {
          alert('Error submitting form data');
        }

      }
  return (
    <div id={`signal${ID}`}>
     <form onSubmit={handleSubmit} >
            <div className="info">
            <h3>signal {`${ID}`}</h3>
            <label className="item">
                Signal ID
                <input type="text" name="signalId" value={formSignalData.signalID} onChange={handleChange}/>
              </label>
            
              <label className="item">
                latitude
                <input type="number" name="latitude" value={formSignalData.location.latitude} onChange={handleChange}/>
              </label>

              <label className="item">
                longitude
                <input type="number" name="longitude" value={formSignalData.location.longitude} onChange={handleChange}/>
              </label>

              <label className="item">
                Red
                <input type="number" name="red" value={formSignalData.aspects.red} onChange={handleChange}/>
              </label>

              <label className="item">
                Yellow
                <input type="number" name="yellow" value={formSignalData.aspects.yellow} onChange={handleChange}/>
              </label>

              <label className="item">
                Green
                <input type="number" name="green" value={formSignalData.aspects.green} onChange={handleChange}/>
              </label>

              
              <input type="submit" className="button" value="Add a Signal "/>
            </div>
          </form>
    </div>
  )
}
