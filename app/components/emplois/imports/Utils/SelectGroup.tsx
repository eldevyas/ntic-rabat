import * as React from "react";
import SelectUnstyled, {
    SelectUnstyledProps,
    selectUnstyledClasses,
} from "@mui/base/SelectUnstyled";
import OptionUnstyled, {
    optionUnstyledClasses,
} from "@mui/base/OptionUnstyled";
import OptionGroupUnstyled, {
    OptionGroupUnstyledProps,
} from "@mui/base/OptionGroupUnstyled";
import PopperUnstyled from "@mui/base/PopperUnstyled";
import { styled } from "@mui/system";
import ComputerIcon from "@mui/icons-material/Computer";
import BrushIcon from "@mui/icons-material/Brush";
import axios from "axios";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CalculateIcon from "@mui/icons-material/Calculate";
import { Button } from "@mui/material";
import { useDispatch } from 'react-redux';

const blue = {
    100: "#DAECFF",
    200: "#99CCF3",
    400: "#3399FF",
    500: "#007FFF",
    600: "#0072E5",
    900: "#003A75",
};

const grey = {
    50: "#f6f8fa",
    100: "#eaeef2",
    200: "#d0d7de",
    300: "#afb8c1",
    400: "#8c959f",
    500: "#6e7781",
    600: "#57606a",
    700: "#424a53",
    800: "#32383f",
    900: "#24292f",
};

const StyledButton = styled("button")(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  min-height: calc(1.5em + 22px);
  min-width: 220px;
  padding: 12px;
  border-radius: 12px;
  text-align: left;
  line-height: 1.5;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    background: ${theme.palette.mode === "dark" ? grey[800] : grey[50]};
    border-color: ${theme.palette.mode === "dark" ? grey[600] : grey[300]};
  }

  &.${selectUnstyledClasses.focusVisible} {
    border-color: ${blue[400]};
    outline: 3px solid ${theme.palette.mode === "dark" ? blue[500] : blue[200]};
  }

  &.${selectUnstyledClasses.expanded} {
    &::after {
      content: '▴';
    }
  }

  &::after {
    content: '▾';
    float: right;
  }
  `
);

const StyledListbox = styled("ul")(
    ({ theme }) => `
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  padding: 6px;
  margin: 12px 0;
  min-width: 220px;
  border-radius: 10px;
  overflow: auto;
  outline: 0px;
  background: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  border: 1px solid ${theme.palette.mode === "dark" ? grey[700] : grey[200]};
  color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  max-height:60vh;
  overflow-y: auto;
  outline: 0px;
  `
);

const StyledOption = styled(OptionUnstyled)(
    ({ theme }) => `
  list-style: none;
  padding: 8px;
  border-radius: 8px;
  cursor: default;

  &:last-of-type {
    border-bottom: none;
  }

  &.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.highlighted} {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }

  &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
    background-color: ${theme.palette.mode === "dark" ? blue[900] : blue[100]};
    color: ${theme.palette.mode === "dark" ? blue[100] : blue[900]};
  }

  &.${optionUnstyledClasses.disabled} {
    color: ${theme.palette.mode === "dark" ? grey[700] : grey[400]};
  }

  &:hover:not(.${optionUnstyledClasses.disabled}) {
    background-color: ${theme.palette.mode === "dark" ? grey[800] : grey[100]};
    color: ${theme.palette.mode === "dark" ? grey[300] : grey[900]};
  }
  `
);

const StyledGroupRoot = styled("li")`
    list-style: none;
`;

const StyledGroupHeader = styled("span")`
    display: flex;
    padding: 15px 0 5px 10px;
    font-size: 0.75em;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    color: ${grey[600]};
`;

const StyledGroupOptions = styled("ul")`
    list-style: none;
    margin-left: 0;
    padding: 0;

    > li {
        padding-left: 20px;
    }
`;

const StyledPopper = styled(PopperUnstyled)`
    z-index: 1;
`;

function CustomSelect(props: SelectUnstyledProps<string>) {
    const slots: SelectUnstyledProps<string>["slots"] = {
        root: StyledButton,
        listbox: StyledListbox,
        popper: StyledPopper,
        ...props.slots,
    };

    return <SelectUnstyled {...props} slots={slots} />;
}

const CustomOptionGroup = React.forwardRef(function CustomOptionGroup(
    props: OptionGroupUnstyledProps,
    ref: React.ForwardedRef<any>
) {
    const slots: OptionGroupUnstyledProps["slots"] = {
        root: StyledGroupRoot,
        label: StyledGroupHeader,
        list: StyledGroupOptions,
        ...props.slots,
    };

    return <OptionGroupUnstyled {...props} ref={ref} slots={slots} />;
});

export default function UnstyledSelectGrouping() {


    // Set Group state to type array with object of name and value
    const [Groups, setGroups] = React.useState<
        { name: String; value: Number }[]
    >([]);

    // Fetch /api/groups with axios
    const SendRequest = async () => {
        try {
            const response = await axios.get("/api/groups");
            setGroups(response.data);
            return response.data;
        } catch (e) {
            setGroups([]);
            console.log(e);
        }
    };

    React.useEffect(() => {
        SendRequest();
        console.log(Groups);
    }, []);

    return (
        <CustomSelect>
            <CustomOptionGroup
                label={
                    <Button
                        sx={{
                            width: "100%",
                            justifyContent: "flex-start",
                            pointerEvents: "none",
                            color: "black",
                        }}
                        startIcon={<ComputerIcon />}
                    >
                        Développement Digitale
                    </Button>
                }
            >
                {
                    // Only groups starting with DEV
                    Groups.map((Group, index) => {
                        // If group name starts with DEV
                        if (Group.name.includes("DEV")) {
                            return (
                                <StyledOption key={index} value={Group.value}>
                                    {Group.name}
                                </StyledOption>
                            );
                        }
                    })
                }
            </CustomOptionGroup>
            <CustomOptionGroup
                label={
                    <Button
                        sx={{
                            width: "100%",
                            justifyContent: "flex-start",
                            pointerEvents: "none",
                            color: "black",
                        }}
                        startIcon={<BrushIcon />}
                    >
                        Infographie
                    </Button>
                }
            >
                {
                    // Only groups starting with INFO
                    Groups.map((Group, index) => {
                        // If group name starts with INFO
                        if (Group.name.includes("INFO")) {
                            return (
                                <StyledOption key={index} value={Group.value}>
                                    {Group.name}
                                </StyledOption>
                            );
                        }
                    })
                }
            </CustomOptionGroup>
            <CustomOptionGroup
                label={
                    <Button
                        sx={{
                            width: "100%",
                            justifyContent: "flex-start",
                            pointerEvents: "none",
                            color: "black",
                        }}
                        startIcon={<SignalCellularAltIcon />}
                    >
                        Infrastructure
                    </Button>
                }
            >
                {
                    // Only groups starting with ID
                    Groups.map((Group, index) => {
                        // If group name starts with ID
                        if (Group.name.includes("ID")) {
                            return (
                                <StyledOption key={index} value={Group.value}>
                                    {Group.name}
                                </StyledOption>
                            );
                        }
                    })
                }
            </CustomOptionGroup>
            <CustomOptionGroup
                label={
                    <Button
                        sx={{
                            width: "100%",
                            justifyContent: "flex-start",
                            pointerEvents: "none",
                            color: "black",
                        }}
                        startIcon={<CalculateIcon />}
                    >
                        Gestion d'entreprises
                    </Button>
                }
            >
                {
                    // Only groups starting with ID
                    Groups.map((Group, index) => {
                        // If group name starts with ID
                        if (Group.name.includes("GEO")) {
                            return (
                                <StyledOption key={index} value={Group.value}>
                                    {Group.name}
                                </StyledOption>
                            );
                        }
                    })
                }
            </CustomOptionGroup>
        </CustomSelect>
    );
}
