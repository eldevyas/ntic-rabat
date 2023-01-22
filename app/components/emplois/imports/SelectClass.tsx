import React, { useEffect, useState } from "react";
import SelectGroup from "./Utils/Web/SelectGroup";
import axios from "axios";

const SelectClass = (props: any) => {
    const setGroup = props.setGroup;
    const GroupID = props.GroupID;

    return (
        <div className="SelectClass">
            <div className="SelectGroup">
                <SelectGroup GroupID={GroupID} setGroup={setGroup} />
            </div>
        </div>
    );
};

export default SelectClass;
