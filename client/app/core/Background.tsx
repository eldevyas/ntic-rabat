function VectorSVG(props: any) {
    // Ovale random svg shape that can be animated with motion
    return (
        <>
            {props.Variant == 1 && (
                <svg
                    width="535"
                    height="466"
                    viewBox="0 0 535 466"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M386.666 1.19218C262.26 -15.1815 77.5696 303.621 0.77514 465.069C154.362 444.811 471.271 398.131 510.208 373.474C558.88 342.653 542.173 21.6593 386.666 1.19218Z"
                        fill="white"
                    />
                </svg>
            )}
            {props.Variant == 2 && (
                <svg
                    width="474"
                    height="544"
                    viewBox="0 0 474 544"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M411.234 2.23469C286.828 -14.139 96.809 85.9598 20.0145 247.408C-91.2303 481.282 301.026 564.326 339.964 539.669C388.636 508.848 566.742 22.7018 411.234 2.23469Z"
                        fill="white"
                    />
                </svg>
            )}
            {props.Variant == 3 && (
                <svg
                    width="584"
                    height="284"
                    viewBox="0 0 584 284"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        opacity="0.5"
                        d="M564.881 15.7265C478.632 4.3749 67.5703 -34.2266 14.3301 77.7024C-62.7939 239.843 209.15 297.416 236.145 280.322C269.888 258.954 672.691 29.9159 564.881 15.7265Z"
                        fill="white"
                    />
                </svg>
            )}
        </>
    );
}

import { useState, useEffect } from "react";
import { Box, styled } from "@mui/material";

const Elipse = styled("div")({
    height: 0,
    position: "absolute",
    borderRadius: "100%",
    aspectRatio: "1/1",
    msFilter: "blur(5rem)",
    opacity: 0.5,
});

export default function Background() {
    const [opacity, setOpacity] = useState(0);

    useEffect(() => {
        function handleScroll() {
            const scrollPosition = window.pageYOffset;
            const windowHeight = window.innerHeight;
            const opacity = Math.max(
                0,
                Math.min(1, scrollPosition / (windowHeight - 100))
            );
            setOpacity(opacity);
        }
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <Box
                sx={{
                    position: "fixed",
                    width: "100%",
                    height: "100%",
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    zIndex: -1,
                    background: (theme) => theme.palette.background.default,
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        background: "transparent",
                        zIndex: -1,
                    }}
                >
                    <Elipse
                        sx={{
                            background: (theme) => theme.palette.primary.main,
                            width: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            paddingBottom: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            filter: "blur(5rem)",
                            top: {
                                xs: "20%",
                                sm: "20%",
                                md: "20%",
                                lg: "20%",
                                xl: "20%",
                            },
                            left: {
                                xs: "-5%",
                                sm: "-5%",
                                md: "-5%",
                                lg: "-5%",
                                xl: "-5%",
                            },
                            transform: "translate(0, 0)",
                        }}
                    />
                    <Elipse
                        sx={{
                            background: (theme) => theme.palette.primary.main,
                            width: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            paddingBottom: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            filter: "blur(5rem)",
                            top: {
                                xs: "50%",
                                sm: "50%",
                                md: "50%",
                                lg: "50%",
                                xl: "50%",
                            },
                            right: {
                                xs: "-5%",
                                sm: "-5%",
                                md: "-5%",
                                lg: "-5%",
                                xl: "-5%",
                            },
                            transform: "translate(0, 0)",
                        }}
                    />
                    <Elipse
                        sx={{
                            background: (theme) => theme.palette.primary.main,
                            width: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            paddingBottom: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            filter: "blur(5rem)",
                            top: {
                                xs: "80%",
                                sm: "80%",
                                md: "80%",
                                lg: "80%",
                                xl: "80%",
                            },
                            left: {
                                xs: "30%",
                                sm: "30%",
                                md: "30%",
                                lg: "30%",
                                xl: "30%",
                            },
                            transform: "translate(0, 0)",
                        }}
                    />
                    <Elipse
                        sx={{
                            background: (theme) => theme.palette.primary.main,
                            width: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            paddingBottom: {
                                xs: "25vh",
                                sm: "25vh",
                                md: "50vh",
                                lg: "50vh",
                                xl: "50vh",
                            },
                            filter: "blur(5rem)",
                            top: {
                                xs: "-20%",
                                sm: "-20%",
                                md: "-20%",
                                lg: "-20%",
                                xl: "-20%",
                            },
                            right: {
                                xs: "15%",
                                sm: "15%",
                                md: "15%",
                                lg: "15%",
                                xl: "15%",
                            },
                            transform: "translate(0, 0)",
                        }}
                    />
                </Box>
                <Box
                    sx={{
                        position: "absolute",
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        background: "transparent",
                        zIndex: -1,
                        svg: {
                            position: "absolute",
                            maxWidth: "100%",
                            maxHeight: "100%",
                            aspectRatio: "1/1",
                            fill: (theme) => theme.palette.background.default,
                            filter: (theme) =>
                                `drop-shadow(0 -6mm 4mm ${theme.palette.background.default})`,
                            path: {
                                fill: (theme) =>
                                    theme.palette.background.default,
                            },
                            width: "50vh",
                            height: "auto",
                            "&:nth-child(1)": {
                                width: {
                                    xs: "75vh",
                                    sm: "75vh",
                                    md: "75vh",
                                    lg: "50vh",
                                    xl: "50vh",
                                },
                                top: {
                                    xs: "70%",
                                    sm: "70%",
                                    md: "70%",
                                    lg: "70%",
                                    xl: "70%",
                                },
                                left: {
                                    xs: "-25%",
                                    sm: "-25%",
                                    md: "-15%",
                                    lg: "-5%",
                                    xl: "-5%",
                                },
                                transform: "translate(0, 0)",
                            },
                            "&:nth-child(2)": {
                                width: {
                                    xs: "75vh",
                                    sm: "75vh",
                                    md: "75vh",
                                    lg: "60vh",
                                    xl: "60vh",
                                },
                                top: {
                                    xs: "15%",
                                    sm: "15%",
                                    md: "15%",
                                    lg: "50%",
                                    xl: "50%",
                                },
                                right: {
                                    xs: "30%",
                                    sm: "30%",
                                    md: "30%",
                                    lg: "5%",
                                    xl: "5%",
                                },
                                transform: "translate(0, 0)",
                            },
                            "&:nth-child(3)": {
                                width: {
                                    xs: "75vh",
                                    sm: "75vh",
                                    md: "75vh",
                                    lg: "75vh",
                                    xl: "75vh",
                                },
                                top: {
                                    xs: "-20%",
                                    sm: "-20%",
                                    md: "-20%",
                                    lg: "-20%",
                                    xl: "-20%",
                                },
                                left: {
                                    xs: "50%",
                                    sm: "50%",
                                    md: "50%",
                                    lg: "50%",
                                    xl: "50%",
                                },
                                transform: "translate(0, 0)",
                            },
                        },
                    }}
                >
                    <VectorSVG Variant={1} />
                    <VectorSVG Variant={2} />
                    <VectorSVG Variant={3} />
                </Box>

                <Box
                    sx={{
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        backgroundColor: (theme) =>
                            theme.palette.background.default,
                        top: 0,
                        left: 0,
                        opacity: opacity,
                        pointerEvents: opacity > 0 ? "auto" : "none",
                        backdropFilter: "blur(5rem)",
                        zIndex: 0,
                        willChange: "opacity",
                        transition: "opacity .2s ease",
                    }}
                ></Box>
            </Box>
        </>
    );
}
