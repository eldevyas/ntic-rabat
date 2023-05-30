"use client";

import React from "react";
import { DefaultButton } from "@/app/core/Button";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";
import Image from "next/image";
import { useRouter } from "next/navigation";
//
//
import ImageSource from "@/public/assets/img/home/EspaceEquippe.webp";

// SCSS
import { Box, Button, Grid, Stack, Typography } from "@mui/material";

const EspaceEquippe = () => {
    const Router = useRouter();

    const handleScroll = () => {
        const targetId = "#LaPenseCreative";
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    return (
        <Box
            id="EspaceEquippe"
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
                    paddingTop: "5rem",
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
                        éspace Moderne
                    </Typography>
                    <Typography
                        variant="h4"
                        textTransform={"capitalize"}
                        fontWeight={800}
                        color={"text.primary"}
                    >
                        Un éspace de formation moderne et très bien équippé
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    color={"text.secondary"}
                    textTransform={"none"}
                    fontWeight={400}
                    sx={{ mb: "2rem" }}
                >
                    L&apos;ISTA de Hay Riad est doté des salles spécialisées
                    pour permettre un apprentissage efficace et dans les
                    meilleurs conditions. L&apos;école heberge plusieurs centres
                    de certification.
                </Typography>
                <Stack gap="0.75rem" direction={"row"} flexWrap={"wrap"}>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => Router.push("/auth/register")}
                        sx={{ whiteSpace: "nowrap" }}
                    >
                        S&apos;inscrire maintenant
                    </Button>
                    <Button
                        variant="outlined"
                        color="primary"
                        sx={{ whiteSpace: "nowrap" }}
                        onClick={handleScroll}
                    >
                        Lire Plus
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

export default EspaceEquippe;
