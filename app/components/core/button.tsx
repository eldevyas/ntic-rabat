import Button from "@mui/material/Button";

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
