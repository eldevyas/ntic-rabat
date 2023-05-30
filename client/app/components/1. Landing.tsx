"use client";

import React from "react";
import GroupsOutlinedIcon from "@mui/icons-material/GroupsOutlined";
import { useRouter } from "next/navigation";
import SelectGroup from "@/app/components/base/A. Select Group";
import Announces from "@/app/components/base/C. Announces";
import { Button, Box, Typography, styled, Grid } from "@mui/material";
import { useSpring, animated } from "react-spring";
import { People } from "react-iconly";
// SCSS

const DefaultCard = styled("div")(({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor:
        theme.palette.mode == "light" ? theme.palette.primary.light : `#000`,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    userSelect: "none",
    transition: "all .15s ease",
    border: 1,
    borderColor: "primary.main",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.light,
    },
}));

const SpecialCard = styled("div")(({ theme }) => ({
    color: "white",
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    userSelect: "none",
    transition: "all .15s ease",
    border: 1,
    borderColor: "primary.main",
    "&:hover": {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.primary.light,
    },
}));

function Number({ n }: any) {
    const { number }: any = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    });

    return (
        <animated.span>{number.to((n: number) => n.toFixed(0))}</animated.span>
    );
}

export default function Landing() {
    const Router = useRouter();

    return (
        <Box
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: "80vh",
                flexDirection: "column",
                width: "100%",
                gap: "2rem",
                padding: "1rem 2rem",
            }}
        >
            <Box
                sx={{
                    width: {
                        xs: "100%", // theme.breakpoints.up('xs')
                        sm: "100%", // theme.breakpoints.up('sm')
                        md: "75%", // theme.breakpoints.up('md')
                        lg: "75%", // theme.breakpoints.up('lg')
                        xl: "50%", // theme.breakpoints.up('xl')
                    },
                }}
            >
                <Typography
                    variant="h3"
                    component="h2"
                    align="center"
                    fontWeight={800}
                    gutterBottom
                    color={"text.primary"}
                >
                    Institut Spécialisée de Technologies Appliquées
                    <Box sx={{ color: "secondary.main" }} component={"span"}>
                        {" "}
                        NTIC Rabat
                    </Box>
                </Typography>
                <Typography
                    variant="subtitle1"
                    align="center"
                    fontWeight={400}
                    color={"text.secondary"}
                >
                    Depuis son ouverture en 2007, l&apos;ISTA NTIC Hay Riad a
                    formé plus de 3 600 techniciens dans les secteurs
                    Informatiques.
                </Typography>
            </Box>
            <Grid
                container
                spacing={"0.75rem"}
                columns={16}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <SelectGroup />
                </Grid>
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <Button
                        startIcon={
                            <People
                                set="bulk"
                                primaryColor="var(--nextui-colors-primary)"
                            />
                        }
                        variant={"outlined"}
                        color={"primary"}
                        onClick={() => {
                            Router.push(`/connect`);
                        }}
                        sx={{ width: "100%" }}
                    >
                        Consultez NTIC Connect
                    </Button>
                </Grid>
            </Grid>
            <Announces />
            <Grid
                container
                spacing={"0.75rem"}
                columns={16}
                justifyContent="center"
                alignItems="center"
            >
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <DefaultCard
                        sx={{ border: 1, borderColor: "primary.main" }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight={800}
                            gutterBottom
                            color={"inherit"}
                        >
                            {"+"}
                            <Number n={30} />
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            fontWeight={400}
                            color={"inherit"}
                        >
                            Formateurs Certifiés
                        </Typography>
                    </DefaultCard>
                </Grid>
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <DefaultCard
                        sx={{ border: 1, borderColor: "primary.main" }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight={800}
                            gutterBottom
                            color={"inherit"}
                        >
                            {"+"}
                            <Number n={5400} />
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            fontWeight={400}
                            color={"inherit"}
                        >
                            Techniciens spécialisés
                        </Typography>
                    </DefaultCard>
                </Grid>
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <DefaultCard
                        sx={{
                            border: 1,
                            borderColor: "primary.main",
                        }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight={800}
                            gutterBottom
                            color={"inherit"}
                        >
                            +<Number n={12} />
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            fontWeight={400}
                            color={"inherit"}
                        >
                            Formations
                        </Typography>
                    </DefaultCard>
                </Grid>
                <Grid item xs={16} md={8} lg={4} xl={4}>
                    <SpecialCard
                        sx={{ border: 1, borderColor: "primary.light" }}
                    >
                        <Typography
                            variant="h4"
                            align="center"
                            fontWeight={800}
                            gutterBottom
                            color={"inherit"}
                        >
                            <Number n={2005} />
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            fontWeight={400}
                            color={"inherit"}
                        >
                            Ouvert à enseigner depuis
                        </Typography>
                    </SpecialCard>
                </Grid>
            </Grid>
        </Box>
    );
}
