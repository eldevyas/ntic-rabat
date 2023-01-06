import React, { useState, useEffect } from "react";
import axios from "axios";
// MUI Skeleton
import Skeleton from "@mui/material/Skeleton";

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
        }[]
    >();

    // send request with axios to API ("api/weather");
    const getWeather = async () => {
        let res = await axios.get("/api/weather");
        if (res.status === 200) {
            setWeather(res.data);
            return;
        } else {
            console.log(res.data);
            setWeather([]);
        }
    };

    useEffect(() => {
        getWeather();
    }, []);

    return (
        <>
            {Days.map((Day, index) => {
                return (
                    <tr key={index}>
                        <td>
                            <div>
                                <span>{Day}</span>
                                <span>18° C</span>
                            </div>
                        </td>

                        <td style={{ background: "transparent" }}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "70px",
                                    borderRadius: "10px",
                                    animationDelay: "0.3s",
                                }}
                            />
                        </td>

                        <td style={{ background: "transparent" }}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "70px",
                                    borderRadius: "10px",
                                    animationDelay: "0.6s",
                                }}
                            />
                        </td>

                        <td style={{ background: "transparent" }}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "70px",
                                    borderRadius: "10px",
                                    animationDelay: "0.9s",
                                }}
                            />
                        </td>

                        <td style={{ background: "transparent" }}>
                            <Skeleton
                                variant="rectangular"
                                sx={{
                                    width: "100%",
                                    height: "100%",
                                    minHeight: "70px",
                                    borderRadius: "10px",
                                    animationDelay: "1.2s",
                                }}
                            />
                        </td>
                    </tr>
                );
            })}
        </>
    );
};

export default ScheduleSkeleton;
