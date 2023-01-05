
import React, { useState } from 'react'
import axios from 'axios';
const Weather = (props: any) => {
    // function setWeather(data: any) {
    //     const weather = data;
    // }
    // console.log(props.data)
    // var weather: {} = [];
    // function setWeather(data: any) {
    //     weather = data;
    // }
    // const [weather, setWeather] = useState({})
    const [weather, setWeather] = useState({})
    const apiKey = "f8e21ece8f005c43bba568195d4bd3e3";

    const rabat_lon = "-6.849131222272945"

    const rabat_lat = "33.97583368254488"

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${rabat_lat}&lon=${rabat_lon}&appid=${apiKey}&units=matric`;

    // export response from api url
    axios.get(url).then((response) => {
        setWeather(response.data)
    }
    )
    console.log(weather)
    // TypeError: Cannot read properties of null (reading 'useState')

}

export default Weather