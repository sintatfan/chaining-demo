import {Box, Button, Card, Group, Stack, Text, Title} from "@mantine/core";
import CodeEditor from "./CodeEditor";

function HistoryCard() {
    return (
        <Card py="xs">
            <Title order={5}>Previous Coding</Title>
        </Card>
    );
}

function EditorCard() {
    return (
        <Box style={{flex: 1}}>
            <CodeEditor />
        </Box>
    );
}

function ConsoleCard() {
    return (
        <Card style={{height: 175}} px={0} py={0}>
            <Group position="apart" px="sm" py={4}
                   sx={(theme) => ({backgroundColor: theme.colors.dark[5]})}>
                <Title order={6}>Console</Title>
                <Button compact color="gray" size="xs">Clear</Button>
            </Group>
            <Box sx={(theme) => ({height: '100%', overflow: 'auto'})}>
                {/* TODO: Simulate console  */}
            </Box>
        </Card>
    );
}

export default function EditorMainCol() {
    return (
        <Stack className="editor-page__grid-inner" spacing="xs">
            <HistoryCard />
            <EditorCard />
            <ConsoleCard />
        </Stack>
    );
}