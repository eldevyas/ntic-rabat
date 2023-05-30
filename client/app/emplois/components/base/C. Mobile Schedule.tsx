import { Box, Grid } from "@mui/material";
import React from "react";
import { Mobile } from "./utilities/Styled";
import { alpha, styled } from "@mui/material/styles";

export default function MobileSchedule({
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
            }}
        >
            {/* Header */}
            <Mobile.Header.Container>
                <Mobile.Header.TimeCell>08:30</Mobile.Header.TimeCell>
                <Mobile.Header.TimeCell>11:00</Mobile.Header.TimeCell>
                <Mobile.Header.TimeCell>13:30</Mobile.Header.TimeCell>
                <Mobile.Header.TimeCell>18:00</Mobile.Header.TimeCell>
            </Mobile.Header.Container>

            {/* Day Row */}
            {!Loading &&
                Planning.length > 0 &&
                Planning.map((WeekRow: any, Index: number) => (
                    <Mobile.Body.Container key={Index}>
                        {Weather && Weather.length >= 6 ? (
                            <Mobile.Body.Weather
                                Day={WeekRow.Day}
                                CellDate={Weather[Index].date}
                                Temperature={Weather[Index].temperature.avg}
                                Icon={Weather[Index].icon}
                                Weather={Weather[Index].weather}
                                ShortWeather={Weather[Index].shortWeather}
                            />
                        ) : (
                            <Mobile.Body.Weather
                                Day={"Monday"}
                                CellDate={new Date()}
                                Temperature={21}
                                Icon={"Sunny"}
                                Weather={"Sunny"}
                                ShortWeather={"Sunny"}
                            />
                        )}
                        <Mobile.Body.CoursesContainer>
                            {WeekRow.Time.map(
                                (Cell: any, Cell_Index: number) => {
                                    if (Cell.Hall == "") {
                                        return (
                                            <Mobile.Body.Courses.Free
                                                key={Cell_Index}
                                            />
                                        );
                                    } else if (
                                        Cell.Hall == "Absente" ||
                                        Cell.Hall == "Absent"
                                    ) {
                                        return (
                                            <Mobile.Body.Courses.Absent
                                                key={Cell_Index}
                                                Former={Cell.Former}
                                            />
                                        );
                                    } else if (Cell.Hall == "dist") {
                                        return (
                                            <Mobile.Body.Courses.Online
                                                Former={Cell.Former}
                                                key={Cell_Index}
                                            />
                                        );
                                    } else {
                                        return (
                                            <Mobile.Body.Courses.Presential
                                                key={Cell_Index}
                                                Former={Cell.Former}
                                                Hall={Cell.Hall}
                                            />
                                        );
                                    }
                                }
                            )}
                        </Mobile.Body.CoursesContainer>
                    </Mobile.Body.Container>
                ))}

            {(Loading || Planning.length == 0) &&
                Array(1, 2, 3, 4, 5).map((WeekRow: any, RowIndex: number) => (
                    <Mobile.Body.Container key={RowIndex}>
                        <Mobile.Body.Weather
                            Day={"-"}
                            CellDate={new Date()}
                            Temperature={22}
                            Icon={"Sunny"}
                            Weather={"Sunny"}
                            ShortWeather={"Sunny"}
                        />
                        <Mobile.Body.CoursesContainer>
                            {Array(1, 2, 3, 4, 5).map((CellIndex: number) => (
                                <Mobile.Body.Courses.Skeleton key={CellIndex} />
                            ))}
                        </Mobile.Body.CoursesContainer>
                    </Mobile.Body.Container>
                ))}
        </Box>
    );
}

export const EmptySchedule = () => {
    return <></>;
};
