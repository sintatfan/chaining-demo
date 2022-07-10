import {Box, Button, Group, Stack, Text, Textarea} from "@mantine/core";
import GlobalTimer from "../GlobalTimer";
import {useAuthValue} from "../../auth";

export default function EditorResultCol() {
    const {currentUser} = useAuthValue();

    return (
        <Stack className="editor-page__grid-inner">
            <Box className="editor-preview-container">
                {/* TODO: preview area */}
            </Box>
            <Group position="apart" align="end">
                <Box style={{flex: 1, maxWidth: 500}}>
                    <Textarea placeholder="Describe your work" variant="filled" minRows={4} mb="xs" />
                    <Group position="right">
                        <Button disabled={!currentUser}>Submit</Button>
                    </Group>
                </Box>
                <Box>
                    <GlobalTimer />
                </Box>
            </Group>
        </Stack>
    );
}