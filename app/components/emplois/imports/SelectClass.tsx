import React, { useEffect, useState } from "react";
import SelectGroup from "./Utils/SelectGroup";
import axios from "axios";

const SelectClass = (props: any) => {
    const setGroup = props.setGroup;

    return (
        <div className="SelectClass">
            <div className="SelectGroup">
                <SelectGroup setGroup={setGroup} />
            </div>
        </div>
    );
};

export default SelectClass;
