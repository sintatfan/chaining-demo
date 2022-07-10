import {Box, Button, Card, Group, Popover, Skeleton, Stack, Switch, Title, UnstyledButton} from "@mantine/core";
import CodeEditor from "./CodeEditor";
import {Eye, PlayerPlay} from "tabler-icons-react";
import {useState} from "react";

function HistoryPoint({item}) {
    const [opened, setOpened] = useState(false);

    const target = (
        <UnstyledButton onClick={() => setOpened((o) => !o)}>
            <span></span>
        </UnstyledButton>
    );

    return <Popover
        opened={opened}
        onClose={() => setOpened(false)}
        target={target}
        width={260}
        position="bottom"
        withArrow
        className="history-chain-point"
        styles={(theme) => ({arrow: {backgroundColor: theme.colors.dark[7]}, popover: {backgroundColor: theme.colors.dark[7]}})}
    >
        <Skeleton visible height={226} mb="xs">
            Lorem ipsum dolor sit amet...
            {/* other content */}
        </Skeleton>

        <Button fullWidth><Eye /> View</Button>
    </Popover>;
}

function HistoryCard() {
    const items = [1,2,3,4].map((item) => (
        <HistoryPoint item={item} />
    ));

    return (
        <Card py="xs">
            <Title order={5}>Previous Coding</Title>
            <Group className="history-chain">
                {items}
            </Group>
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