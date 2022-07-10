import {Card, Stack, Title} from "@mantine/core";

export default function EditorSidebarCol() {
    return (
        <Stack className="editor-page__grid-inner">
            <Card style={{flex: 1}} py="xs">
                <Title order={5}>Drag to Code</Title>
            </Card>
        </Stack>
    );
}