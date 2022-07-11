import {Button, Card, Group, Stack, Text, Textarea, Title} from "@mantine/core";
import {User} from "tabler-icons-react";
import {MetaDateTime} from "./DateTime";

function CommentForm() {
    return (
        <form>
            <Textarea variant="filled" minRows={5} placeholder="Leave your comment"></Textarea>
            <Group position="right" mt="xs" mb="md">
                <Button size="xs">Comment</Button>
            </Group>
        </form>
    );
}

function CommentEntry({comment}) {
    return (
        <Card sx={(theme) => ({ backgroundColor: theme.colors.gray[0]})} py="sm">
            <Text size="sm" mb="xs">{comment.content}</Text>
            <Group position="apart">
                <Text size="xs"><User size={14} /> {comment.author_name}</Text>
                <MetaDateTime date={comment.post_time} />
            </Group>
        </Card>
    );
}

function CommentList() {
    const children = [
        {id: '3', content: 'Vivamus maximus justo in lacus sollicitudin suscipit sit amet vitae est.', author_name: 'Peter', post_time: new Date()},
        {id: '2', content: 'Vivamus maximus justo in lacus sollicitudin suscipit sit amet vitae est.', author_name: 'Peter', post_time: new Date(2022, 6, 11, 4, 2, 3)},
        {id: '1', content: 'Vivamus maximus justo in lacus sollicitudin suscipit sit amet vitae est.', author_name: 'Peter', post_time: new Date(2022, 6, 11, 1, 2, 3)},
    ].map((item) => (<CommentEntry comment={item} />));

    return (
        <Stack>
            {children}
        </Stack>
    );
}

export function CommentSection() {
    return (
        <>
            <Title order={4}>Comment</Title>
            <CommentForm />
            <CommentList />
        </>
    );
}