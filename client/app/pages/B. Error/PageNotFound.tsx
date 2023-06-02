"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function PageNotFound() {
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
                    <g clip-path="url(#clip0_1216_4916)">
                        <path
                            d="M150 269C216.274 269 270 215.274 270 149C270 82.7258 216.274 29 150 29C83.7258 29 30 82.7258 30 149C30 215.274 83.7258 269 150 269Z"
                            fill="url(#paint0_linear_1216_4916)"
                        />
                        <g filter="url(#filter0_d_1216_4916)">
                            <rect
                                x="89"
                                y="63.5564"
                                width="124.537"
                                height="155.029"
                                rx="16"
                                fill="white"
                            />
                        </g>
                        <rect
                            x="100"
                            y="83.5564"
                            width="50"
                            height="9.8"
                            rx="4.9"
                            fill="#011625"
                        />
                        <rect
                            x="100"
                            y="111.356"
                            width="100"
                            height="9.8"
                            rx="4.9"
                            fill="#D5D5D5"
                        />
                        <rect
                            x="100"
                            y="139.156"
                            width="100"
                            height="9.8"
                            rx="4.9"
                            fill="#D5D5D5"
                        />
                        <rect
                            x="100"
                            y="166.956"
                            width="100"
                            height="9.8"
                            rx="4.9"
                            fill="#D5D5D5"
                        />
                        <rect
                            x="100"
                            y="194.756"
                            width="100"
                            height="9.8"
                            rx="4.9"
                            fill="#D5D5D5"
                        />
                        <g filter="url(#filter1_d_1216_4916)">
                            <path
                                d="M288.15 46.424H228.069C225.27 46.424 223 48.8125 223 51.7589V81.478C223 84.4244 225.27 86.8129 228.069 86.8129H288.15C290.949 86.8129 293.219 84.4244 293.219 81.478V51.7589C293.219 48.8125 290.949 46.424 288.15 46.424Z"
                                fill="white"
                            />
                        </g>
                        <path
                            d="M238 73C241.314 73 244 70.3137 244 67C244 63.6863 241.314 61 238 61C234.686 61 232 63.6863 232 67C232 70.3137 234.686 73 238 73Z"
                            fill="#CCC6D9"
                        />
                        <rect
                            x="252"
                            y="61"
                            width="32"
                            height="12"
                            rx="6"
                            fill="#D5D5D5"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M185.11 225.563C197.99 225.563 209.959 221.667 219.905 214.989L260.605 253.841L275.365 236.716L236.092 199.226C243.345 189.018 247.61 176.539 247.61 163.063C247.61 128.546 219.627 100.563 185.11 100.563C150.592 100.563 122.61 128.546 122.61 163.063C122.61 197.581 150.592 225.563 185.11 225.563ZM238.419 163.063C238.419 192.287 214.729 215.977 185.505 215.977C156.282 215.977 132.592 192.287 132.592 163.063C132.592 133.84 156.282 110.15 185.505 110.15C214.729 110.15 238.419 133.84 238.419 163.063Z"
                            fill="#CCC6D9"
                        />
                        <g filter="url(#filter2_b_1216_4916)">
                            <path
                                d="M185.5 217C215.6 217 240 192.823 240 163C240 133.177 215.6 109 185.5 109C155.4 109 131 133.177 131 163C131 192.823 155.4 217 185.5 217Z"
                                fill="white"
                                fill-opacity="0.3"
                            />
                        </g>
                        <path
                            d="M194.923 163L208.112 149.862C209.348 148.562 210.025 146.835 209.999 145.047C209.974 143.259 209.248 141.552 207.976 140.287C206.704 139.023 204.986 138.301 203.187 138.276C201.388 138.251 199.65 138.923 198.342 140.151L185.124 153.289L171.935 140.151C171.3 139.484 170.537 138.95 169.691 138.58C168.845 138.211 167.933 138.014 167.009 138.001C166.085 137.988 165.168 138.159 164.312 138.504C163.456 138.85 162.678 139.362 162.024 140.012C161.371 140.661 160.855 141.434 160.508 142.285C160.16 143.136 159.988 144.048 160.001 144.967C160.014 145.885 160.212 146.791 160.584 147.632C160.955 148.473 161.493 149.231 162.165 149.862L175.376 163L162.165 176.138C161.493 176.769 160.955 177.527 160.584 178.368C160.212 179.209 160.014 180.115 160.001 181.033C159.988 181.952 160.16 182.863 160.508 183.715C160.855 184.566 161.371 185.339 162.024 185.988C162.678 186.637 163.456 187.15 164.312 187.496C165.168 187.841 166.085 188.012 167.009 187.999C167.933 187.986 168.845 187.789 169.691 187.42C170.537 187.05 171.3 186.516 171.935 185.849L185.153 172.711L198.372 185.849C199.692 187.004 201.405 187.616 203.164 187.559C204.922 187.503 206.592 186.782 207.834 185.544C209.076 184.305 209.796 182.643 209.848 180.896C209.9 179.148 209.279 177.446 208.112 176.138L194.923 163Z"
                            fill="var(--nextui-colors-error)"
                        />
                        <path
                            d="M260.602 253.843L275.362 236.717L277.585 238.84C279.742 240.899 281.033 243.775 281.175 246.837C281.317 249.898 280.297 252.893 278.341 255.163V255.163C276.384 257.433 273.651 258.792 270.742 258.941C267.833 259.09 264.987 258.017 262.83 255.958L260.607 253.836L260.602 253.843Z"
                            fill="#E1DCEB"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M56.3144 91.1717C56.2956 89.7456 56.1167 88.3073 55.7589 86.8592C54.5042 81.7771 48.9064 78.5144 42.9484 77.7473C36.9927 76.9802 30.7993 78.7258 28.4123 83.1465C27.047 85.674 26.8587 87.8525 27.4166 89.6891C27.9721 91.5159 29.2903 93.0304 31.0793 94.2106C36.0675 97.4978 44.8034 98.169 48.7887 96.7946C50.6319 96.1578 52.4327 95.3908 54.1864 94.513C53.1836 100.259 49.4477 105.702 44.4619 110.607C33.6264 121.268 16.8117 129.36 7.65456 132.335C7.16257 132.495 6.88948 133.04 7.04249 133.554C7.19551 134.068 7.71809 134.356 8.21008 134.196C17.5485 131.162 34.6905 122.898 45.7402 112.026C51.4487 106.411 55.5164 100.089 56.2109 93.4435C69.1156 86.242 79.7134 73.1767 88.774 62.1815C89.1106 61.7758 89.0659 61.1587 88.6751 60.8071C88.2844 60.4579 87.6958 60.5022 87.3592 60.9103C78.6681 71.4556 68.5812 83.9997 56.3144 91.1717ZM54.4383 92.2166C54.509 90.6136 54.3582 88.9859 53.951 87.3435C52.8658 82.9449 47.8776 80.3437 42.72 79.6798C39.5585 79.2742 36.3077 79.6086 33.7583 80.7985C32.1552 81.546 30.8345 82.6302 30.0389 84.1055C28.9937 86.0404 28.7677 87.6951 29.1961 89.099C29.6245 90.5128 30.6887 91.6486 32.0752 92.5608C36.6208 95.5579 44.575 96.1948 48.2025 94.9433C50.3423 94.2057 52.4186 93.2861 54.4383 92.2166Z"
                            fill="#011625"
                        />
                        <circle
                            cx="285"
                            cy="184"
                            r="6"
                            fill="var(--mui-palette-primary-main)"
                        />
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M58.3845 225.394C59.4553 224.993 60.582 224.459 61.451 223.686C62.483 222.769 62.9027 221.587 63.1845 220.343C63.5464 218.744 63.6909 217.042 64.1297 215.441C64.2922 214.846 64.6048 214.621 64.739 214.522C65.0781 214.27 65.4208 214.202 65.7433 214.228C66.1254 214.257 66.6504 214.409 66.9956 215.083C67.0448 215.18 67.1088 215.327 67.1519 215.528C67.1833 215.676 67.2036 216.137 67.2368 216.328C67.3199 216.797 67.3894 217.266 67.4546 217.737C67.6719 219.306 67.7968 220.639 68.483 222.081C69.414 224.038 70.347 225.235 71.6122 225.766C72.8356 226.279 74.2984 226.182 76.1673 225.78C76.3451 225.735 76.5211 225.696 76.6953 225.664C77.5193 225.513 78.307 226.082 78.4688 226.946C78.6307 227.809 78.107 228.65 77.2904 228.84C77.1199 228.88 76.9519 228.917 76.7857 228.952C74.2602 229.61 71.3365 231.958 69.6374 234.014C69.1137 234.648 68.347 236.421 67.5648 237.551C66.9876 238.386 66.339 238.935 65.7943 239.13C65.4294 239.261 65.1217 239.24 64.8676 239.174C64.4984 239.079 64.1919 238.868 63.9568 238.533C63.8288 238.35 63.71 238.105 63.6534 237.791C63.6263 237.64 63.6233 237.257 63.6239 237.083C63.4645 236.506 63.2694 235.943 63.1273 235.361C62.7882 233.971 62.123 233.092 61.3328 231.93C60.5937 230.843 59.7999 230.159 58.6362 229.614C58.4848 229.575 57.2633 229.26 56.8319 229.08C56.2017 228.815 55.9014 228.371 55.7925 228.132C55.6073 227.727 55.5882 227.373 55.6251 227.077C55.6799 226.641 55.8657 226.268 56.1956 225.967C56.3999 225.78 56.7051 225.598 57.1137 225.509C57.4294 225.44 58.2669 225.4 58.3845 225.394ZM65.5506 223.13C65.6073 223.263 65.6676 223.396 65.7316 223.531C67.0953 226.397 68.6202 227.998 70.4737 228.774L70.5359 228.799C69.2959 229.768 68.1734 230.851 67.3156 231.889C66.9623 232.317 66.4947 233.205 65.9894 234.115C65.5304 232.545 64.7796 231.435 63.8356 230.045C63.1143 228.985 62.3587 228.187 61.43 227.537C62.1507 227.148 62.838 226.692 63.4368 226.16C64.4337 225.273 65.0928 224.246 65.5506 223.13Z"
                            fill="var(--mui-palette-primary-main)"
                        />
                    </g>
                    <defs>
                        <filter
                            id="filter0_d_1216_4916"
                            x="59"
                            y="53.5564"
                            width="184.537"
                            height="215.029"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dy="20" />
                            <feGaussianBlur stdDeviation="15" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0 0.570833 0 0 0 0.19 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1216_4916"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1216_4916"
                                result="shape"
                            />
                        </filter>
                        <filter
                            id="filter1_d_1216_4916"
                            x="216"
                            y="37.424"
                            width="96.219"
                            height="66.3889"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feColorMatrix
                                in="SourceAlpha"
                                type="matrix"
                                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                result="hardAlpha"
                            />
                            <feOffset dx="6" dy="4" />
                            <feGaussianBlur stdDeviation="6.5" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix
                                type="matrix"
                                values="0 0 0 0 0.104618 0 0 0 0 0.465612 0 0 0 0 0.545833 0 0 0 0.09 0"
                            />
                            <feBlend
                                mode="normal"
                                in2="BackgroundImageFix"
                                result="effect1_dropShadow_1216_4916"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_dropShadow_1216_4916"
                                result="shape"
                            />
                        </filter>
                        <filter
                            id="filter2_b_1216_4916"
                            x="123"
                            y="101"
                            width="125"
                            height="124"
                            filterUnits="userSpaceOnUse"
                            color-interpolation-filters="sRGB"
                        >
                            <feFlood
                                flood-opacity="0"
                                result="BackgroundImageFix"
                            />
                            <feGaussianBlur
                                in="BackgroundImageFix"
                                stdDeviation="4"
                            />
                            <feComposite
                                in2="SourceAlpha"
                                operator="in"
                                result="effect1_backgroundBlur_1216_4916"
                            />
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="effect1_backgroundBlur_1216_4916"
                                result="shape"
                            />
                        </filter>
                        <linearGradient
                            id="paint0_linear_1216_4916"
                            x1="149.075"
                            y1="-10.0749"
                            x2="151.533"
                            y2="411.347"
                            gradientUnits="userSpaceOnUse"
                        >
                            <stop stop-color="#F2F2F2" />
                            <stop offset="1" stop-color="#FCFCFC" />
                        </linearGradient>
                        <clipPath id="clip0_1216_4916">
                            <rect width="300" height="300" fill="white" />
                        </clipPath>
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
                    Page non trouvée
                </Typography>
                <Box
                    sx={{
                        position: "relative",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        color: (theme) => theme.palette.text.secondary,
                    }}
                >
                    <Typography
                        textAlign={"center"}
                        fontWeight={"medium"}
                        variant="body1"
                    >
                        Désolé, la page que vous recherchez est introuvable.
                    </Typography>
                    <Typography
                        textAlign={"center"}
                        fontWeight={"medium"}
                        variant="body1"
                        gutterBottom
                    >
                        Assurez-vous d'avoir entré le bon URL ou retournez à la
                        page d'accueil.
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
                        variant="outlined"
                        onClick={() => {
                            Router.back();
                        }}
                    >
                        Retourner
                    </Button>
                    <Button
                        color="error"
                        variant="contained"
                        onClick={() => {
                            Router.push("/");
                        }}
                    >
                        Page D'accueil
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
