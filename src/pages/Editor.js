import {Grid} from "@mantine/core";
import EditorSidebarCol from "../components/editor/EditorSidebarCol";
import EditorMainCol from "../components/editor/EditorMainCol";
import EditorResultCol from "../components/editor/EditorResultCol";
import {useParams} from "react-router-dom";
import ProjectDataWrapper from "../components/project/ProjectDataWrapper";
import {createContext, useEffect} from "react";
import Emitter from "../emitter";

export const EditorPageContext = createContext({});

export default function EditorPage() {
    const {projectId} = useParams();
    const context = {
        code: null,
    };

    useEffect(() => {
        Emitter.on('EDITOR.RUN_CODE', () => console.log('run code, page level'));
        return () => {
            Emitter.off('EDITOR.RUN_CODE');
        };
    });

    return (
        <ProjectDataWrapper projectId={projectId}>
            <EditorPageContext.Provider value={context}>
                <Grid className="editor-page__grid" gutter="sm">
                    <Grid.Col span={2}>
                        <EditorSidebarCol />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <EditorMainCol />
                    </Grid.Col>
                    <Grid.Col span={5}>
                        <EditorResultCol />
                    </Grid.Col>
                </Grid>
            </EditorPageContext.Provider>
        </ProjectDataWrapper>
    );
}