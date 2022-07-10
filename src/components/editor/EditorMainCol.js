import {Box, Button, Card, Group, Stack, Switch, Text, Title} from "@mantine/core";
import CodeEditor from "./CodeEditor";
import {PlayerPlay} from "tabler-icons-react";
import {useState} from "react";

function HistoryCard() {
    return (
        <Card py="xs">
            <Title order={5}>Previous Coding</Title>
        </Card>
    );
}

function EditorCard() {
    const [autoRefresh, setAutoRefresh] = useState(false);
    return (
        <>
            <Card py="xs">
                <Group position="apart">
                    <Button radius="xl">
                        <PlayerPlay />
                    </Button>
                    <Switch
                        label="Auto-refresh"
                        checked={autoRefresh}
                        onChange={(event) => setAutoRefresh(event.currentTarget.checked)}
                    ></Switch>
                </Group>
            </Card>
            <Box style={{flex: 1}}>
                <CodeEditor />
            </Box>
        </>
    );
}

function ConsoleCard() {
    return (
        <Card style={{height: 160}} px={0} py={0}>
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