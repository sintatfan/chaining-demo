import {Eye} from "tabler-icons-react";
import {Button, MantineProvider, Modal} from "@mantine/core";
import {useState} from "react";
import {lightTheme, themeStyles} from "../../theme";

export function NodeDetailsModal({state, onClose}) {
    return (
        <MantineProvider theme={lightTheme} styles={themeStyles}>
            <Modal opened={state} onClose={onClose} zIndex={300} size="xl">
                This is node details dialog
            </Modal>
        </MantineProvider>
    );
}

export function ViewNodeButton({projectId, nodeId, onOpened}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <NodeDetailsModal
                projectId={projectId} nodeId={nodeId}
                state={opened} onClose={() => setOpened(false)}
            />
            <Button fullWidth onClick={() => { setOpened(true); onOpened(); }}>
                <Eye /> View
            </Button>
        </>
    );
}