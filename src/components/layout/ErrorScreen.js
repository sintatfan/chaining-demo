import {Center, Text} from "@mantine/core";
import {MoodSad} from "tabler-icons-react";

export default function ErrorScreen({message}) {
    return (
        <Center style={{height: '100%'}}>
            <div style={{textAlign: 'center'}}>
                <MoodSad size={128} />
                <Text size="xl">{message}</Text>
            </div>
        </Center>
    );
}