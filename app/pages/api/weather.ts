import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // API  Data
    const apiKey = "f8e21ece8f005c43bba568195d4bd3e3";
    const rabat_lon = "-6.849131222272945"
    const rabat_lat = "33.97583368254488"
    const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${rabat_lat}&lon=${rabat_lon}&exclude=hourly,alerts&appid=${apiKey}&units=metric`;

    // Get the data from the API
    const { data } = await axios.get(url);

    // Filter returned data to only take celcius degrees,description, icon and weather for the week



    // console.log(data);
    let filteredData = data.list.map((item: any) => {
        if (item.dt_txt.includes('12:00:00')) {
            return {
                icon: item.weather[0].icon,
                temperature: item.main.temp,
                humidity: item.main.humidity,
                description: item.weather[0].description,
                date: item.dt_txt,
            };
        }
        return;
    });

    // Remove null values from the array
    filteredData = filteredData.filter((item: any) => item !== undefined);

    // res.status(200).json(data);
    res.status(200).json(filteredData);
}
