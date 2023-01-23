import React, { useState, useEffect } from "react";
import axios from "axios";
// MUI Skeleton
import Skeleton from "@mui/material/Skeleton";
import WeatherCell from "./WeatherCell";

const ScheduleSkeleton = (props: any) => {
    const Days = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
    const [Weather, setWeather] = useState<
        {
            date: string;
            day: string;
            temperature: {
                max: number;
                min: number;
                avg: number;
            };
            icon: string;
            weather: string;
            shortWeather: string;
        }[]
    >(props.Weather);

    const Cells = [1, 2, 3, 4];

    return (
        <>
            {Days.map((Day: string, index: number) => {
                return (
                    <tr key={index}>
                        <td>
                            <div>
                                {Weather && Weather.length >= 6 ? (
                                    <>
                                        <WeatherCell
                                            dataDay={Day}
                                            dataDate={Weather[index].date}
                                            dataTemperature={
                                                Weather[index].temperature.avg
                                            }
                                            dataIcon={Weather[index].icon}
                                            dataWeather={Weather[index].weather}
                                            dataShortWeather={
                                                Weather[index].shortWeather
                                            }
                                        />
                                    </>
                                ) : (
                                    <>
                                        <WeatherCell
                                            dataDay={Day}
                                            dataDate={new Date()}
                                            dataTemperature={Math.floor(
                                                Math.random() * 20
                                            )}
                                            dataIcon={"Cloudy"}
                                            dataWeather={"Nuageux"}
                                            dataShortWeather={"Nuageux"}
                                        />
                                    </>
                                )}
                            </div>
                        </td>

                        {Cells.map((Cell, index) => {
                            return (
                                <td
                                    key={index}
                                    style={{ background: "transparent" }}
                                >
                                    <Skeleton
                                        variant="rectangular"
                                        sx={{
                                            width: "100%",
                                            height: "100%",
                                            minHeight: "70px",
                                            borderRadius: "10px",
                                            animationDelay: `${index * 0.1}s`,
                                            // BG color
                                            bgcolor: "#fff",
                                        }}
                                    />
                                </td>
                            );
                        })}
                    </tr>
                );
            })}
            {/* <div className="Message">
                <h3>Pas de données à afficher!</h3>
                <p>Veuillez sélectionner un groupe dans la liste déroulante.</p>
            </div> */}
        </>
    );
};

export default ScheduleSkeleton;
