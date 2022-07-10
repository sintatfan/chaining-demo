import {Button, Card, Group, Popover, Skeleton, Title, UnstyledButton} from "@mantine/core";
import {Eye} from "tabler-icons-react";
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

export default function HistoryCard() {
    const items = [1,2,3,4].map((item, i) => (
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