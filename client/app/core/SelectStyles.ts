export const HomeStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused
            ? "#fff"
            : "transparent",
        borderColor: state.isFocused ? "#fff" : "#fff",
        color: state.isFocused ? "#39b54a" : "#fff",
        boxShadow: "none",
        borderRadius: "10px",
        outline: "none",
        border: "none",
        padding: "0.25rem 0.25rem",
    }),
    menu: (base: any, state: any) => ({
        ...base,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: state.isFocused ? "#fff" : "#fff",
        color: state.isFocused ? "#39b54a" : "#fff",
        // boxShadow: "none",
        borderRadius: "10px",
        zIndex: 100,
        overflow: "hidden",
        boxShadow:
            "0px 0px 10rem rgba(75, 184, 231, 0.75) !important",
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "#000"
            : "transparent",
        borderColor: state.isSelected ? "#f5f5f5" : "#fff",
        color: state.isSelected ? "#fff" : "#303030",
        fontFamily: "Outfit, sans-serif",
        fontSize: "1rem",
        fontWeight: "400",
        padding: "0.75rem 1.25rem",
        borderRadius: "10px",
        // hover
        "&:hover": {
            backgroundColor: state.isFocused
                ? "#4BB8E7"
                : "#fff",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
            color:
                state.isFocused || state.isSelected
                    ? "#fff"
                    : "#303030",
        },
        "&:active": {
            backgroundColor: state.isFocused
                ? "#4BB8E7"
                : "transparent",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
        },
        // selected option
        "&:selected": {
            backgroundColor: "#555",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
        },
    }),
    // group
    groupHeading: (base: any, state: any) => ({
        ...base,
        fontFamily: "Outfit, sans-serif",
        fontSize: "0.75rem",
        fontWeight: "800",
        padding: "0rem 1.25rem",
        marginTop: "1rem",
        marginBottom: "1rem",
    }),
}


export const EmploisStyles = {
    control: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isFocused ? "#fff" : "#fff",
        borderColor: state.isFocused ? "#fff" : "#fff",
        color: state.isFocused ? "#39b54a" : "#fff",
        boxShadow: "none",
        borderRadius: "10px",
        outline: "none",
        border: "none",
        padding: "0.25rem 0.25rem",
    }),
    menu: (base: any, state: any) => ({
        ...base,
        backgroundColor: "rgba(255, 255, 255, 1)",
        borderColor: state.isFocused ? "#fff" : "#fff",
        color: state.isFocused ? "#39b54a" : "#fff",
        // boxShadow: "none",
        borderRadius: "10px",
        zIndex: 100,
        overflow: "hidden",
        boxShadow:
            "0px 0px 10rem rgba(75, 184, 231, 0.5) !important",
    }),
    option: (base: any, state: any) => ({
        ...base,
        backgroundColor: state.isSelected
            ? "#000"
            : "transparent",
        borderColor: state.isSelected ? "#f5f5f5" : "#fff",
        color: state.isSelected ? "#fff" : "#303030",
        fontFamily: "Outfit, sans-serif",
        fontSize: "1rem",
        fontWeight: "400",
        padding: "0.75rem 1.25rem",
        borderRadius: "10px",
        // hover
        "&:hover": {
            backgroundColor: state.isFocused
                ? "#4BB8E7"
                : "transparent",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
            color:
                state.isFocused || state.isSelected
                    ? "#fff"
                    : "#303030",
        },
        "&:active": {
            backgroundColor: state.isFocused
                ? "#4BB8E7"
                : "transparent",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
        },
        // selected option
        "&:selected": {
            backgroundColor: "#555",
            borderColor: state.isFocused ? "#f5f5f5" : "#fff",
        },
    }),
    // group
    groupHeading: (base: any, state: any) => ({
        ...base,
        fontFamily: "Outfit, sans-serif",
        fontSize: "0.75rem",
        fontWeight: "800",
        padding: "0rem 1.25rem",
        marginTop: "1rem",
        marginBottom: "1rem",
    }),
}