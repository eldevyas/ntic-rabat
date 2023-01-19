import axios from "axios";

export const getSchedule = async (GroupID: string) => {
    // Get host form env variable
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    // Get schedule from API
    // Validate the presence of GroupID otherwise return empty array
    if (!GroupID || GroupID == "") return [];

    const response = await axios.get(`${Hostname}/api/V2/groups/${GroupID}`);
    // Return schedule
    return response.data;
}

// fetch weather
export const getWeather = async () => {
    // Get host form env variable
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;
    // Get weather from API
    const response = await axios.get(`${Hostname}/api/weather`);
    // Return weather
    return response.data;
}