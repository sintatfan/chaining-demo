import Editor, {useMonaco} from "@monaco-editor/react";
import {useEffect} from "react";
import raw from "raw.macro";
import {Title} from "@mantine/core";

export default function EditorPage() {
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

    return (
        <div>
            <Title>Drag to Code</Title>
            <Editor height="500px" theme="vs-dark"
                    defaultLanguage="javascript" defaultValue="console.log('hello world');" />
        </div>
    );
}