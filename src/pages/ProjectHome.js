import {useParams} from "react-router-dom";

export default function ProjectHomePage() {
    const {projectId} = useParams();

    return (
        <div>Project #{projectId}</div>
    );
}