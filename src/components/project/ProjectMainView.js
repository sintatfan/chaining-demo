import {useCallback, useContext, useEffect, useState, useTransition} from "react";
import Tree from 'react-d3-tree';
import {ProjectContext} from "./ProjectDataWrapper";
import {useParams} from "react-router-dom";
import {getProjectMeta, getTree} from "../../plugins/firestore";
import {LoadingOverlay} from "@mantine/core";
import ErrorScreen from "../layout/ErrorScreen";

const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const { width, height } = containerElem.getBoundingClientRect();
            setTranslate({ x: width / 2, y: height / 2 });
        }
    }, []);
    return [translate, containerRef];
};


function TreeDataLoader({projectId, children}) {
    const [isPending, startTransition] = useTransition();
    const [nodes, setNodes] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        let ignore = false;
        async function fetchData() {
            const result = await getTree(projectId);
            if (!ignore) {

                // if (result) {
                //     setProject(result);
                // }
            }
        }
        startTransition(async () => {
            await fetchData();
        });

        return () => { ignore = true; };
    }, [projectId]);

    if (isPending || (!nodes && !error)) {
        return <LoadingOverlay visible />;
    } else if (error) {
        return <ErrorScreen message={error} />;
    }

    return (
        <div>{children}</div>
    );
}

function TreeView() {
    const {projectId} = useParams();
    const project = useContext(ProjectContext);
    const [translate, containerRef] = useCenteredTree();

    return (
        <TreeDataLoader projectId={projectId}>
            <div className="project-tree" ref={containerRef}>
                Hello
            </div>
        </TreeDataLoader>
    );
}

export default function ProjectMainView() {
    return (
        <div className="project-view__main">
            <TreeView />
        </div>
    )
}