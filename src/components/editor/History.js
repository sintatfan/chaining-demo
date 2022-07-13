import {Box, Card, Group, Popover, Title, UnstyledButton} from "@mantine/core";
import {useContext, useState} from "react";
import {ViewNodeButton, WorkPreview} from "../view/ViewNodeButton";
import {useParams} from "react-router-dom";
import {NodeContext} from "../project/ProjectDataWrapper";

function HistoryPoint({item}) {
    const [opened, setOpened] = useState(false);
    const {projectId} = useParams();

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
        <Box mb="xs">
            <WorkPreview videoUrl={item.cover_url} />
        </Box>

        {/* TODO: replace params with item's data */}
        <ViewNodeButton projectId={projectId} nodeId={item.id} />
    </Popover>;
}

export default function HistoryCard() {
    const node = useContext(NodeContext);

    const items = node.ancestors?.map((item, i) => (
        <HistoryPoint item={item} key={i} />
    ));

    return (
        <Card py="xs">
            <Title order={5}>Ancestors</Title>
            <Group className="history-chain">
                {items}
            </Group>
        </Card>
    );
}