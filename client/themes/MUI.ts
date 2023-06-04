import {
    experimental_extendTheme as extendTheme,
} from '@mui/material/styles';

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        flat: true;
    }
    interface ButtonPropsColorOverrides {
        black: true;
        muted: true;
        white: true;
    }
}

// MUI
export const MUI_CSS_Theme = extendTheme({
    colorSchemes: {
        light: {
            shadows: {
                xs: '0 2px 8px 1px rgb(104 112 118 / 0.07), 0 1px 1px -1px rgb(104 112 118 / 0.04)',
                sm: '0 2px 8px 2px rgb(104 112 118 / 0.07), 0 2px 4px -1px rgb(104 112 118 / 0.04)',
                md: '0 12px 20px 6px rgb(104 112 118 / 0.08)',
                lg: '0 12px 34px 6px rgb(104 112 118 / 0.18)',
                xl: '0 25px 65px 0px rgb(104 112 118 / 0.35)'
            },
            // to use along with css dropShadow utility            

            dropShadows: {
                xs: 'drop-shadow(0 2px 4px rgb(104 112 118 / 0.07)) drop-shadow(0 1px 1px rgb(104 112 118 / 0.04))',
                sm: 'drop-shadow(0 2px 8px rgb(104 112 118 / 0.07)) drop-shadow(0 2px 4px rgb(104 112 118 / 0.04))',
                md: 'drop-shadow(0 4px 12px rgb(104 112 118 / 0.08)) drop-shadow(0 20px 8px rgb(104 112 118 / 0.04))',
                lg: 'drop-shadow(0 12px 24px rgb(104 112 118 / 0.15)) drop-shadow(0 12px 14px rgb(104 112 118 / 0.1))',
                xl: 'drop-shadow(0 25px 34px rgb(104 112 118 / 0.35))'
            },
            // Color Palette
            palette: {
                mode: 'light',
                primary: {
                    main: "#29abe2",
                    contrastText: '#e0f3fb',
                    light: "#b0e1f5",
                    dark: "#004d87"
                },
                secondary: {
                    main: "#39b54a",
                    contrastText: '#e7f6e9',
                    light: "#c6e8c8",
                    dark: "#006316"
                },
                black: {
                    main: '#000',
                    dark: "#151515",
                    light: "#303030",
                    contrastText: '#fff',
                },
                white: {
                    main: "#ffffff",
                    light: "#f5f5f5",
                    dark: "#E9E9E9",
                    contrastText: '#000'
                },
                muted: {
                    main: "#ddd",
                    contrastText: '#555'
                },
                background: {
                    default: "#fff",
                    paper: "#fff"
                },
                // text: {
                //     primary: '#000',
                //     secondary: '#151515',
                // },
                error: {
                    main: "#F31260",
                    dark: "#44041A",
                    light: "#F75F94",
                    contrastText: "#FDD8E5"
                },
                contrastThreshold: 3,
                tonalOffset: 0.6,
            },
            // 
            // Font Family
            typography: {
                fontFamily: [
                    'Outfit',
                    'Cairo',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
            components: {
                // Name of the component
                MuiButtonBase: {
                    defaultProps: {
                        // The props to change the default for.
                        disableRipple: false,
                        disableElevation: true
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: ({ ownerState }: any) => ({
                            fontSize: '1rem',
                            boxShadow: "none",
                            textTransform: "capitalize",
                            fontWeight: 800,
                            borderRadius: "0.7rem",
                            padding: "0.6rem 1rem",

                        }),
                    },
                    variants: [
                        // Flat Variants
                        {
                            props: { variant: "outlined", color: "primary" },
                            style: {
                                background: "#b0e1f5",
                                color: "#29abe2",
                                "&:hover": {
                                    background: "#e0f3fb"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "secondary" },
                            style: {
                                background: "#c6e8c8",
                                color: "#39b54a",
                                "&:hover": {
                                    background: "#e7f6e9"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "black" },
                            style: {
                                background: "#fcfcfc",
                                color: "#000",
                                "&:hover": {
                                    background: "#fff"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "white" },
                            style: {
                                background: "#fcfcfc",
                                color: "#000",
                                border: 1,
                                borderColor: "#000",
                                "&:hover": {
                                    background: "#fff"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "muted" },
                            style: {
                                background: "#ddd",
                                color: "#555",
                                "&:hover": {
                                    background: "#eee"
                                }
                            }
                        },
                        // Contained Variants
                        {
                            props: { variant: "contained", color: "primary" },
                            style: {
                                background: "#29abe2",
                                color: "#e0f3fb",
                                "&:hover": {
                                    background: "#b0e1f5"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "secondary" },
                            style: {
                                background: "#39b54a",
                                color: "#e7f6e9",
                                "&:hover": {
                                    background: "#006316"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "black" },
                            style: {
                                background: "#000",
                                color: "#fcfcfc",
                                "&:hover": {
                                    background: "#111"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "white" },
                            style: {
                                background: "#fff",
                                color: "#151515",
                                "&:hover": {
                                    background: "#eee"
                                }
                            }
                        },
                    ]
                },
            },
            shape: {
                borderRadius: 12,
            },
        },
        dark: {
            shadows: {
                xs: '0 2px 8px 1px rgb(0 0 0 / 0.07), 0 1px 1px -1px rgb(0 0 0 / 0.04)',
                sm: '0 2px 8px 2px rgb(0 0 0 / 0.07), 0 2px 4px -1px rgb(0 0 0 / 0.04)',
                md: '0 12px 20px 6px rgb(0 0 0 / 0.08)',
                lg: '0 12px 34px 6px rgb(0 0 0 / 0.18)',
                xl: '0 25px 65px 0px rgb(0 0 0 / 0.35)'
            },
            // to use along with css dropShadow utility
            dropShadows: {
                xs: 'drop-shadow(0 2px 4px rgb(0 0 0 / 0.07)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.04))',
                sm: 'drop-shadow(0 2px 8px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 4px rgb(0 0 0 / 0.04))',
                md: 'drop-shadow(0 4px 12px rgb(0 0 0 / 0.08)) drop-shadow(0 20px 8px rgb(0 0 0 / 0.04))',
                lg: 'drop-shadow(0 12px 24px rgb(0 0 0 / 0.15)) drop-shadow(0 12px 14px rgb(0 0 0 / 0.1))',
                xl: 'drop-shadow(0 25px 34px rgb(0 0 0 / 0.35))'
            },
            // Color Palette
            palette: {
                mode: 'dark',
                primary: {
                    main: "#29abe2",
                    contrastText: '#e0f3fb',
                    light: "#06232f",
                    dark: "#004d87"
                },
                secondary: {
                    main: "#39b54a",
                    contrastText: '#e7f6e9',
                    light: "#0b240f",
                    dark: "#006316"
                },
                black: {
                    main: '##fcfcfc',
                    contrastText: '#000',
                    light: "#fff",
                    dark: "#111"
                },
                white: {
                    main: "#fff",
                    contrastText: '#000',
                    light: "#333333",
                    dark: "#333333"
                },
                muted: {
                    main: "#000",
                    contrastText: '#555',
                    light: "#555",
                    dark: "#333333"
                },
                background: {
                    default: "#000",
                    paper: "#000",
                },
                text: {
                    primary: '#ddd',
                    secondary: '#aaa',
                },
                error: {
                    main: "#F31260",
                    dark: "#44041A",
                    light: "#F75F94",
                    contrastText: "#FDD8E5"
                },
                contrastThreshold: 3,
                tonalOffset: 0.6,
            },
            // 
            // Font Family
            typography: {
                fontFamily: [
                    'Outfit',
                    'Cairo',
                    '-apple-system',
                    'BlinkMacSystemFont',
                    '"Segoe UI"',
                    'Roboto',
                    '"Helvetica Neue"',
                    'Arial',
                    'sans-serif',
                    '"Apple Color Emoji"',
                    '"Segoe UI Emoji"',
                    '"Segoe UI Symbol"',
                ].join(','),
            },
            components: {
                // Name of the component
                MuiButtonBase: {
                    defaultProps: {
                        // The props to change the default for.
                        disableRipple: false,
                        disableElevation: true
                    },
                },
                MuiButton: {
                    styleOverrides: {
                        root: {
                            fontSize: '1rem',
                            boxShadow: "none",
                            textTransform: "capitalize",
                            fontWeight: 800,
                            borderRadius: "0.7rem",
                            padding: "0.6rem 1rem",
                        },
                    },
                    variants: [
                        // Flat Variants
                        {
                            props: { variant: "outlined", color: "primary" },
                            style: {
                                background: "#000000",
                                color: "#29abe2",
                                "&:hover": {
                                    background: "#06232f"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "secondary" },
                            style: {
                                background: "#000000",
                                color: "#39b54a",
                                "&:hover": {
                                    background: "#0b240f"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "black" },
                            style: {
                                background: "#fff",
                                color: "#000",
                                border: 1,
                                borderColor: "#000",
                                "&:hover": {
                                    background: "#fcfcfc"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "white" },
                            style: {
                                background: "#000",
                                color: "#fff",
                                border: 1,
                                borderColor: "#fff",
                                "&:hover": {
                                    background: "#151515"
                                }
                            }
                        },
                        {
                            props: { variant: "outlined", color: "muted" },
                            style: {
                                background: "#1a1a1a",
                                color: "#555",
                                "&:hover": {
                                    background: "#333333"
                                }
                            }
                        },
                        // Contained Variants
                        {
                            props: { variant: "contained", color: "primary" },
                            style: {
                                background: "#29abe2",
                                color: "#e0f3fb",
                                "&:hover": {
                                    background: "#198cbc"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "secondary" },
                            style: {
                                background: "#39b54a",
                                color: "#e7f6e9",
                                "&:hover": {
                                    background: "#226d2c"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "black" },
                            style: {
                                background: "#fcfcfc",
                                color: "#000",
                                "&:hover": {
                                    background: "#e6e6e6"
                                }
                            }
                        },
                        {
                            props: { variant: "contained", color: "white" },
                            style: {
                                background: "#000000",
                                color: "#e6e6e6",
                                "&:hover": {
                                    background: "#333333"
                                }
                            }
                        },
                    ]
                },
            },
            shape: {
                borderRadius: 12,
            },
        },
    },
} as any);