import React from "react";

function RealisationsContent(props: any) {
    return props.isAdding ? (
        <div className="realisations-content">
            <h1>Realisations</h1>
        </div>
    ) : null;
}
export default RealisationsContent;
