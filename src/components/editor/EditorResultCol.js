import {Box, Button, Group, Stack, Textarea} from "@mantine/core";
import CountDown from "../CountDown";
import {useAuthValue} from "../../plugins/auth";
import PreviewArea from "../preview/PreviewArea";
import {useContext} from "react";
import {ProjectContext} from "../project/ProjectDataWrapper";

export default function EditorResultCol() {
    const {currentUser} = useAuthValue();
    const project = useContext(ProjectContext);

    return (
        <Stack className="editor-page__grid-inner">
            <Box className="editor-preview-container">
                {/* TODO: preview area */}
                <PreviewArea />
            </Box>
            <Group position="apart" align="end">
                <Box style={{flex: 1, maxWidth: 500}}>
                    <Textarea placeholder="Describe your work" variant="filled" minRows={4} mb="xs" />
                    <Group position="right">
                        <Button disabled={!currentUser}>Submit</Button>
                    </Group>
                </Box>
                <Box>
                    <CountDown target={project.expiry_time.toDate()} />
                </Box>
            </Group>
        </Stack>
    );
}