"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function ErrorPage({
    Error,
    Reset,
}: {
    Error: Error;
    Reset: () => void;
}) {
    const Router = useRouter();
    return (
        <Box
            sx={{
                position: "relative",
                width: "100%",
                height: "100%",
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "2rem 1rem",
                background: (theme) => theme.palette.background.default,
            }}
        >
            <Box>
                <svg
                    width="300"
                    height="300"
                    viewBox="0 0 300 300"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M149.5 271C216.879 271 271.5 216.603 271.5 149.5C271.5 82.3974 216.879 28 149.5 28C82.1213 28 27.5 82.3974 27.5 149.5C27.5 216.603 82.1213 271 149.5 271Z"
                        fill="url(#paint0_linear_1216_4905)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M247.005 95.2009C251.132 92.1732 252.023 86.3731 248.996 82.2461C245.968 78.1191 240.168 77.2279 236.041 80.2557C231.914 83.2834 231.023 89.0835 234.05 93.2105C235.918 95.7559 238.84 97.0703 241.773 96.9936C241.983 96.9704 242.2 96.9572 242.421 96.954C244.026 96.7993 245.611 96.2237 247.005 95.2009ZM204.674 97.7029C213.824 99.7404 222.144 101.012 230.505 99.8768C229.705 99.1499 228.966 98.3327 228.302 97.4275C222.945 90.1259 224.522 79.8643 231.824 74.5075C239.126 69.1508 249.387 70.7274 254.744 78.029C257.53 81.8274 258.441 86.4267 257.645 90.7199C264.257 86.9804 270.143 82.2562 274.715 76.2153C275.904 74.6455 278.13 74.3878 279.689 75.6397C281.248 76.8915 281.548 79.179 280.36 80.7488C272.104 91.656 260.571 98.0459 248.688 102.48C247.002 103.301 245.22 103.81 243.42 104.018C229.961 108.898 216.075 107.721 203.102 104.832C201.197 104.408 200.005 102.468 200.439 100.5C200.873 98.5309 202.769 97.2787 204.674 97.7029Z"
                        fill="black"
                    />
                    <path
                        d="M221 97.5002C221 74.0281 201.972 55.0002 178.5 55.0002H138V140H178.5C201.972 140 221 120.972 221 97.5002Z"
                        fill="url(#paint1_linear_1216_4905)"
                    />
                    <path
                        d="M173.408 124.556C167.387 136.231 157.307 143.876 145.895 143.876H134.872C116.419 143.876 101.456 123.883 101.456 99.228C101.456 74.5733 116.419 54.5872 134.872 54.5803H145.93C157.342 54.5803 167.435 62.2112 173.443 73.9004C177.315 81.7795 179.329 90.4418 179.329 99.2211C179.329 108 177.315 116.663 173.443 124.542L173.408 124.556Z"
                        fill="#011625"
                    />
                    <path
                        d="M162.26 124.556C156.253 136.21 146.194 143.848 134.803 143.876C116.364 143.876 101.421 123.869 101.421 99.2281C101.421 74.5872 116.364 54.6082 134.803 54.5804C146.194 54.5804 156.253 62.2113 162.26 73.9005C166.138 81.7782 168.154 90.4411 168.154 99.2212C168.154 108.001 166.138 116.664 162.26 124.542V124.556Z"
                        fill="#E1DCEB"
                    />
                    <path
                        d="M135.802 107.46C134.176 104.54 131.452 102.627 128.368 102.62C123.375 102.62 119.33 107.632 119.33 113.805C119.33 119.978 123.375 124.983 128.368 124.99C131.452 124.99 134.176 123.079 135.802 120.15C136.852 118.177 137.398 116.006 137.398 113.807C137.398 111.607 136.852 109.437 135.802 107.463V107.46Z"
                        fill="white"
                    />
                    <path
                        d="M135.802 77.3457C134.176 74.426 131.452 72.5126 128.368 72.5056C123.375 72.5056 119.33 77.5178 119.33 83.6909C119.33 89.864 123.375 94.8692 128.368 94.8761C131.452 94.8761 134.176 92.9644 135.802 90.036C136.852 88.0625 137.398 85.8922 137.398 83.6926C137.398 81.493 136.852 79.3228 135.802 77.3492V77.3457Z"
                        fill="white"
                    />
                    <path
                        d="M98 114.475C98 118.631 101.369 122 105.525 122H127C131.418 122 135 118.419 135 114C135 109.582 131.418 106 127 106H105.525C101.369 106 98 109.369 98 113.526V114.475Z"
                        fill="var(--nextui-colors-error)"
                    />
                    <path
                        d="M98 83.5002C98 87.6424 101.358 91.0002 105.5 91.0002H127.5C131.642 91.0002 135 87.6424 135 83.5002C135 79.3581 131.642 76.0002 127.5 76.0002H105.5C101.358 76.0002 98 79.3581 98 83.5002Z"
                        fill="var(--nextui-colors-error)"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M158.852 137.179H179.337V140.179H158.852V137.179Z"
                        fill="#011625"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M27.3569 201.844C44.6521 191.459 64.2449 189.482 83.0038 190.103C85.6842 190.192 87.7852 192.437 87.6964 195.117C87.6075 197.798 85.3626 199.899 82.6822 199.81C64.6788 199.213 47.3041 201.195 32.3567 210.171C30.0574 211.551 27.0743 210.807 25.6936 208.507C24.313 206.208 25.0576 203.225 27.3569 201.844Z"
                        fill="#011625"
                    />
                    <path
                        d="M69 195C69 171.804 87.804 153 111 153H152V237H111C87.804 237 69 218.196 69 195Z"
                        fill="url(#paint2_linear_1216_4905)"
                    />
                    <path
                        d="M109.962 222.685C115.99 234.361 126.07 242.005 137.481 242.005H148.539C166.992 242.005 181.956 222.012 181.956 197.358C181.956 172.703 166.992 152.717 148.539 152.71H137.481C126.07 152.71 115.976 160.341 109.962 172.03C106.02 179.887 104.002 188.568 104.072 197.358C104.002 206.147 106.02 214.828 109.962 222.685Z"
                        fill="#011625"
                    />
                    <path
                        d="M121.109 222.685C127.123 234.34 137.175 241.978 148.573 242.005C167.012 242.005 181.955 221.999 181.955 197.358C181.955 172.717 167.012 152.738 148.573 152.717C137.175 152.717 127.123 160.348 121.109 172.03C117.167 179.887 115.149 188.568 115.219 197.358C115.149 206.147 117.167 214.828 121.109 222.685Z"
                        fill="#E1DCEB"
                    />
                    <path
                        d="M151.595 203.287C156.109 203.287 159.769 208.102 159.769 214.042C159.769 219.982 156.109 224.797 151.595 224.797C147.08 224.797 143.421 219.982 143.421 214.042C143.421 208.102 147.08 203.287 151.595 203.287Z"
                        fill="white"
                    />
                    <path
                        d="M151.595 168.871C156.109 168.871 159.769 173.686 159.769 179.626C159.769 185.566 156.109 190.381 151.595 190.381C147.08 190.381 143.421 185.566 143.421 179.626C143.421 173.686 147.08 168.871 151.595 168.871Z"
                        fill="white"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M107.099 234.216H124.35V237.216H107.099V234.216Z"
                        fill="#011625"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M238.072 40.503C239.378 35.2086 239.293 30.1102 239.449 24.74C239.48 23.6912 238.653 22.8193 237.605 22.7877C236.555 22.7561 235.679 23.5838 235.648 24.6326C235.5 29.7247 235.62 34.5705 234.381 39.5995C234.13 40.6167 234.754 41.6465 235.773 41.8929C236.791 42.1456 237.822 41.5202 238.072 40.503Z"
                        fill="#011625"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M249.168 50.7631C258.027 42.6889 266.375 32.3024 272.21 21.8148C272.719 20.8987 272.387 19.7425 271.47 19.2371C270.552 18.7316 269.394 19.0602 268.885 19.9763C263.243 30.1164 255.17 40.1618 246.603 47.9644C245.828 48.672 245.774 49.8724 246.482 50.6431C247.19 51.4139 248.393 51.4707 249.168 50.7631Z"
                        fill="#011625"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M251.412 59.5829C259.515 60.916 267.867 58.6416 275.235 55.4258C276.197 55.0025 276.635 53.8843 276.215 52.9303C275.794 51.97 274.672 51.534 273.711 51.951C267 54.8825 259.411 57.0558 252.031 55.8428C250.996 55.6722 250.017 56.3735 249.846 57.4033C249.675 58.4331 250.377 59.4123 251.412 59.5829Z"
                        fill="#011625"
                    />
                    <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M28.1483 252.552C29.3028 252.141 30.5177 251.594 31.4546 250.802C32.5673 249.862 33.0198 248.651 33.3237 247.377C33.7138 245.739 33.8697 243.995 34.3428 242.355C34.5179 241.746 34.855 241.515 34.9997 241.413C35.3653 241.155 35.7348 241.086 36.0825 241.112C36.4945 241.142 37.0605 241.298 37.4327 241.988C37.4858 242.087 37.5548 242.238 37.6012 242.444C37.6351 242.596 37.657 243.069 37.6928 243.264C37.7824 243.744 37.8573 244.224 37.9277 244.708C38.1619 246.315 38.2966 247.681 39.0364 249.158C40.0403 251.163 41.0462 252.39 42.4103 252.933C43.7294 253.458 45.3065 253.36 47.3215 252.948C47.5133 252.901 47.703 252.861 47.8908 252.829C48.7792 252.674 49.6285 253.257 49.803 254.142C49.9775 255.026 49.4129 255.888 48.5324 256.083C48.3486 256.123 48.1675 256.162 47.9884 256.197C45.2653 256.871 42.113 259.277 40.2811 261.383C39.7165 262.033 38.8898 263.849 38.0465 265.007C37.4241 265.862 36.7247 266.425 36.1376 266.624C35.7441 266.758 35.4124 266.738 35.1383 266.67C34.7402 266.572 34.4098 266.356 34.1564 266.013C34.0184 265.825 33.8903 265.574 33.8292 265.253C33.8 265.098 33.7967 264.705 33.7974 264.528C33.6255 263.936 33.4152 263.359 33.2619 262.763C32.8964 261.339 32.1791 260.438 31.3272 259.248C30.5303 258.134 29.6744 257.434 28.4197 256.875C28.2565 256.836 26.9395 256.513 26.4743 256.328C25.7949 256.057 25.4711 255.602 25.3537 255.357C25.154 254.942 25.1334 254.579 25.1732 254.277C25.2323 253.83 25.4326 253.448 25.7883 253.139C26.0086 252.948 26.3377 252.761 26.7782 252.67C27.1186 252.599 28.0216 252.558 28.1483 252.552ZM35.8748 250.232C35.9358 250.368 36.0009 250.505 36.0699 250.643C37.5402 253.58 39.1844 255.219 41.1828 256.015L41.2498 256.041C39.9129 257.033 38.7026 258.143 37.7777 259.206C37.3969 259.644 36.8926 260.554 36.3479 261.487C35.8529 259.878 35.0434 258.741 34.0256 257.317C33.248 256.231 32.4332 255.414 31.432 254.748C32.209 254.349 32.9501 253.882 33.5957 253.336C34.6706 252.428 35.3812 251.376 35.8748 250.232Z"
                        fill="var(--mui-palette-primary-main)"
                    />
                    <defs>
                        <linearGradient
                            id="paint0_linear_1216_4905"
                            x1="148.56"
                            y1="-11.5634"
                            x2="151.038"
                            y2="415.126"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F2F2F2" />
                            <stop offset="1" stop-color="#EFEFEF" />
                        </linearGradient>
                        <linearGradient
                            id="paint1_linear_1216_4905"
                            x1="221"
                            y1="54.8638"
                            x2="135.856"
                            y2="121.38"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#E1DCEB" />
                            <stop offset="1" stop-color="#B3AFBA" />
                        </linearGradient>
                        <linearGradient
                            id="paint2_linear_1216_4905"
                            x1="69"
                            y1="152.865"
                            x2="153.378"
                            y2="219.568"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#E1DCEB" />
                            <stop offset="1" stop-color="#B3AFBA" />
                        </linearGradient>
                    </defs>
                </svg>
            </Box>
            <Box
                sx={{
                    position: "relative",
                    width: "100%",
                    maxWidth: 350,
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "1rem",
                }}
            >
                <Typography
                    textAlign={"center"}
                    fontWeight={"bold"}
                    variant="h5"
                    color="error"
                    gutterBottom
                >
                    Une erreur est survenue.
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    <Typography
                        textAlign={"center"}
                        fontWeight={"medium"}
                        variant="body1"
                    >
                        Nous sommes désolés, mais une erreur s'est produite lors
                        du traitement de votre demande. Veuillez réessayer
                        ultérieurement.
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        fontWeight={"medium"}
                        variant="body1"
                        gutterBottom
                    >
                        Si le problème persiste, veuillez contacter notre équipe
                        d'assistance technique pour obtenir de l'aide. Merci de
                        votre compréhension.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: "0.5rem",
                        flexWrap: "wrap",
                    }}
                >
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            Reset();
                        }}
                    >
                        Réessayer
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}