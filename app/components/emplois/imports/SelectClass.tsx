import React, { useEffect } from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import OptionUnstyled from '@mui/base/OptionUnstyled';
import SelectGroup from './Utils/SelectGroup';
import { GroupContext } from '../Context/GroupContext';

const SelectClass = () => {
    // use Context
    const { GroupID, SetGroupID, Schedule, SetSchedule } = React.useContext(GroupContext);


    // Handle Change
    const handleChange = (e: any) => {
        // Change Context Value
        SetGroupID(e.target.value);

        // 
        console.log(GroupID);
        SetSchedule();
        console.log(Schedule);
    }

    return (
        <div className='SelectClass'>
            <div className='SelectGroup'>
                <SelectGroup onChange={(e: any) => { handleChange(e) }} />
            </div>
        </div >
    )
}

export default SelectClass