import {React, useState } from "react"
import axios from "axios"
import style from "./style.module.css"
const Main = () => {

    const [data, setData] = useState({})
    const [location, setLocation] = useState("")
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location.trim()}&units=metric&appid=229a3e58fd76b4cb632e90a1ff862f76`

    const searchLocation = (event) => {
        if (event.key === 'Enter'){
            axios.get(url).then((response) => {
                setData(response.data)
                // console.log(response.data)
            })
        }
    }

    return (
        <section>
            <div>
                <div><input id={style.search} type="text" placeholder="Enter city" value={location} onChange={event => setLocation(event.target.value)} onKeyPress={searchLocation} /></div>
                <div id={style.cardtemp}>
                    <div id={style.temprature}>
                        {data.main ? <h1>{Math.round(data.main.temp)}°C</h1> : <h1>0°C</h1>}
                    </div>
                    <div id={style.location}>
                        {data.weather ? <h2>{data.name}</h2> : "Enter location"}
                        {data.weather ? <span>{data.weather[0].main}</span> : ""}
                    </div>
                    <div id={style.cardbottom}>
                        <div>
                            {data.main ? <div className={style.circle}>{Math.round(data.main.feels_like)}°C</div> : <div className={style.circle}>°C</div>}
                            <p>Feels Like</p>
                        </div>
                        <div>
                            {data.main ? <div className={style.circle}>{data.main.humidity}%</div> : <div className={style.circle}>0%</div>}
                            <p>Humidity</p>
                        </div>
                        <div>
                            {data.wind ? <div className={style.circle}>{data.wind.speed}<br />m/s</div> : <div className={style.circle}>0<br />m/s</div>}
                            <p>Wind Speed</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Main