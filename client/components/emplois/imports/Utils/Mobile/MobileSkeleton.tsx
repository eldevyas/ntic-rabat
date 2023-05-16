import React, { useEffect, useState } from "react";
import * as Class from "./../../Utils/Mobile/components/ClassCell";
import DayCell from "./../../Utils/Mobile/components/DayCell";
import { Skeleton } from "@mui/material";

export default function MobileSkeleton(props: any) {
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
            <div className="ScheduleBody">
                {Days.map((Day: string, index: number) => {
                    return (
                        <div className="ScheduleDay" key={index}>
                            {Weather && Weather.length >= 6 ? (
                                <>
                                    <DayCell
                                        className="ScheduleDayName"
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
                                    <DayCell
                                        className="ScheduleDayName"
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
                            <div className="ScheduleDayHours">
                                {/* <Class.Presential prof={} /> */}
                                {Cells.map((Cell, index) => {
                                    return (
                                        <Skeleton
                                            variant="rectangular"
                                            className="ScheduleTimeCell SkeletonCell"
                                            key={index}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "10px",
                                                animationDelay: `${
                                                    index * 0.1
                                                }s`,
                                                // BG color
                                                color: "#fff",
                                            }}
                                        >
                                            <Skeleton
                                                variant="rectangular"
                                                className="Prof"
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "20px",
                                                    borderRadius: "10px",
                                                    animationDelay: `${
                                                        index * 0.75
                                                    }s`,
                                                    // BG color
                                                    color: "#000",
                                                }}
                                            ></Skeleton>
                                            <Skeleton
                                                variant="rectangular"
                                                className="Class"
                                                sx={{
                                                    position: "relative",
                                                    width: "100%",
                                                    height: "20px",
                                                    borderRadius: "10px",
                                                    animationDelay: `${
                                                        index * 0.5
                                                    }s`,
                                                    // BG color
                                                    color: "#000",
                                                    backgroundColor: "red",
                                                }}
                                            ></Skeleton>
                                        </Skeleton>
                                    );
                                })}
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}
