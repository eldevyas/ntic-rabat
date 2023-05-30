import { Box } from "@mui/material";
import React from "react";
import { Desktop } from "./utilities/Styled";
export default function DesktopSchedule({
    GroupID,
    Planning,
    Weather,
    Loading,
}: {
    GroupID: string;
    Planning: any[];
    Weather: any[];
    Loading: Boolean;
}) {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                padding: "1rem 2rem",
                overflowX: "auto",
                userSelect: "none",
                borderRadius: "0px",
                table: {
                    width: "%100",
                    height: "auto",
                    border: "none",
                    borderSpacing: "0.75rem",
                    margin: "0 auto",
                    td: {
                        transition: "filter .3s ease",
                        willChange: "filter",
                        "&:hover": {
                            filter: "brightness(120%)",
                        },
                    },
                    thead: {
                        tr: {
                            td: {
                                minWidth: "150px",
                                maxWidth: "max-content",
                                filter: "drop-shadow(0px 0px 5rem rgba($color: $C1, $alpha: 0.5))",
                            },
                        },
                    },
                    tbody: {
                        tr: {
                            td: {
                                position: "relative",
                                overflow: "hidden",
                                width: "200px",
                                minWidth: "150px",
                                filter: "drop-shadow(0px 0px 5rem rgba($color: $C1, $alpha: 0.5))",
                                height: "1rem",
                            },
                        },
                    },
                },
            }}
        >
            <table>
                <thead>
                    <tr>
                        <Desktop.Header.SpecialCell GroupID={GroupID} />
                        <Desktop.Header.TimingCell
                            From={"08:30"}
                            To={"11:00"}
                        />
                        <Desktop.Header.TimingCell
                            From={"11:00"}
                            To={"13:30"}
                        />
                        <Desktop.Header.TimingCell
                            From={"13:30"}
                            To={"16:00"}
                        />
                        <Desktop.Header.TimingCell
                            From={"16:00"}
                            To={"18:30"}
                        />
                    </tr>
                </thead>
                <tbody>
                    {!Loading &&
                        Planning.length > 0 &&
                        Planning.map((WeekRow: any, Index: number) => (
                            <tr key={Index}>
                                {Weather && Weather.length >= 6 ? (
                                    <Desktop.Body.WeatherCell
                                        Day={WeekRow.Day}
                                        CellDate={Weather[Index].date}
                                        Temperature={
                                            Weather[Index].temperature.avg
                                        }
                                        Icon={Weather[Index].icon}
                                        Weather={Weather[Index].weather}
                                        ShortWeather={
                                            Weather[Index].shortWeather
                                        }
                                    />
                                ) : (
                                    <Desktop.Body.WeatherCell
                                        Day={WeekRow.Day}
                                        CellDate={new Date()}
                                        Temperature={Math.floor(
                                            Math.random() * 20
                                        )}
                                        Icon={"Cloudy"}
                                        Weather={"Nuageux"}
                                        ShortWeather={"Nuageux"}
                                    />
                                )}
                                {WeekRow.Time.map(
                                    (Cell: any, Cell_Index: number) => {
                                        if (Cell.Hall == "") {
                                            return (
                                                <Desktop.Body.CourseCell.Free
                                                    key={Cell_Index}
                                                />
                                            );
                                        } else if (
                                            Cell.Hall == "Absente" ||
                                            Cell.Hall == "Absent"
                                        ) {
                                            return (
                                                <Desktop.Body.CourseCell.Absent
                                                    key={Cell_Index}
                                                    Former={Cell.Former}
                                                />
                                            );
                                        } else if (Cell.Hall == "dist") {
                                            return (
                                                <Desktop.Body.CourseCell.Online
                                                    key={Cell_Index}
                                                    Former={Cell.Former}
                                                />
                                            );
                                        } else {
                                            return (
                                                <Desktop.Body.CourseCell.Presential
                                                    key={Cell_Index}
                                                    Former={Cell.Former}
                                                    Hall={Cell.Hall}
                                                />
                                            );
                                        }
                                    }
                                )}
                            </tr>
                        ))}
                    {(Loading || Planning.length == 0) &&
                        Array(1, 2, 3, 4, 5).map(
                            (WeekRow: any, Index: number) => (
                                <tr key={Index}>
                                    {Array(1, 2, 3, 4, 5).map(
                                        (CellIndex: number) => (
                                            <Desktop.Body.CourseCell.Skeleton
                                                key={CellIndex}
                                            />
                                        )
                                    )}
                                </tr>
                            )
                        )}
                </tbody>
            </table>
        </Box>
    );
}

export const EmptySchedule = () => {
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "auto",
                padding: "1rem 2rem",
                overflowX: "auto",
                userSelect: "none",
                borderRadius: "0px",
                table: {
                    width: "%100",
                    height: "auto",
                    border: "none",
                    borderSpacing: "0.75rem",
                    margin: "0 auto",
                    td: {
                        transition: "filter .3s ease",
                        willChange: "filter",
                        "&:hover": {
                            filter: "brightness(120%)",
                        },
                    },
                    thead: {
                        tr: {
                            td: {
                                minWidth: "150px",
                                maxWidth: "max-content",
                                filter: "drop-shadow(0px 0px 5rem rgba($color: $C1, $alpha: 0.5))",
                            },
                        },
                    },
                    tbody: {
                        tr: {
                            td: {
                                position: "relative",
                                overflow: "hidden",
                                width: "200px",
                                minWidth: "150px",
                                filter: "drop-shadow(0px 0px 5rem rgba($color: $C1, $alpha: 0.5))",
                                height: "1rem",
                            },
                        },
                    },
                },
            }}
        >
            <table>
                {Array(1, 2, 3, 4, 5).map((Index: number) => (
                    <tbody key={Index}>
                        <tr>
                            {Array(1, 2, 3, 4, 5).map((CellIndex: number) => (
                                <Desktop.Body.CourseCell.Skeleton
                                    key={CellIndex}
                                />
                            ))}
                        </tr>
                    </tbody>
                ))}
            </table>
        </Box>
    );
};
