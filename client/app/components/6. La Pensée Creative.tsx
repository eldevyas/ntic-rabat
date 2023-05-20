"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Box, Typography, Stack } from "@mui/material";
import ImageSource from "@/public/assets/img/home/LaPenseCreative.jpg";

const LaPenseCreative = () => {
    const Router = useRouter();
    return (
        <Box
            id="LaPenseCreative"
            sx={{
                position: "relative",
                width: "100%",
                gap: "0.75rem",
                display: "flex",
                flexDirection: {
                    xs: "column-reverse",
                    md: "column-reverse",
                    lg: "row-reverse",
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
                        color="primary"
                        textTransform={"uppercase"}
                        fontWeight={800}
                    >
                        La pensée créative
                    </Typography>
                    <Typography
                        variant="h4"
                        color="text.primary"
                        textTransform={"capitalize"}
                        fontWeight={800}
                    >
                        La créativité, l&apos;invention, la passion, et la
                        persévérance, sont les qualités de nos stagiaires
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    textTransform={"none"}
                    fontWeight={400}
                    sx={{ mb: "0rem" }}
                >
                    Tous les stagiaires de l&apos;institut obtiennent de bonnes
                    notes, en raison de leur persévérance et de leur créativité
                    dans leur travail, ils font de leur mieux dans le domaine du
                    monde professionnel. Vous êtes une entreprise à la recherche
                    de bons employés pour votre entreprise?
                </Typography>
                <Stack gap="0.75rem" direction={"row"} flexWrap={"wrap"}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => Router.push("/#contact")}
                        sx={{ whiteSpace: "nowrap" }}
                    >
                        Contactez nous
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ whiteSpace: "nowrap" }}
                        onClick={() => Router.push("/#contact")}
                    >
                        Faites une visite à l'institut
                    </Button>
                </Stack>
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
                    borderColor: "primary.main",
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
    );
};

export default LaPenseCreative;
