import Button from "@mui/material/Button";

export function DefaultButton(props: any) {
    return (
        <Button
            variant="text"
            className={"DefaultButton " + props.bgColor + " " + props.State}
            color="primary"
            {...props}
        >
            {props.children}
        </Button>
    );
}

// Icon Button
export function IconButton(props: any) {
    return (
        <Button
            variant="text"
            className={"IconButton " + props.bgColor}
            color="primary"
            {...props}
        >
            {props.children}
        </Button>
    );
}

// Outlined Button
export function OutlinedButton(props: any) {
    return (
        <Button
            variant="outlined"
            className={"OutlinedButton " + props.bgColor}
            color="primary"
            {...props}
        >
            {props.children}
        </Button>
    );
}
