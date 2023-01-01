import * as React from 'react';
import SelectUnstyled from '@mui/base/SelectUnstyled';
import OptionUnstyled from '@mui/base/OptionUnstyled';
import UnstyledSelectSimple from './Utils/SelectGroup';
const SelectClass = () => {
    const [className, setClassName] = React.useState('');

    return (
        <div className='SelectClass'>
            <div className='SelectGroup'>
                <UnstyledSelectSimple />
            </div>
        </div >
    )
}

export default SelectClass