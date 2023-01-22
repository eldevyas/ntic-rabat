import React, { useState } from "react";
function AddProjectForm() {
    const [gitUrl, setGitUrl] = useState("github.com/");
    const handleGitUrlChange = (e: any) => {
        let value = e.target.value;
        if (value) {
            if (value.startsWith("github.com/https://github.com/") || value.startsWith("github.com/github.com/")) {
                value = value.substring("https://github.com/".length);
                value = value.substring("github.com/".length);
            }
            if (!value.startsWith("github.com/")) {
                value = "github.com/" + value;
            }
            setGitUrl(value);
        }
    };
    const handleSubmit = () => {
        console.log(gitUrl)
    }



    return (
        <div className="AddProjectForm">
            <form>
                <div className="form-group">
                    <label>Project Title:</label>
                    <input type="text" className="form-control" placeholder="Enter Project Title" name="projectTitle" required />
                </div>
                <div className="form-group">
                    <label>Project Description:</label>
                    <textarea className="form-control" placeholder="Enter Project Description" rows={4} name="projectDescription" required />
                </div>
                <div className="form-group">
                    <label>Project URL:</label>
                    <input type="text" className="form-control" placeholder="Enter Project URL" name="url" />
                </div>
                <div className="form-group">
                    <label>Github URL:</label>
                    <input
                        type="text"
                        className="form-control git-url"
                        placeholder="Enter Github URL"
                        name="githubUrl"
                        value={gitUrl}
                        onChange={handleGitUrlChange}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Developer Name:</label>
                    <input type="text" className="form-control" placeholder="Enter Developer Name" name="developerName" required />
                </div>
                <div className="form-group">
                    <label>Developer Image:</label>
                    <input type="file" className="form-control" name="developerImage" required />
                </div>
                <div className="form-group">
                    <label>Developer Group:</label>
                    <input type="text" className="form-control" placeholder="Enter Developer Group" name="developerGroup" required />
                </div>
                <div className="form-group">
                    <input type="submit" value="Save Project" className="btn save-btn" onClick={handleSubmit} />
                </div>
            </form>
        </div>
    );
}





function RealisationsContent(props: any) {
    return props.isAdding ? (
        <AddProjectForm />
    ) : null;
}

export default RealisationsContent;