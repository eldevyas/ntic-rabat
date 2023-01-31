import React from "react";
import Image from "next/image";

function ScheduleColumn(props: any) {
    return (
        <div className="DayTime Presential">
            <span>{props.name}</span>
            <span>{props.class}</span>
            <div className="CellIcon">
                <Image
                    src="/assets/img/backpack.png"
                    alt=""
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    fill
                    sizes="90px"
                />
            </div>
        </div>
    );
}
function ScheduleColumnOnline(props: any) {
    return (
        <div className="DayTime Online">
            <span>{props.name}</span>
            <span>Online</span>
            <div className="CellIcon">
                <Image
                    src="/assets/img/home.png"
                    alt=""
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    fill
                    sizes="90px"
                />
            </div>
        </div>
    );
}
function ScheduleColumnAbsent(props: any) {
    return (
        <div className="DayTime Absent">
            <span>{props.name}</span>
            <span>{props.class}</span>
            <div className="CellIcon">
                <Image
                    src="/assets/img/absent.png"
                    alt=""
                    style={{
                        objectFit: "cover",
                        objectPosition: "center",
                    }}
                    fill
                    sizes="90px"
                />
            </div>
        </div>
    );
}

function ScheduleColumnFree() {
    return <div className="Free"></div>;
}

export {
    ScheduleColumn,
    ScheduleColumnOnline,
    ScheduleColumnAbsent,
    ScheduleColumnFree,
};
