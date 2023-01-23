import axios from "axios";
import { pushFailure } from "./displayAlert";

export const getSchedule = async (GroupID: string) => {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;

    if (!GroupID || GroupID == "") return [];

    const response = await axios.get(`${Hostname}/api/V2/groups/${GroupID}`);

    if (response.status = 200) {
        return response.data;
    }
    pushFailure('La login avec l\'API du serveur s\est échouée, vérifiez votre login internet.');
    return [];
}

export const getWeather = async () => {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;

    const response = await axios.get(`${Hostname}/api/weather`);

    if (response.status = 200) {
        return response.data;
    }

    pushFailure('La login avec l\'API du méteo s\est échouée, vérifiez votre login internet.');
    return [];
}