import {useParams} from "react-router-dom";
import ProjectView from "../components/project/ProjectView";
import ProjectDataWrapper, {ProjectNodesDataWrapper} from "../components/project/ProjectDataWrapper";

export default function ProjectHomePage() {
    const {projectId} = useParams();

    return (
        <ProjectDataWrapper projectId={projectId}>
            <ProjectNodesDataWrapper projectId={projectId}>
                <ProjectView />
            </ProjectNodesDataWrapper>
        </ProjectDataWrapper>
    );
}