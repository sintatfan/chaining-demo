import {useParams} from "react-router-dom";
import {getProjectMeta} from "../plugins/firestore";
import {useEffect, useState, useTransition} from "react";
import {LoadingOverlay} from "@mantine/core";
import ErrorScreen from "../components/layout/ErrorScreen";
import ProjectView from "../components/project/ProjectView";

export default function ProjectHomePage() {
    const {projectId} = useParams();
    const [isPending, startTransition] = useTransition();
    const [project, setProject] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            const result = await getProjectMeta(projectId);
            if (!ignore) {
                if (result) {
                    setProject(result);
                } else {
                    setError('Project not found');
                }
            }
        }
        startTransition(async () => {
            await fetchData();
        });

        return () => { ignore = true; };
    }, [projectId]);

    if (isPending || (!project && !error)) {
        return <LoadingOverlay visible />;
    } else if (error) {
        return <ErrorScreen message={error} />;
    }

    return <ProjectView project={project} />;
}