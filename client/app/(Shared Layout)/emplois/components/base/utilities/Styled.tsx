import { Grid, Tooltip, Typography, Skeleton, Box } from "@mui/material";
import * as WeatherIcon from "./WeatherIcons";
import { alpha, styled } from "@mui/material/styles";

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

const Cells = {
    Shared: {
        position: "relative",
        width: "100%",
        height: "100%",
        minHeight: 80,
        borderRadius: "0.7rem",
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
    },
    Presential: {
        color: "#141e30",
        backgroundColor: "#141e30",
        backgroundImage: "linear-gradient(to right, #141e30, #243b55)",
    },
    Online: {
        color: "#11998e",
        backgroundColor: "#11998e",
        backgroundImage: "linear-gradient(to right, #11998e, #38ef7d)",
    },
    Absent: {
        color: "#EB3349",
        backgroundColor: "#EB3349",
        backgroundImage: "linear-gradient(to right, #F45C43, #EB3349)",
    },
    MobileShared: {
        position: "relative",
        width: "fit-content",
        flex: 1,
        height: "100%",
        borderRadius: "0.7rem",
        border: 1,
        borderColor: alpha("#fff", 0.5),
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        gap: "0.35rem",
        padding: "0.5rem",
        fontSize: "0.9rem",
        fontWeight: 800,
        userSelect: "none",
        minHeight: 70,
    },
};

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
                            minHeight: 50,
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
                            minHeight: 50,
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
                                minHeight: 80,
                                borderRadius: "0.7rem",
                                color: "#fff",
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
                                minHeight: 80,
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
                                minHeight: 80,
                                borderRadius: "0.7rem",
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
                            sx={{
                                ...Cells.Shared,
                                ...Cells.Presential,
                            }}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                whiteSpace={"nowrap"}
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
                                whiteSpace={"nowrap"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    color: Cells.Presential.color,
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem 0.5rem",
                                    mixBlendMode: "screen",
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
                            sx={{
                                ...Cells.Shared,
                                ...Cells.Online,
                            }}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                whiteSpace={"nowrap"}
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
                                whiteSpace={"nowrap"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    color: Cells.Online.color,
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem 0.5rem",
                                    mixBlendMode: "screen",
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
                                ...Cells.Shared,
                                ...Cells.Absent,
                            }}
                        >
                            <Typography
                                fontSize={"0.9rem"}
                                fontWeight={800}
                                zIndex={10}
                                width={"100%"}
                                textAlign={"left"}
                                whiteSpace={"nowrap"}
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
                                whiteSpace={"nowrap"}
                                textAlign={"left"}
                                sx={{
                                    position: "relative",
                                    backgroundColor: "#fff",
                                    color: Cells.Absent.color,
                                    borderRadius: "0.35rem",
                                    padding: "0.25rem 0.5rem",
                                    mixBlendMode: "screen",
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

const Mobile = {
    Header: {
        Container: ({ children }: any) => (
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    maxWidth: "100vw",
                    minHeight: 50,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    gap: "0.75rem",
                    marginBottom: "0.75rem",
                }}
            >
                {children}
            </Box>
        ),
        TimeCell: ({ children }: { children: string }) => (
            <Box
                sx={(theme) => ({
                    position: "relative",
                    flex: "1",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    border: 1,
                    minHeight: 50,
                    borderColor:
                        theme.palette.mode == "light"
                            ? alpha("#000", 0.1)
                            : alpha("#fff", 0.1),
                    backgroundColor:
                        theme.palette.mode == "light"
                            ? alpha("#fff", 0.25)
                            : alpha("#000", 0.25),
                    borderRadius: "0.7rem",
                    color: theme.palette.text.disabled,
                })}
            >
                {children}
            </Box>
        ),
    },
    Body: {
        Container: ({ children }: any) => (
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    maxWidth: "100vw",
                    minHeight: 50,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    alignItems: "flex-start",
                    gap: "0.325rem",
                    marginBottom: "0.75rem",
                }}
            >
                {children}
            </Box>
        ),
        Weather: ({
            Day,
            CellDate,
            Temperature,
            Icon,
            Weather,
            ShortWeather,
        }: {
            [key: string]: string | any;
        }) => (
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    // color: (theme) => "#fff",
                    fontSize: "0.9rem",
                    fontWeight: 800,
                    userSelect: "none",
                    overflow: "hidden",
                    gap: "0.75rem",
                }}
            >
                {/* Weather Infos and Day */}
                <Typography
                    fontSize={"1rem"}
                    fontWeight={800}
                    zIndex={10}
                    whiteSpace={"nowrap"}
                >
                    {Day}
                </Typography>
                <Typography
                    fontSize={"0.8rem"}
                    fontWeight={500}
                    zIndex={10}
                    whiteSpace={"nowrap"}
                    color={(theme) => theme.palette.text.disabled}
                >
                    {Temperature}° C - {ShortWeather}
                </Typography>
            </Box>
        ),
        CoursesContainer: ({ children }: any) => (
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                    maxWidth: "100%",
                    minHeight: 70,
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    gap: "0.75rem",
                    overflowX: "auto",
                    "&::-webkit-scrollbar": {
                        appearance: "none",
                        display: "none",
                    },
                }}
            >
                {children}
            </Box>
        ),
        Courses: {
            Skeleton: () => {
                return (
                    <Skeleton
                        variant="rectangular"
                        animation="wave"
                        sx={{
                            position: "relative",
                            width: "max-content",
                            flex: 1,
                            minWidth: 100,
                            minHeight: 70,
                            borderRadius: "0.7rem",
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
                );
            },
            Free: () => {
                return (
                    <Box
                        sx={{
                            position: "relative",
                            width: "max-content",
                            flex: 1,
                            minWidth: 100,
                            borderRadius: "0.7rem",
                            border: 1,
                            minHeight: 70,
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
                    <Box
                        sx={{
                            ...Cells.MobileShared,
                            ...Cells.Presential,
                        }}
                    >
                        <Typography
                            fontSize={"0.9rem"}
                            fontWeight={800}
                            zIndex={10}
                            textAlign={"left"}
                            sx={{
                                color: "#fff",
                            }}
                            whiteSpace={"nowrap"}
                        >
                            {Former}
                        </Typography>
                        <Typography
                            whiteSpace={"nowrap"}
                            fontSize={"0.9rem"}
                            fontWeight={800}
                            zIndex={10}
                            width={"100%"}
                            textAlign={"left"}
                            sx={{
                                position: "relative",
                                backgroundColor: "#fff",
                                color: Cells.Presential.color,
                                borderRadius: "0.35rem",
                                padding: "0.25rem 0.5rem",
                                mixBlendMode: "screen",
                            }}
                        >
                            {Hall}
                        </Typography>
                    </Box>
                );
            },
            Online: ({ Former }: { Former: string }) => {
                return (
                    <Box
                        sx={{
                            ...Cells.MobileShared,
                            ...Cells.Online,
                        }}
                    >
                        <Typography
                            fontSize={"0.9rem"}
                            fontWeight={800}
                            zIndex={10}
                            textAlign={"left"}
                            whiteSpace={"nowrap"}
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
                            whiteSpace={"nowrap"}
                            sx={{
                                position: "relative",
                                backgroundColor: "#fff",
                                color: Cells.Online.color,
                                borderRadius: "0.35rem",
                                padding: "0.25rem 0.5rem",
                                mixBlendMode: "screen",
                            }}
                        >
                            {"En ligne"}
                        </Typography>
                    </Box>
                );
            },
            Absent: ({ Former }: { Former: string }) => {
                return (
                    <Box
                        sx={{
                            ...Cells.MobileShared,
                            ...Cells.Absent,
                        }}
                    >
                        <Typography
                            fontSize={"0.9rem"}
                            fontWeight={800}
                            zIndex={10}
                            textAlign={"left"}
                            whiteSpace={"nowrap"}
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
                            whiteSpace={"nowrap"}
                            sx={{
                                position: "relative",
                                backgroundColor: "#fff",
                                color: Cells.Absent.color,
                                borderRadius: "0.35rem",
                                padding: "0.25rem 0.5rem",
                                mixBlendMode: "screen",
                            }}
                        >
                            {"Absent"}
                        </Typography>
                    </Box>
                );
            },
        },
    },
};

export { Desktop, Mobile };
