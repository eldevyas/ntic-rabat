"use client";

import React from "react";
import Gallery from "@/app/components/base/B. Gallery";
import Link from "next/link";
import { ShieldDone, Edit, Heart2, Work, ArrowDownSquare } from "react-iconly";
import { Box, Button, Grid, Typography, useTheme } from "@mui/material";

const Cards: {
    title: string;
    description: string;
    icon: any;
    href?: string;
    color: string;
}[] = [
    {
        title: "Se détendre et apprendre",
        description:
            "Nous offrons à nos stagiaires un espace relaxant pour se concentrer et apprendre, en veillant à ce qu'ils se sentent à l'aise pendant leur période de formation.",
        icon: ShieldDone,
        href: "#EspaceEquippe",
        color: "black",
    },
    {
        title: "La pensée créative",
        description:
            "Tous nos stagiaires font de bonnes notes, en raison de leur discipline d'apprentissage et de leur créativité de travail. Ils ont fait de notre institut une bonne communauté.",
        icon: Edit,
        href: "#LaPenseCreative",
        color: "primary",
    },
    {
        title: "Certificat puissant",
        description:
            "Ce qui rend notre institut si puissant, c'est le fait que nous avons la main sur de nombreuses entreprises et que nous avons des niveaux élevés d'insertions sur le marché du travail.",
        icon: Work,
        href: "#CertificatPuissant",
        color: "secondary",
    },
    {
        title: "Des bons formateurs",
        description:
            "Nous amenons les meilleurs formateurs dans nos salles de classe, ils établissent une bonne relation avec les stagiaires et ils leur envoient les informations de manière cool.",
        icon: Heart2,
        href: "#FormateursProfessionnels",
        color: "white",
    },
];

const Card = (Props: {
    title: string;
    description: string;
    icon: any;
    href?: string;
    color: string;
}) => {
    const theme = useTheme();
    // 4adi ydeer scroll bla maykhelli l ID fel'URL
    const handleScroll = (
        e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
    ) => {
        // first prevent the default behavior
        e.preventDefault();
        // get the href and remove everything before the hash (#)
        const href = e.currentTarget.href;
        const targetId = href.replace(/.*\#/, "");
        // get the element by id and use scrollIntoView
        const elem = document.getElementById(targetId);
        elem?.scrollIntoView({
            behavior: "smooth",
        });
    };

    const PrimaryColor =
        Props.color == "black"
            ? `primary.main`
            : Props.color == "white"
            ? theme.palette.mode == "dark"
                ? `${Props.color}.main`
                : `${Props.color}.contrastText`
            : `${Props.color}.main`;

    const BackgroundColor =
        Props.color == "black"
            ? `#000`
            : Props.color == "white"
            ? theme.palette.mode == "light"
                ? `#fff`
                : "#000"
            : `${Props.color}.light`;

    return (
        <Box
            sx={{
                padding: "2rem",
                borderRadius: "0.7rem",
                backgroundColor: BackgroundColor,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                gap: "1rem",
                userSelect: "none",
                border: 1,
                borderColor: PrimaryColor,
            }}
        >
            <Box
                sx={{
                    position: "relative",
                    minWidth: "50px",
                    minHeight: "50px",
                    maxWidth: "75px",
                    width: "auto",
                    height: "auto",
                    aspectRatio: "1/1",
                    backgroundColor: PrimaryColor,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "0.5rem",
                    borderRadius: `${0.75 / 2}rem`,
                }}
            >
                <Props.icon
                    set="bulk"
                    color={
                        Props.color == "black"
                            ? `#fff`
                            : Props.color == "white"
                            ? theme.palette.mode == "dark"
                                ? `#000`
                                : `#fff`
                            : `#fff`
                    }
                    size="xlarge"
                />
            </Box>
            <Typography variant="h5" fontWeight={600} color={PrimaryColor}>
                {Props.title}
            </Typography>
            <Typography
                variant="body2"
                fontWeight={500}
                color={PrimaryColor}
                sx={{
                    opacity: 0.75,
                }}
            >
                {Props.description}
            </Typography>
            <Link
                href={Props.href as string}
                onClick={handleScroll}
                style={{ width: "100%" }}
            >
                <Button
                    sx={{
                        width: "100%",
                        padding: "0.75rem 0.75rem",
                        transition: "all 0.3s ease",
                        display: "flex",
                        flexDirectiion: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        borderRadius: `${0.75 / 2}rem`,
                        fontSize: "0.85rem",
                        color:
                            Props.color == "black"
                                ? `primary.main`
                                : Props.color == "white"
                                ? theme.palette.mode == "light"
                                    ? "black"
                                    : `white.main`
                                : `${Props.color}.main`,
                        background: "none !important",
                    }}
                    variant="outlined"
                    color={
                        Props.color == "black"
                            ? "primary"
                            : Props.color == "white"
                            ? theme.palette.mode == "light"
                                ? "black"
                                : "white"
                            : (Props.color as any)
                    }
                    endIcon={
                        <ArrowDownSquare
                            set="bulk"
                            primaryColor={
                                Props.color == "black"
                                    ? `var(--mui-palette-primary-main)`
                                    : Props.color == "white"
                                    ? theme.palette.mode == "dark"
                                        ? `#fff`
                                        : `#000`
                                    : `var(--nextui-colors-${Props.color})`
                            }
                        />
                    }
                >
                    Lire Plus
                </Button>
            </Link>
        </Box>
    );
};

const Service = () => {
    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                gap: "2rem",
                padding: "1rem 2rem",
                minWidth: "100vw",
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
                }}
            >
                <Typography
                    variant="subtitle1"
                    color="secondary"
                    textTransform={"uppercase"}
                    fontWeight={800}
                >
                    COMMENT ÇA MARCHE
                </Typography>
                <Typography
                    variant="h4"
                    color={"text.primary"}
                    textTransform={"capitalize"}
                    fontWeight={800}
                >
                    Comment est notre service?
                </Typography>
            </Box>
            <Grid
                container
                spacing={"0.75rem"}
                columns={16}
                justifyContent="center"
                alignItems="stretch"
            >
                {" "}
                {Cards.map((card, index) => {
                    return (
                        <Grid key={index} item xs={16} md={8} lg={4} xl={4}>
                            <Card {...card} key={index} />
                        </Grid>
                    );
                })}
            </Grid>
            {/* <Gallery /> */}
        </Box>
    );
};

export default Service;
