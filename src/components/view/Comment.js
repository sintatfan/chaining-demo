import {Button, Card, Group, Stack, Text, Textarea, Title} from "@mantine/core";
import {User} from "tabler-icons-react";
import {MetaDateTime} from "./DateTime";

function CommentForm() {
    return (
        <form>
            <Textarea variant="filled" minRows={4} placeholder="Leave your comment"></Textarea>
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
        {id: '3', content: 'Your code is very clear. It\'s easy for me to learn! 🥳', author_name: 'ChiChi', post_time: new Date()},
        {id: '2', content: 'Awesome work! 😍', author_name: 'Ben', post_time: new Date(2022, 6, 11, 4, 2, 3)},
        {id: '1', content: 'It\'s out of my imagination!! 🤩', author_name: 'Casper', post_time: new Date(2022, 6, 11, 1, 2, 3)},
    ].map((item) => (<CommentEntry comment={item} key={item.id} />));

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