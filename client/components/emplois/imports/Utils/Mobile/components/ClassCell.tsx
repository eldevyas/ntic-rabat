export const Free = (props: any) => {
    return (
        <div className="ScheduleTimeCell Free">
            <span className="Prof">{props.prof}</span>
            <span className="Class">{props.class}</span>
        </div>
    );
};

export const Presential = (props: any) => {
    return (
        <div className="ScheduleTimeCell Presential">
            <span className="Prof">{props.prof}</span>
            <span className="Class">{props.class}</span>
        </div>
    );
};

export const Online = (props: any) => {
    return (
        <div className="ScheduleTimeCell Online">
            <span className="Prof">{props.prof}</span>
            <span className="Class">En ligne</span>
        </div>
    );
};

export const Absent = (props: any) => {
    return (
        <div className="ScheduleTimeCell Absent">
            <span className="Prof">{props.prof}</span>
            <span className="Class">Absent</span>
        </div>
    );
};
