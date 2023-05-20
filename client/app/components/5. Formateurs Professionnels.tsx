"use client";

import React from "react";
import Image from "next/image";
//
//
import { Box, Typography } from "@mui/material";
import ImageSource from "@/public/assets/img/home/FormateursProfessionnels.jpg";

//
//
const FormateursProfessionnels = () => {
    return (
        <>
            <Box
                id="FormateursProfessionnels"
                sx={{
                    position: "relative",
                    width: "100%",
                    gap: "0.75rem",
                    display: "flex",
                    flexDirection: {
                        xs: "column-reverse",
                        md: "column-reverse",
                        lg: "row",
                    },
                    justifyContent: {
                        xs: "center",
                        md: "center",
                        lg: "space-between",
                    },
                    alignItems: {
                        xs: "center",
                        md: "center",
                        lg: "stretch",
                    },
                    padding: "1rem 2rem",
                    height: { xs: "100%" },
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        padding: 0,
                        gap: "0.75rem",
                        flex: 1,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "flex-start",
                            width: "100%",
                            gap: "1rem",
                            mb: "0.75rem",
                        }}
                    >
                        <Typography
                            variant="subtitle1"
                            color="secondary"
                            textTransform={"uppercase"}
                            fontWeight={800}
                        >
                            Formateurs professionnels
                        </Typography>
                        <Typography
                            variant="h4"
                            color="text.primary"
                            textTransform={"capitalize"}
                            fontWeight={800}
                        >
                            Nos formateurs passionnés jouent un rôle dans la
                            réussite de nos stagiaires
                        </Typography>
                    </Box>
                    <Typography
                        variant="body1"
                        color="text.secondary"
                        textTransform={"none"}
                        fontWeight={400}
                        sx={{ mb: "0rem" }}
                    >
                        Nous avons amené les meilleurs formateurs dans notre
                        institut, non seulement pour améliorer la qualité de
                        l&apos;enseignement, mais aussi la qualité de
                        l&apos;apprentissage des stagiaires. La façon dont
                        l&apos;information leur est envoyée est la clé de leur
                        compréhension et de leur amour pour leur domaine de
                        travail.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        borderRadius: "0.7rem",
                        overflow: "hidden",
                        flex: 1,
                        minHeight: {
                            xs: 250,
                            sm: 250,
                            md: 350,
                            lg: 400,
                            xl: 450,
                        },
                        minWidth: {
                            xs: "100%",
                            sm: "100%",
                            md: null,
                            lg: null,
                            xl: null,
                        },
                        border: 1,
                        borderColor: "secondary.main",
                        paddingTop: "2rem",
                    }}
                >
                    <Image
                        fill
                        alt=""
                        style={{
                            objectFit: "cover",
                        }}
                        placeholder="blur"
                        src={ImageSource}
                    />
                </Box>
            </Box>
        </>
    );
};

export default FormateursProfessionnels;
