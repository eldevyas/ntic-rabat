import { useEffect, useState } from "react";

export default function ScheduleHeader(props: any) {
    const [GroupID, setGroupID] = useState(props.GroupID);

    useEffect(() => {
        setGroupID(props.GroupID);
        console.log("Table header Group Name: ", GroupID);
    }, [GroupID, props.GroupID]);

    return (
        <>
            <thead>
                <tr>
                    <td>{props["data-GroupID"]}</td>
                    <td>
                        <div>
                            <span>08:30</span>
                            <span>11:00</span>
                        </div>
                    </td>

                    <td>
                        <div>
                            <span>11:00</span>
                            <span>13:30</span>
                        </div>
                    </td>
                    <td>
                        <div>
                            <span>13:30</span>
                            <span>16:00</span>
                        </div>
                    </td>
                    <td>
                        <div>
                            <span>16:00</span>
                            <span>18:30</span>
                        </div>
                    </td>
                </tr>
            </thead>
        </>
    );
}
