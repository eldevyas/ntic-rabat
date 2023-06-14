import Button from "@mui/material/Button";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';

export function DefaultButton(props: any) {
    const { color, ...otherProps } = props;

    return (
        <Button
            variant="text"
            className={"DefaultButton " + color + " " + props.State}
            color="primary"
            {...otherProps}
        >
            {props.children}
        </Button>
    );
}

// Icon Button
export function IconButton(props: any) {
    // remove color
    // remove props color
    const { color, ...otherProps } = props;
    return (
        <Button
            variant="text"
            className={"IconButton " + color}
            color="primary"
            {...otherProps}
        >
            {props.children}
        </Button>
    );
}

// Outlined Button
export function OutlinedButton(props: any) {
    const { color, ...otherProps } = props;

    return (
        <Button
            variant="outlined"
            className={"OutlinedButton " + color}
            color="primary"
            {...otherProps}
        >
            {props.children}
        </Button>
    );
}


export function BackButton(props: any) {
    return (
        <Button
            sx={{
                color: (theme: any) => theme.palette.mode === "light" ? theme.palette.text.primary : theme.palette.text.secondary,
                backgroundColor: (theme: any) => theme.palette.mode === "light" ? theme.palette.background.default : theme.palette.background.paper,
                border: (theme: any) => theme.palette.mode === "light" ? "1px solid #ccc" : "1px solid #555",
                fontWeight: "500",
                '&:hover': {
                    backgroundColor: (theme: any) => theme.palette.mode === "light" ? theme.palette.background.paper : theme.palette.background.default,
                    border: (theme: any) => theme.palette.mode === "light" ? "1px solid #555" : "1px solid #ccc",
                },
            }}
            onClick={() => window.history.back()}
            {...props}
            variant="outlined" startIcon={<KeyboardArrowLeftIcon />}
        >Back</Button>
    )
}