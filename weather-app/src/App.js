import React, { useEffect, useState } from 'react'
import Description from './Components/description'
import { getFormattedWeatherData } from './WeatherService'

function App() {

  const [weather,setWeather]=useState(null);

  useEffect(()=>{
     const fetchweatherdata= async ()=>{
      const data=await getFormattedWeatherData;
      setWeather(data)
     }
     fetchweatherdata()
  },[])

  return (
   <div className='app' style={{background:`url(https://media.istockphoto.com/photos/white-clouds-and-sun-in-blue-sky-picture-id1200224188?b=1&k=20&m=1200224188&s=170667a&w=0&h=YX-D4NgRcua9IJiVDMaVpnwvsREBejmxWj76zkfAMxs=) `,backgroundPosition:`center`,backgroundSize:`cover`}}>
     <div className='overlay'>
       { weather && (
          <div className='container'>
          <div className="section section_inputs">
            <input type="text" name="city" placeholder='enter your city name...' />    <button>°F</button>
          </div>
      
          <div className="section section__temperature">
            <div className="icon">
              <h3>
                {`${weather.name}, ${weather.country}`}
              </h3>
              <img src={weather.iconURL} alt="weatherIcon" />
              <h3>{weather.description}</h3>
            </div>
            <div className="temperature">
              <h1>34 °C</h1>
            </div>
          </div>

          {/* bottom description */}
               
          <Description/>

       </div>
        )}
       
     </div>
   </div>
  )
}

export default App


