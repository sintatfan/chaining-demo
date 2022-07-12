import {useEffect, useRef} from "react";
import raw from "raw.macro";

const codeTemplate = raw("./sandbox.html");

function createSandboxContent(code) {
    return codeTemplate.replace('/* code */', code);
}

export default function PreviewArea({code}) {
    const iframeRef = useRef();

    useEffect(() => {
        iframeRef.current.srcdoc = createSandboxContent(code);
    }, [code]);

    return (
        <iframe sandbox="allow-scripts" title="Code preview area"
                className="preview-iframe" ref={iframeRef}></iframe>
    );
}