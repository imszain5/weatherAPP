import React, { useState } from "react";
import searchImage from '../src/Images/search.png'
import cloud from '../src/Images/cloud.png'
import humid from '../src/Images/humidity.png'
import wind from '../src/Images/windy.png'
import axios from "axios";
import FullPageLoader from "./Fullpageloader";



const Weather =()=>{
    const classes = useState();
    const[data,setData]=useState({
        celcius:10,
        name: 'London' ,
        humidity: 10,
        speed : 2
    });
    const [name,setName] = useState('');
    const[loader,showloader,hideloader] = FullPageLoader();
    

    const handleClick=()=>{
        
        if(name !== ""){
            showloader();
            const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=16bfa98849718de13b6e8978b87d47b8&units=metric`;
      axios.get(apiURL)
      .then(res=> {
        hideloader();
        console.log(res.data.main.temp)
        setData({ celcius: res.data.main.temp, name:res.data.name,
        humidity: res.data.main.humidity, speed: res.data.wind.speed})
      })
      .catch(err=> alert(err))
        }else
            alert('Kindly enter city')
    }
     return( 
        <>
             <div className="container">
               <div className="weather"> 
                    <div className="search">
                    <input type="search" 
                          placeholder="Enter City Name" 
                          onChange={(event)=>{
                            setName(event.target.value)
                          }
                           }
                          />      
                          <button> <img src={searchImage} onClick={()=>handleClick()} alt="searchlogo"/></button>        
                     </div>
                     {loader}

                 <div className="winfo">
                         <img src={cloud} alt="cloud" className="icon"/>
                         <h1>{Math.round(data.celcius)} °C</h1>
                         <h2>{data.name}</h2>
                          <div className="details">
                            <div className="col">
                                 <img src={humid} alt="humid"/>
                                  <div className="humidity">
                                    <p>{Math.round(data.humidity)}%</p>
                                    <p>Humidity</p>
                                  </div>
                                  <div className="col">
                                 <img src={wind} alt="wind"/>
                                  <div className="wind">
                                    <p>{Math.round(data.speed)} km/h</p>
                                    <p>wind</p>
                                  </div>
                            </div>
                         </div>

                     </div> 
               </div> 
               </div>
           </div> 
        </>
     );
};

export default Weather;