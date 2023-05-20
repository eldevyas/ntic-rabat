import { createTheme } from "@nextui-org/react";

const Light = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        colors: {
            // Primary
            primary: "#29abe2",
            primaryLight: "#C4E6F4",
            primaryLightHover: "#A2D7EF",
            primaryLightActive: "#7BC5E7",
            primaryLightContrast: "#0072F5",
            primaryBorder: "#4FBEDA",
            primaryBorderHover: "#33A7D5",
            primarySolidHover: "#1E8DBF",
            primarySolidContrast: "#FFFFFF",
            primaryShadow: "#4FBEDA",
            // Secondary
            secondary: "#39b54a",
            secondaryLight: "#D5F4D8",
            secondaryLightHover: "#BEEBBD",
            secondaryLightActive: "#A8D88D",
            secondaryLightContrast: "#303030",
            secondaryBorder: "#5FC061",
            secondaryBorderHover: "#53AB56",
            secondarySolidHover: "#44923D",
            secondarySolidContrast: "#FFFFFF",
            secondaryShadow: "#5FC061",

            // More
            gradient:
                "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#39b54a",
        },
        fonts: {
            sans: "'Outfit', 'Cairo', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
        },
    },
});

const Dark = createTheme({
    type: "dark", // it could be "light" or "dark"
    theme: {
        colors: {
            // brand colors

            // Primary
            primary: "#29abe2",
            primaryLight: "#C4E6F4",
            primaryLightHover: "#A2D7EF",
            primaryLightActive: "#7BC5E7",
            primaryLightContrast: "#0072F5",
            primaryBorder: "#4FBEDA",
            primaryBorderHover: "#33A7D5",
            primarySolidHover: "#1E8DBF",
            primarySolidContrast: "#FFFFFF",
            primaryShadow: "#4FBEDA",
            // Secondary
            secondary: "#39b54a",
            secondaryLight: "#D5F4D8",
            secondaryLightHover: "#BEEBBD",
            secondaryLightActive: "#A8D88D",
            secondaryLightContrast: "#303030",
            secondaryBorder: "#5FC061",
            secondaryBorderHover: "#53AB56",
            secondarySolidHover: "#44923D",
            secondarySolidContrast: "#FFFFFF",
            secondaryShadow: "#5FC061",

            // More
            gradient:
                "linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)",
            link: "#39b54a",
        },
        fonts: {
            sans: "'Outfit', 'Cairo', Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue'",
        },
    },
});

const NextUI_Theme = {
    Light, Dark
}

export { NextUI_Theme };