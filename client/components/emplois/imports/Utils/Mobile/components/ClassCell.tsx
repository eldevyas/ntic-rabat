export const Free = (props: any) => {
    let prof = props.prof;
    // delete the prof. from the prof name
    if (prof.startsWith("Prof.")) {
        prof = prof.substring(5);
    }
    // capitalize the prof name
    prof = prof.toLowerCase();
    prof = prof.charAt(0).toUpperCase() + prof.slice(1);
    return (
        <div className="ScheduleTimeCell Free">
            <span className="Prof">{prof}</span>
            <span className="Class">{props.class}</span>
        </div>
    );
};

export const Presential = (props: any) => {
    let prof = props.prof;
    // delete the prof. from the prof name
    // if (prof.startsWith("Prof.")) {
    //     prof = prof.substring(5);
    // }
    // prof = prof.toLowerCase();
    // prof = prof.charAt(0).toUpperCase() + prof.slice(1);
    return (
        <div className="ScheduleTimeCell Presential">
            <span className="Prof">{prof}</span>
            <span className="Class">{props.class}</span>
        </div>
    );
};

export const Online = (props: any) => {
    let prof = props.prof;
    // // delete the prof. from the prof name
    // if (prof.startsWith("Prof.")) {
    //     prof = prof.substring(5);
    // }
    // prof = prof.toLowerCase();
    // prof = prof.charAt(0).toUpperCase() + prof.slice(1);
    return (
        <div className="ScheduleTimeCell Online">
            <span className="Prof">{prof}</span>
            <span className="Class">En ligne</span>
        </div>
    );
};

export const Absent = (props: any) => {
    let prof = props.prof;
    // delete the prof. from the prof name
    // if (prof.startsWith("Prof.")) {
    //     prof = prof.substring(5);
    // }
    // prof = prof.toLowerCase();
    // prof = prof.charAt(0).toUpperCase() + prof.slice(1);
    // // and lowercase the rest
    return (
        <div className="ScheduleTimeCell Absent">
            <span className="Prof">{prof}</span>
            <span className="Class">Absent</span>
        </div>
    );
};
