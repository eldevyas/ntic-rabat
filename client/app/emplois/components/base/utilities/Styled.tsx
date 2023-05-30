import { Grid, Tooltip, Typography, Skeleton, Box } from "@mui/material";
import * as WeatherIcon from "./WeatherIcons";
import { alpha, styled } from "@mui/material/styles";

const Desktop = {
    Header: {
        SpecialCell: ({ GroupID }: { GroupID: string }) => {
            return (
                <td>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            border: 1,
                            borderColor: (theme) =>
                                theme.palette.mode == "light"
                                    ? alpha("#000", 0.1)
                                    : alpha("#fff", 0.25),
                            backgroundColor: (theme) =>
                                theme.palette.mode == "dark"
                                    ? alpha("#000", 0.5)
                                    : theme.palette.secondary.main,
                            backgroundImage: (theme) =>
                                theme.palette.mode == "dark"
                                    ? `linear-gradient(135deg, ${alpha(
                                          "#000",
                                          0.75
                                      )} 0%, ${alpha("#000", 1)} 100%)`
                                    : `linear-gradient(135deg, #29ABE2 0%, #4BB8E7 100%)`,
                            minHeight: 40,
                            borderRadius: "0.7rem",
                            color: (theme) => "#fff",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: 800,
                            userSelect: "none",
                            minWidth: "200px",
                        }}
                    >
                        {GroupID}
                    </Box>
                </td>
            );
        },
        TimingCell: ({ From, To }: { From: string; To: string }) => {
            return (
                <td>
                    <Box
                        sx={{
                            position: "relative",
                            width: "100%",
                            height: "100%",
                            border: 1,
                            borderColor: (theme) =>
                                theme.palette.mode == "light"
                                    ? alpha("#000", 0.1)
                                    : alpha("#fff", 0.1),
                            backgroundColor: (theme) =>
                                theme.palette.mode == "light"
                                    ? alpha("#fff", 0.25)
                                    : alpha("#000", 0.25),
                            borderRadius: "0.7rem",
                            color: (theme) => theme.palette.text.disabled,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            padding: "0.5rem",
                            fontSize: "0.9rem",
                            fontWeight: 800,
                            userSelect: "none",
                        }}
                    >
                        <span>{From}</span>
                        <span>{To}</span>
                    </Box>
                </td>
            );
        },
    },
    Body: {
        WeatherCell: ({
            Day,
            CellDate,
            Temperature,
            Icon,
            Weather,
            ShortWeather,
        }: {
            [key: string]: string | any;
        }) => {
            // Switch function
            function SwitchIcon(Icon: string) {
                switch (Icon) {
                    case "Sun":
                        return <WeatherIcon.Sunny />;
                    case "Fog":
                        return <WeatherIcon.Fog />;
                    case "Rain":
                        return <WeatherIcon.Rainy />;
                    case "Thunder":
                        return <WeatherIcon.Thunder />;
                    case "Cloudy":
                        return <WeatherIcon.Cloudy />;
                    case "CloudySun":
                        return <WeatherIcon.CloudySun />;
                    case "Snow":
                        return <WeatherIcon.Snowy />;
                    default:
                        return <WeatherIcon.Sunny />;
                }
            }

            // Get weather icon
            const FinalWeatherIcon = SwitchIcon(Icon);

            // Date from props dataDate - formatted to (01 Jan 2023);
            // Convert date to (01 Jan 2023)
            const date = new Date(String(CellDate));

            const FinalDate = date.toLocaleDateString("fr-FR", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
            });

            // Capitalize final date
            const CapitalizedFinalDate =
                FinalDate.charAt(0).toUpperCase() + FinalDate.slice(1);

            return (
                <td>
                    <Tooltip
                        title={Weather + " - " + CapitalizedFinalDate}
                        arrow
                    >
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                minWidth: "200px",
                                border: 1,
                                borderColor: (theme) =>
                                    theme.palette.mode == "light"
                                        ? alpha("#000", 0.1)
                                        : alpha("#fff", 0.25),
                                backgroundColor: (theme) =>
                                    theme.palette.mode == "dark"
                                        ? alpha("#000", 0.5)
                                        : theme.palette.secondary.main,
                                backgroundImage: (theme) =>
                                    theme.palette.mode == "dark"
                                        ? `linear-gradient(135deg, ${alpha(
                                              "#000",
                                              0.75
                                          )} 0%, ${alpha("#000", 1)} 100%)`
                                        : `linear-gradient(135deg, #29ABE2 0%, #4BB8E7 100%)`,
                                minHeight: 40,
                                borderRadius: "0.7rem",
                                color: (theme) => "#fff",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "center",
                                padding: "0.5rem",
                                fontSize: "0.9rem",
                                fontWeight: 800,
                                userSelect: "none",
                                overflow: "hidden",
                            }}
                        >
                            {/* Weather Infos and Day */}
                            <Typography
                                fontSize={"1rem"}
                                fontWeight={800}
                                zIndex={10}
                            >
                                {Day}
                            </Typography>
                            <Typography
                                fontSize={"0.8rem"}
                                fontWeight={500}
                                zIndex={10}
                            >
                                {Temperature}° C - {ShortWeather}
                            </Typography>

                            {/* Weather icon */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    overflow: "hidden",
                                    width: "100%",
                                    height: "100%",
                                    top: 0,
                                    left: 0,
                                    display: "flex",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                    background: "transparent !important",
                                    zIndex: 5,
                                    svg: {
                                        width: "auto",
                                        height: "100%",
                                        position: "absolute",
                                        top: "50%",
                                        transform: "translateY(-50%)",
                                        left: "-10%",
                                    },
                                    ".Rainy, .Snowy, .Thunder, .SunRain": {
                                        width: "auto",
                                        height: "70% !important",
                                    },
                                    ".Fog": {
                                        width: "auto",
                                        height: "75% !important",
                                    },
                                    // float animation
                                    animation: "float 3s ease-in-out infinite",
                                    "@keyframes float": {
                                        "0%": {
                                            transform: "translatey(0px)",
                                        },

                                        "50%": {
                                            transform: "translatey(-5px)",
                                        },

                                        "100%": {
                                            transform: "translatey(0px)",
                                        },
                                    },
                                }}
                            >
                                {FinalWeatherIcon}
                            </Box>

                            {/* Clouds */}
                            <Box
                                sx={{
                                    position: "absolute",
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    height: "100%",
                                    width: "100%",
                                    opacity: 0.35,
                                }}
                            >
                                <Box
                                    sx={{
                                        position: "absolute",
                                        bottom: "0%",
                                        left: 0,
                                        right: 0,
                                        height: "100%",
                                        width: "100%",
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        background: "transparent !important",
                                        opacity: (theme) =>
                                            theme.palette.mode == "light"
                                                ? 0.5
                                                : 0.1,

                                        // img vars
                                        "& img:nth-child(1)": {
                                            "--i": 1,
                                            animationDelay: `-${5 * 16}s`,
                                        },

                                        "& img:nth-child(2)": {
                                            "--i": 2,
                                            animationDelay: `-${4 * 16}s`,
                                        },

                                        "& img:nth-child(3)": {
                                            "--i": 3,
                                            animationDelay: `-${3 * 16}s`,
                                        },

                                        "& img:nth-child(4)": {
                                            "--i": 4,
                                            animationDelay: `-${2 * 16}s`,
                                        },

                                        "& img:nth-child(5)": {
                                            "--i": 5,
                                            animationDelay: `-${1 * 16}s`,
                                        },

                                        "& img": {
                                            // each image has a unique variable
                                            position: "absolute",
                                            bottom: 0,
                                            maxWidth: "100%",
                                            animation:
                                                "animate calc(16s * var(--i)) linear infinite",
                                        },

                                        "@keyframes animate": {
                                            "0%": {
                                                transform: "translateX(-100%)",
                                            },
                                            "100%": {
                                                transform: "translateX(100%)",
                                            },
                                        },
                                    }}
                                >
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/assets/img/cloud1.png"
                                        alt=""
                                        style={{ zIndex: 1 }}
                                    />

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/assets/img/cloud2.png"
                                        alt=""
                                        style={{ zIndex: 2 }}
                                    />

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/assets/img/cloud3.png"
                                        alt=""
                                        style={{
                                            zIndex: 3,
                                        }}
                                    />

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/assets/img/cloud4.png"
                                        alt=""
                                        style={{ zIndex: 4 }}
                                    />

                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img
                                        src="/assets/img/cloud5.png"
                                        alt=""
                                        style={{ zIndex: 5 }}
                                    />
                                </Box>
                            </Box>
                        </Box>
                    </Tooltip>
                </td>
            );
        },
        CourseCell: {
            Skeleton: () => {
                return (
                    <td>
                        <Skeleton
                            variant="rectangular"
                            animation="wave"
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                borderRadius: "0.7rem",
                                border: 1,
                                // backdropFilter: "blur(0.5rem)",
                                borderColor: (theme) =>
                                    theme.palette.mode == "light"
                                        ? alpha("#000", 0.1)
                                        : alpha("#fff", 0.1),
                                backgroundColor: (theme) =>
                                    theme.palette.mode == "light"
                                        ? alpha("#fff", 0.25)
                                        : alpha("#000", 0.25),
                            }}
                        />
                    </td>
                );
            },
            Free: () => {
                return (
                    <td>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                borderRadius: "0.7rem",
                                // backdropFilter: "blur(0.5rem)",
                                border: 1,
                                borderColor: (theme) =>
                                    theme.palette.mode == "light"
                                        ? alpha("#000", 0.1)
                                        : alpha("#fff", 0.1),
                                backgroundColor: (theme) =>
                                    theme.palette.mode == "light"
                                        ? alpha("#fff", 0.25)
                                        : alpha("#000", 0.25),
                            }}
                        />
                    </td>
                );
            },
            Presential: ({
                Former,
                Hall,
            }: {
                Former: string;
                Hall: string;
            }) => {
                return (
                    <td>
                        <Box
                            sx={(theme) => ({
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                backgroundColor: theme.palette.primary.main,
                                borderRadius: "0.7rem",
                                color: theme.palette.primary.main,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: "0.35rem",
                                padding: "0.5rem",
                                fontSize: "0.9rem",
                                fontWeight: 800,
                                userSelect: "none",
                                border: 1,
                                borderColor: "#fff",
                            })}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    color: "#fff",
                                }}
                            >
                                {Former}
                            </Typography>
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    color: (theme) =>
                                        theme.palette.primary.main,
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem",
                                }}
                            >
                                {Hall}
                            </Typography>
                        </Box>
                    </td>
                );
            },
            Online: ({ Former }: { Former: string }) => {
                return (
                    <td>
                        <Box
                            sx={(theme) => ({
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                backgroundColor: theme.palette.secondary.main,
                                borderRadius: "0.7rem",
                                color: theme.palette.secondary.main,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: "0.35rem",
                                padding: "0.5rem",
                                fontSize: "0.9rem",
                                fontWeight: 800,
                                userSelect: "none",
                                border: 1,
                                borderColor: "#fff",
                            })}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    color: "#fff",
                                }}
                            >
                                {Former}
                            </Typography>
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    color: (theme) =>
                                        theme.palette.secondary.main,
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem",
                                }}
                            >
                                {"En ligne"}
                            </Typography>
                        </Box>
                    </td>
                );
            },
            Absent: ({ Former }: { Former: string }) => {
                return (
                    <td>
                        <Box
                            sx={{
                                position: "relative",
                                width: "100%",
                                height: "100%",
                                backgroundColor: (theme) =>
                                    theme.palette.mode == "dark"
                                        ? alpha("#000", 0.5)
                                        : theme.palette.error.main,
                                borderRadius: "0.7rem",
                                // backdropFilter: "blur(0.5rem)",
                                color: (theme) =>
                                    theme.palette.mode == "dark"
                                        ? theme.palette.error.main
                                        : theme.palette.error.main,
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: "0.35rem",
                                padding: "0.5rem",
                                fontSize: "0.9rem",
                                fontWeight: 800,
                                userSelect: "none",
                                border: 1,
                                borderColor: (theme) =>
                                    theme.palette.mode == "dark"
                                        ? alpha(theme.palette.error.main, 0.5)
                                        : "#fff",
                            }}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    color: (theme) =>
                                        theme.palette.mode == "light"
                                            ? "#fff"
                                            : theme.palette.error.main,
                                }}
                            >
                                {Former}
                            </Typography>
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: (theme) =>
                                        theme.palette.mode == "dark"
                                            ? theme.palette.error.main
                                            : "#fff",
                                    color: (theme) =>
                                        theme.palette.mode == "light"
                                            ? theme.palette.error.main
                                            : "#000",
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem",
                                }}
                            >
                                {"Absent"}
                            </Typography>
                        </Box>
                    </td>
                );
            },
        },
    },
};

const Mobile = {};

export { Desktop, Mobile };
