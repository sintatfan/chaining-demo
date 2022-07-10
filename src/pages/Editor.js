import {Grid} from "@mantine/core";
import EditorSidebarCol from "../components/editor/EditorSidebarCol";
import EditorMainCol from "../components/editor/EditorMainCol";
import EditorResultCol from "../components/editor/EditorResultCol";

export default function EditorPage() {
    return (
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
    );
}