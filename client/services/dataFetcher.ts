import axios from "axios";
import { pushFailure, pushWarning } from "./displayAlert";

export const getSchedule = async (GroupID: string) => {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;

    if (!GroupID || GroupID == "") return [];

    await axios.get(`${Hostname}/api/V2/groups/${GroupID}`)
        .then(
            (response) => {
                if (response.status = 200) {
                    return response.data;
                }
                pushFailure('La connexion avec l\'API du serveur s\est échouée, vérifiez votre connexion internet.');
                return [];
            }
        )
        .catch(
            (error) => {
                pushFailure('La connexion avec l\'API du serveur s\est échouée, vérifiez votre connexion internet.');
                return [];
            }
        );

    pushFailure('La connexion avec l\'API du serveur s\est échouée, vérifiez votre connexion internet.');
    return [];
}

export const getWeather = async () => {
    const Hostname = process.env.NEXT_PUBLIC_HOSTNAME;

    let Weather: [] = [];

    await axios.get(`${Hostname}/api/weather`)
        .then(
            (response) => {
                if (response.status = 200) {
                    return Weather = response.data;
                }
                pushFailure('La connexion avec l\'API du méteo s\est échouée, vérifiez votre connexion internet.');
                return Weather = [];
            }
        )
        .catch(
            (error) => {
                pushFailure('La connexion avec l\'API du méteo s\est échouée, vérifiez votre connexion internet.');
                pushWarning(error.message);
                return Weather = [];
            }
        );
    return Weather;
    // Currently working properly✅
    // Let's fix the Announces.
}


// Get announces
export const getAnnounces = async () => {
    const API_URL = process.env.SERVER_PUBLIC_API_URL;

    let Data: { data?: [] } = {};

    await axios.get(`${API_URL}/annonces`).then(
        (response) => {
            if (response.status = 200) {
                return Data = response.data;
            }
            console.log(response);
            pushFailure('La connexion avec l\'API des annonces s\est échouée, vérifiez votre connexion internet.');
            return Data = {};
        }
    ).catch(
        (error) => {
            pushFailure('La connexion avec l\'API des annonces s\est échouée, vérifiez votre connexion internet.');
            pushWarning(error.message);
            return Data = {};
        }
    );

    if (
        Data == undefined
    ) {
        pushFailure('La connexion avec l\'API des annonces s\est échouée, vérifiez votre connexion internet.');
        return Data;
    } else {
        return Data;
    }
}