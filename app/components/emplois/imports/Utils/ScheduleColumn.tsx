import React from 'react'

function ScheduleColumn(props: any) {
    return (
        <div>
            <span>{props.name}</span>
            <span>{props.class}</span>
        </div>
    )
}
function ScheduleColumnOnline(props: any) {
    return (
        <div className='Online'>
            <span>{props.name}</span>
            <span>Online</span>
        </div>
    )
}
function ScheduleColumnAbsent(props: any) {
    return (
        <div className='Absent'>
            <span>{props.name}</span>
            <span>Absent</span>
        </div>
    )
}

export { ScheduleColumn, ScheduleColumnOnline, ScheduleColumnAbsent }