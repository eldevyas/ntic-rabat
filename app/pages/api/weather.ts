import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';


function convert(date: any) {
    const d = Date.parse(date)
    const date_obj = new Date(d)
    return `${date_obj.getFullYear()}-${date_obj.toLocaleString("default", { month: "2-digit" })}-${date_obj.toLocaleString("default", { day: "2-digit" })}`
}



export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    var curr = new Date; // get current date
    var first = curr.getDate() - curr.getDay(); // First day is the day of the month - the day of the week
    var last = first + 6; // last day is the first day + 6

    var weekStart = convert(new Date(curr.setDate(first)));
    var weekEnd = convert(new Date(curr.setDate(last)));

    const url = `https://api.open-meteo.com/v1/forecast?latitude=34.01&longitude=-6.83&daily=weathercode,apparent_temperature_max,apparent_temperature_min&timezone=auto&start_date=${weekStart}&end_date=${weekEnd}`;

    const { data } = await axios.get(url);

    // filter the data
    let filteredData = data.daily.time.map((date: any, index: number) => {
        // Get day name
        const dayDate = date;
        const day = new Date(dayDate);
        const dayName = day.toLocaleDateString("en-US", {
            weekday: "long"
        })


        let Weather = null;
        let Icon = null;

        // Find Icon with WeatherCode
        switch (data.daily.weathercode[index]) {
            case 0:
                Weather = "Clear sky";
                Icon = "Sun";
                break;
            // Case 1, 2 or 3
            case 1:
                Weather = "Mainly clear";
                Icon = "Sun Cloudy";
                break;
            case 2:
                Weather = "Partly Cloudy";
                Icon = "Cloudy";
                break;
            case 3:
                Weather = "Overcast";
                Icon = "Fog";
                break;
            case 45:
                Weather = "Fog";
                Icon = "Fog";
                break;
            case 48:
                Weather = "Depositing Rime Fog";
                Icon = "Fog";
                break;
            case 51:
                Weather = "Light Drizzle";
                Icon = "Fog";
                break;
            case 53:
                Weather = "Moderate Drizzle";
                Icon = "Fog";
                break;
            case 55:
                Weather = "Heavy Drizzle";
                Icon = "Fog";
                break;
            case 56:
                Weather = "Light Freezing Drizzle";
                Icon = "Fog";
                break;
            case 57:
                Weather = "Moderate Freezing Drizzle";
                Icon = "Fog";
                break;
            case 61:
                Weather = "Slight Rain";
                Icon = "Rain";
                break;
            case 63:
                Weather = "Moderate Rain";
                Icon = "Rain";
                break;
            case 65:
                Weather = "Heavy Rain";
                Icon = "Rain";
                break;
            case 66:
                Weather = "Light Freezing Rain";
                Icon = "Rain";
                break;
            case 67:
                Weather = "Heavy Freezing Rain";
                Icon = "Rain";
                break;
            // Imta kati7 telj f rabat? may7m9nich
            // HHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHHH
            // GHAYBGHI BL3ANI YGHFLNA W YTI7
            // Safi blan nzidou mo hta huwa
            // Mat3ref yti7 vri
            // HHHHHH TA LA BLACH
            // DIR GHA RE3D
            case 71:
                Weather = "Slight Snow Fall";
                Icon = "Snow";
                break;
            case 73:
                Weather = "Moderate Snow Fall";
                Icon = "Snow";
                break;
            case 75:
                Weather = "Heavy Snow Fall";
                Icon = "Snow";
                break;
            case 80:
                Weather = "Slight Rain";
                Icon = "Rain";
                break;
            case 81:
                Weather = "Moderate Rain";
                Icon = "Rain";
                break;
            case 82:
                Weather = "Heavy Rain";
                Icon = "Rain";
                break;
            case 85:
                Weather = "Slight Snow Showers";
                Icon = "Snow";
                break;
            case 86:
                Weather = "Heavy Snow Showers";
                Icon = "Snow";
                break;
            case 95:
                Weather = "Thunderstorm";
                Icon = "Thunder";
                break;
            // More than 95
            case 96:
                Weather = "Slight Thunderstorm";
                Icon = "Thunder";
                break;
            case 99:
                Weather = "Heavy Thunderstorm";
                Icon = "Thunder";
                break;
            default:
                Weather = "Clear sky";
                Icon = "Sun";
                break;
        }




        // if not sunday
        if (dayName != "Sunday") {
            return {
                date: dayDate,
                day: dayName,
                temperature: {
                    max: Math.floor(parseFloat(data.daily.apparent_temperature_max[index])),
                    min: Math.floor(parseFloat(data.daily.apparent_temperature_min[index])),
                    avg: Math.floor((parseFloat(data.daily.apparent_temperature_max[index]) * 1.25 + parseFloat(data.daily.apparent_temperature_min[index])) / 2)
                },
                icon: Icon,
                weather: Weather
            }
        }
    });

    // Remove null values
    filteredData = filteredData.filter((item: any) => {
        return item != null;
    });


    res.status(200).json(filteredData);
}
