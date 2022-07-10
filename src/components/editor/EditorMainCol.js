import {Stack} from "@mantine/core";
import {EditorCard} from "./CodeEditor";
import ConsoleCard from "./Console";
import HistoryCard from "./History";

export default function EditorMainCol() {
    return (
        <Stack className="editor-page__grid-inner" spacing="xs">
            <HistoryCard />
            <EditorCard />
            <ConsoleCard />
        </Stack>
    );
}