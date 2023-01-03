import React, { useEffect, useState } from "react";
import SelectGroup from "./Utils/SelectGroup";
import axios from "axios";

const SelectClass = (props: any) => {
    const setGroup = props.setGroup;

    // Handle Change
    const handleChange = (e: any) => {
        // Change
        setGroup(e.target.value);
    };

    return (
        <div className="SelectClass">
            <div className="SelectGroup">
                <SelectGroup
                    onChange={(e: any) => {
                        handleChange(e);
                    }}
                />
            </div>
        </div>
    );
};

export default SelectClass;
