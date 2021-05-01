import React, { useState, useEffect } from 'react'
import './css/temp.css'
// api.openweathermap.org/data/2.5/weather?q=Pune&appid=1dd42a1a551596ce00bc80add662670e

export const Temp = () => {
  const [city, setCity] = useState(null)
  const [search, setSearch] = useState('Mumbai')

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=1dd42a1a551596ce00bc80add662670e`
      const response = await fetch(url)
      const resJson = await response.json()
      setCity(resJson.main)
    }
    fetchApi()
  }, [search])
  return (
    <>
      <div className="box">
        <h1 className="head">Weather App</h1>
        <div className="search">
          <input
            type="search"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value)
            }}
          />
        </div>
        {!city ? (
          <p>No Data Found</p>
        ) : (
          <div>
            <div className="info">
              <h2>
                <i className="fas fa-street-view"></i>
                {search}
              </h2>
              <h1>{city.temp}°Cel</h1>
              <h3>
                Min: {city.temp_min}°Cel | Max: {city.temp_max}°Cel
              </h3>
              <h5>Feels Like: {city.feels_like}°Cel</h5>
              <h5>Pressure: {city.pressure}</h5>
              <h5>Humidity: {city.humidity}</h5>
            </div>
            <div className="waveWrapper waveAnimation">
              <div className="waveWrapperInner bgTop">
                <div className="wave waveTop"></div>
              </div>
              <div className="waveWrapperInner bgMiddle">
                <div className="wave waveMiddle"></div>
              </div>
              <div className="waveWrapperInner bgBottom">
                <div className="wave waveBottom"></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
