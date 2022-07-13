import {createContext, useEffect, useState, useTransition} from "react";
import {getNodes, getProjectMeta} from "../../plugins/firestore";
import {LoadingOverlay} from "@mantine/core";
import ErrorScreen from "../layout/ErrorScreen";
import Emitter from "../../emitter";

export const ProjectContext = createContext(null);
export const ProjectNodesContext = createContext(null);

export default function ProjectDataWrapper({projectId, children}) {
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

    return (
        <ProjectContext.Provider value={project}>
            {children}
        </ProjectContext.Provider>
    );
}


export function ProjectNodesDataWrapper({projectId, children}) {
    const [isPending, startTransition] = useTransition();
    const [nodes, setNodes] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            const result = await getNodes(projectId);
            if (!ignore) {
                if (result) {
                    setNodes(result);
                }
            }
        }
        startTransition(async () => {
            await fetchData();
        });

        return () => { ignore = true; };
    }, [projectId]);

    if (isPending || !nodes) {
        return <LoadingOverlay visible />;
    }

    return (
        <ProjectNodesContext.Provider value={nodes}>
            {children}
        </ProjectNodesContext.Provider>
    );
}

export function openPreview(nodeId) {
    Emitter.emit('PROJECT.NODE_PREVIEW', nodeId);
}