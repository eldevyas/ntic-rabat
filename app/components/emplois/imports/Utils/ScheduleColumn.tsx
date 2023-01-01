import React from 'react'

function ScheduleColumn(props: any) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.class}</span>
        </div>
    )
}

export default ScheduleColumn