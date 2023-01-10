import React from "react";
import axios from "axios";
const updateAnnonce = (props: any) => {
    let id = props.id;
    let title = props.title;
    let description = props.description;
    let url = props.url;
    let token = props.token;
    function editAnnonce() {
        axios
            .put(`http://localhost:8000/api/annonces/${id}`, {
                title: title,
                description: description,
                url: url,
                headers: { Authorization: `Bearer ${token}` },
            })
            .then((res) => {
                console.log(res);
                console.log(res.data);
            });
    }
    return <div>updateAnnonce</div>;
};

export default updateAnnonce;
