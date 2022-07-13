import CountDown from "../CountDown";
import {useContext, useState} from "react";
import {Group, Text, UnstyledButton} from "@mantine/core";
import {Refresh, User} from "tabler-icons-react";
import {MetaDateTime} from "../view/DateTime";
import {WorkPreview} from "../view/ViewNodeButton";
import {ProjectContext, ProjectNodesContext} from "./ProjectDataWrapper";
import {sample} from "lodash";
import {useParams} from "react-router-dom";
import {openPreview} from "../view/NodePreview";

function RandomNodeCard({node, onRefresh}) {
    const {projectId} = useParams();

    return (
        <div className="node-random-card">
            <UnstyledButton onClick={() => onRefresh()}>Random <Refresh size={16} /></UnstyledButton>
            <div className="work-preview-wrapper" onClick={() => openPreview(projectId, node.id)}>
                <WorkPreview videoUrl={node.cover_url} key={node.cover_url} />
            </div>
            <Group position="apart" mt="sm" pr="xs">
                <Text size="xs"><User size={14} /> {node.author_name}</Text>
                <MetaDateTime date={node.post_time} />
            </Group>
        </div>
    );
}

export default function Sidebar() {
    const project = useContext(ProjectContext);
    const nodes = useContext(ProjectNodesContext);

    const [node, setNode] = useState(sample(nodes));
    const drawNewNode = function () {
        setNode(sample(nodes));
    };

    return (
        <div className="project-view__sidebar">
            <div className="project-view__sidebar__recommend">
                <RandomNodeCard node={node} onRefresh={drawNewNode} />
            </div>
            <CountDown target={project.expiry_time.toDate()} />
        </div>
    );
}