import {NodeDetailsModal} from "./ViewNodeButton";
import {useEffect, useState} from "react";
import Emitter from "../../emitter";

export function openPreview(projectId, nodeId) {
    Emitter.emit('PROJECT.NODE_PREVIEW', { projectId, nodeId });
}

export default function NodePreview() {
    const [state, setState] = useState({
        projectId: null,
        nodeId: null,
        isOpen: false,
    });

    useEffect(() => {
        Emitter.on('PROJECT.NODE_PREVIEW', ({ projectId, nodeId }) => {
            setState({ projectId, nodeId, isOpen: true });
        });
        return () => {
            Emitter.off('PROJECT.NODE_PREVIEW');
        };
    });

    const close = function () {
        setState({projectId: null, nodeId: null, isOpen: false});
    };

    return (
        <NodeDetailsModal
            projectId={state.projectId} nodeId={state.nodeId}
            state={state.isOpen} onClose={close}
        />
    );
}