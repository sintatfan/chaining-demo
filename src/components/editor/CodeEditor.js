import Editor, {useMonaco} from "@monaco-editor/react";
import raw from "raw.macro";
import {useEffect, useRef, useState} from "react";
import {Box, Button, Card, Group, Switch} from "@mantine/core";
import {PlayerPlay} from "tabler-icons-react";
import {insertTextAtPos, MonacoDragNDropProvider} from "./MonacoDragAndDropProvider";

const onDrop = function(e, target, instance) {
    const text = e.dataTransfer.getData('text');
    if (text && instance) {
        insertTextAtPos(instance, text+"\n", [target.position.lineNumber, target.position.column], true);
    }
}

export function CodeEditor() {
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        editorRef.current = editor;
    }

    const monaco = useMonaco();
    useEffect(() => {
        // Load p5 type definitions with raw macro
        const p5types = raw("@types/p5/global.d.ts");

        // Add p5 as an external library of Monaco
        monaco?.languages.typescript.javascriptDefaults.addExtraLib(
            p5types,
            'node_modules/@types/p5/global.d.ts'
        );
    });

    const dragProvider = new MonacoDragNDropProvider(onDrop, () => editorRef.current );

    return (
        <div {...dragProvider.props} className="editor-wrapper">
            <Editor theme="vs-dark" height="100%" options={{minimap: {enabled: false}}}
                    onMount={handleEditorDidMount}
                    defaultLanguage="javascript" defaultValue="console.log('hello world');" />
        </div>
    );
}

export function EditorCard() {
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
