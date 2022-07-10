import {Box, Button, Card, Group, Title} from "@mantine/core";

export default function ConsoleCard() {
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