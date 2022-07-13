import {useCallback, useContext, useEffect, useState, useTransition} from "react";
import {ProjectContext, ProjectNodesDataWrapper} from "./ProjectDataWrapper";
import {useParams} from "react-router-dom";
import {getProjectMeta, getTree} from "../../plugins/firestore";
import {LoadingOverlay} from "@mantine/core";
import ErrorScreen from "../layout/ErrorScreen";
import timelineImg from "../../images/home_timeline.svg";

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

function TreeView() {
    const {projectId} = useParams();
    const project = useContext(ProjectContext);
    const [translate, containerRef] = useCenteredTree();

    return (
        <div className="project-tree" ref={containerRef}>
            Hello
        </div>
    );
}

function TimelineView() {
    return (
        <div className="project-timeline">
            <img src={timelineImg} alt="" />
        </div>
    );
}

export default function ProjectMainView() {
    return (
        <div className="project-view__main">
            <TreeView />
            <TimelineView />
        </div>
    )
}