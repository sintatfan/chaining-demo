import {useParams} from "react-router-dom";
import ProjectView from "../components/project/ProjectView";
import ProjectDataWrapper from "../components/project/ProjectDataWrapper";

export default function ProjectHomePage() {
    const {projectId} = useParams();

    return (
        <ProjectDataWrapper projectId={projectId}>
            <ProjectView />
        </ProjectDataWrapper>
    );
}