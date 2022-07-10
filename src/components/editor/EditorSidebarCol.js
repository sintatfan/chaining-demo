import {Accordion, Box, Card, Code, Image, MantineProvider, SimpleGrid, Stack, Title} from "@mantine/core";

const references = [
    {
        label: 'Shape',
        items: [
            { label: 'ellipse()', image: 'https://via.placeholder.com/160x90', code: 'ellipse(width / 2, height / 2, 50, 50);', },
            { label: 'rect()', image: 'https://via.placeholder.com/160x90', code: 'rect(width / 2, height / 2, 50, 50);' },
            { label: 'triangle()', image: 'https://via.placeholder.com/160x90', code: 'triangle(width / 2, 10, 10, height - 10, width - 10, height - 10);' },
            { label: 'line()', image: 'https://via.placeholder.com/160x90', code: 'line(0, 0, width, height);' },
        ]
    },
    {
        label: 'Color',
        items: [
            { label: 'fill()', image: 'https://via.placeholder.com/160x90' },
            { label: 'stroke()', image: 'https://via.placeholder.com/160x90' },
            { label: 'brightness()', image: 'https://via.placeholder.com/160x90' },
            { label: 'lightness()', image: 'https://via.placeholder.com/160x90' },
            { label: 'saturation()', image: 'https://via.placeholder.com/160x90' },
            { label: 'hue()', image: 'https://via.placeholder.com/160x90' },
        ]
    },
    {
        label: 'Transform',
        items: [
            {label: 'rotate()', image: 'https://via.placeholder.com/160x90'},
            {label: 'scale()', image: 'https://via.placeholder.com/160x90'},
            {label: 'translate()', image: 'https://via.placeholder.com/160x90'},
        ],
    }
];

function RefCard({item}) {
    const onDragStart = function (e) {
        e.dataTransfer.setData("text/plain", item.code || item.label);
    }

    return (
        <MantineProvider>
            <Card pb={0} px={0} className="editor-ref-item" draggable onDragStart={onDragStart}>
                <Card.Section>
                    <Image src={item.image} alt="" />
                </Card.Section>
                <Box py={4}>
                    <Code>{item.label}</Code>
                </Box>
            </Card>
        </MantineProvider>
    );
}

export function ReferenceList() {
    const groups = references.map((group, i) => {
        const items = group.items.map((item, i) => (
            <RefCard item={item} key={i} />
        ));

        return (
            <Accordion.Item label={group.label} mb="md" key={i}>
                <SimpleGrid cols={2}>
                    {items}
                </SimpleGrid>
            </Accordion.Item>
        );
    });

    return (
        <Box className="editor-ref-list">
            <Accordion iconPosition="right" initialItem={0}>
                {groups}
            </Accordion>
        </Box>
    );
}

export default function EditorSidebarCol() {
    return (
        <Stack className="editor-page__grid-inner">
            <Card py="xs" className="editor-ref-card">
                <Title order={5}>Drag to Code</Title>
                <ReferenceList />
            </Card>
        </Stack>
    );
}