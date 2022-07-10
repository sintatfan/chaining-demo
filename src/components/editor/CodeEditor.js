import Editor, {useMonaco} from "@monaco-editor/react";
import raw from "raw.macro";
import {useEffect} from "react";

export default function CodeEditor() {
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
        <Editor theme="vs-dark" height="100%" options={{minimap: {enabled: false}}}
                defaultLanguage="javascript" defaultValue="console.log('hello world');" />
    );
}