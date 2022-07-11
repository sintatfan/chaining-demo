import {createRef, useEffect} from "react";

export default function PreviewArea({code}) {
    const iframeRef = createRef();

    return (
        <iframe src="/sandbox.html" sandbox="allow-scripts"
                className="preview-iframe" ref={iframeRef}></iframe>
    );
}