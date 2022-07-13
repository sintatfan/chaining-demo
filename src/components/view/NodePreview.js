import {useParams} from "react-router-dom";
import {NodeDetailsModal} from "./ViewNodeButton";
import {useState} from "react";

export default function NodePreview() {
    const { projectId, nodeId } = useParams();
    const [opened, setOpened] = useState(false);

    return (
        <NodeDetailsModal
            projectId={projectId} nodeId={nodeId}
            state={opened} onClose={() => setOpened(false)}
        />
    );
}