"use client";

import React from "react";
import { Box, Button, Typography } from "@mui/material";
import ModelTrainingIcon from "@mui/icons-material/ModelTraining";
import WorkIcon from "@mui/icons-material/Work";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
//
//
//
//
const CertificatPuissant = () => {
    return (
        <Box
            id="CertificatPuissant"
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
                    justifyContent: "flex-end",
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
                        Certificat Puissant
                    </Typography>
                    <Typography
                        variant="h4"
                        color={"text.primary"}
                        textTransform={"capitalize"}
                        fontWeight={800}
                    >
                        Un taux d&apos;insertion élevé dans le monde
                        professionnel
                    </Typography>
                </Box>
                <Typography
                    variant="body1"
                    color={"text.secondary"}
                    textTransform={"none"}
                    fontWeight={400}
                    sx={{ mb: "0rem" }}
                >
                    L&apos;un des facteurs de succés de notre établissement est
                    la facilité d&apos;insertion des lauréats dans
                    l&apos;entreprise. Ceci est rendu possible à travers:
                </Typography>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ModelTrainingIcon />}
                    sx={{
                        cursor: "default",
                    }}
                >
                    Formation altérnée
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<WorkIcon />}
                    sx={{
                        cursor: "default",
                    }}
                >
                    Stage de fin d&apos;études
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    startIcon={<ApartmentIcon />}
                    sx={{
                        cursor: "default",
                    }}
                >
                    Partenariats avec les professionnels
                </Button>
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
                        md: null,
                        lg: null,
                        xl: null,
                    },
                    minWidth: {
                        xs: "100%",
                        sm: "100%",
                        md: null,
                        lg: null,
                        xl: null,
                    },
                }}
            >
                <Image
                    alt=""
                    src="/assets/img/Table.png"
                    fill
                    className="Image"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        objectPosition: "center bottom",
                    }}
                />
            </Box>
        </Box>
    );
};

export default CertificatPuissant;
