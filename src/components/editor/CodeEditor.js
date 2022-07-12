import Editor, {useMonaco} from "@monaco-editor/react";
import raw from "raw.macro";
import {useCallback, useEffect, useRef, useState} from "react";
import {Box, Button, Card, Group, Switch} from "@mantine/core";
import {PlayerPlay} from "tabler-icons-react";
import {insertTextAtPos, MonacoDragNDropProvider} from "./MonacoDragAndDropProvider";
import Emitter from "../../emitter";
import debounce from 'lodash/debounce';

const onDrop = function(e, target, instance) {
    const text = e.dataTransfer.getData('text');
    if (text && instance) {
        insertTextAtPos(instance, "\n"+text+"\n", [target.position.lineNumber, target.position.column], true);
        instance.getAction('editor.action.formatDocument').run();
    }
}

const defaultContent = `function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  ellipse(width / 2, height / 2, 80, 80);
}`;

export function CodeEditor({value, onChange, onMount}) {
    const editorRef = useRef(null);
    function handleEditorDidMount(editor, monaco) {
        // here is the editor instance
        // you can store it in `useRef` for further usage
        editorRef.current = editor;

        typeof onMount === 'function' && onMount(editor, monaco);
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
                    defaultLanguage="javascript"
                    value={value}
                    onChange={onChange}
                    onMount={handleEditorDidMount}
            />
        </div>
    );
}

function runCode(code) {
    Emitter.emit('EDITOR.RUN_CODE', code);
}

export function EditorCard() {
    const [autoRefresh, setAutoRefresh] = useState(false);
    const [code, setCode] = useState(defaultContent);

    // Handle code change event of the code editor
    const onCodeChange = function (v) {
        // Update state
        setCode(v);

        // Trigger auto preview, with a few seconds of debounce
        if (autoRefresh) {
            debouncedRunCode(v);
        }
    };

    const debounced = debounce(runCode, 1000);
    const debouncedRunCode = useCallback((newValue) => {
        debounced(newValue);
    }, [code]);

    return (
        <>
            <Card py="xs">
                <Group position="apart">
                    <Button radius="xl" onClick={() => runCode(code)}>
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
                <CodeEditor
                    value={code}
                    onChange={onCodeChange}
                    onMount={() => runCode(code)}
                />
            </Box>
        </>
    );
}
