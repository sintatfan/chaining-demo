import {Box, Button, Group, Stack, Textarea} from "@mantine/core";
import CountDown from "../CountDown";
import {useAuthValue} from "../../plugins/auth";
import PreviewArea from "../preview/PreviewArea";
import {useContext, useEffect, useState} from "react";
import {ProjectContext} from "../project/ProjectDataWrapper";
import Emitter from "../../emitter";

export default function EditorResultCol() {
    const {currentUser} = useAuthValue();
    const project = useContext(ProjectContext);
    const [code, setCode] = useState(null);

    useEffect(() => {
        Emitter.on('EDITOR.RUN_CODE', (code) => {
            setCode(code);
        });
        return () => {
            Emitter.off('EDITOR.RUN_CODE');
        };
    }, [code]);

    return (
        <Stack className="editor-page__grid-inner">
            <Box className="editor-preview-container">
                <PreviewArea code={code} />
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