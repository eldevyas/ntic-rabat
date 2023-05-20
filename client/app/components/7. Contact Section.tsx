"use client";

import React from "react";
import { DefaultButton, IconButton } from "@/app/core/Button";
import EmailIcon from "@mui/icons-material/Email";
import FaceIcon from "@mui/icons-material/Face";
import SendIcon from "@mui/icons-material/Send";
//
//
import "./style/7. Contact Section.scss";
import { Box, Typography } from "@mui/material";
//
//
const ContactSection = () => {
    return (
        <Box
            id="contact"
            sx={{
                position: "relative",
                width: "100%",
                gap: `${0.75 * 4}rem`,
                display: "flex",
                flexDirection: "column",
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
                    width: {
                        xs: "100%",
                        sm: "100%",
                        md: "100%",
                        lg: "50%",
                        xl: "50%",
                    },
                }}
            >
                <Typography
                    variant="h4"
                    color="text.primary"
                    textTransform={"capitalize"}
                    fontWeight={800}
                >
                    Contactez nous pour plus d'informations
                </Typography>
                <Typography
                    variant="body1"
                    color="text.secondary"
                    textTransform={"none"}
                    fontWeight={400}
                    sx={{ mb: "0rem" }}
                >
                    Besoin de plus d'informations? vous pouvez nous rendre
                    visite localement en utilisant notre carte de localisation
                    affichée.
                </Typography>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    borderRadius: "0.7rem",
                    overflow: "hidden",
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
                }}
            >
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d323.7034584353145!2d-6.87005800789305!3d33.961491198885135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7132d2a3728ab%3A0x22a9ca17b33c74ae!2sIsta%20Ntic!5e1!3m2!1sen!2sma!4v1672534338599!5m2!1sen!2sma"
                    width="600"
                    height="450"
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        border: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </Box>
        </Box>
    );
};

export default ContactSection;
