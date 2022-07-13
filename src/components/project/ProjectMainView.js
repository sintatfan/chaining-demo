import {useContext} from "react";
import {ProjectNodesContext} from "./ProjectDataWrapper";
import timelineImg from "../../images/home_timeline.svg";
import cloneDeep from "lodash/cloneDeep";
import NodePreview, {openPreview} from "../view/NodePreview";
import {useParams} from "react-router-dom";

/**
 * A recursive function to convert the array of nodes to the root node with populated children
 * @param nodes
 * @returns {*}
 */
function nodesToTree(nodes) {
    const root = nodes.find(i => !i.parent);

    const handleNode = function (data) {
        const node = cloneDeep(data);

        if (node.children) {
            node.children = node.children.map(function (id) {
                const n = nodes.find(i => i.id === id);
                return handleNode(n);
            });
        }

        return node;
    }

    return handleNode(root);
}

/**
 *
 * @param node
 * @param i Index of the current node
 * @param n Total number of nodes on the same level
 * @returns {JSX.Element}
 * @constructor
 */
function TreeNode({node, i, n = 0}) {
    const children = node.children
        ? node.children.map((subnode, i) => <TreeNode key={subnode.id} node={subnode} i={i} n={node.children.length} />)
        : <></>;

    const x = 320 + node.dx;
    const y = -(100 * n / 2) + i * 150 + node.dy;

    const dim = node.view_count * 2;

    const {projectId} = useParams();

    return (
        <g transform={`translate(${x} ${y})`}>
            {children}
            {node.parent ? <path className="link" d={`M${-x},${-y}C${-x/2},${-y},${-x/2},0,0,0`}></path> : <></>}
            {/*<circle cx={0} cy={0} r={node.view_count}></circle>*/}
            <foreignObject x={-dim/2} y={-dim/2}
                           width={dim}
                           height={dim}>
                <div className="node-video-wrapper" onClick={() => openPreview(projectId, node.id)}>
                    <video xmlns="http://www.w3.org/1999/xhtml"
                           loop="loop" autoPlay="autoPlay"
                           playsInline="playsInline" muted="muted">
                        <source src={node.cover_url} type="video/mp4" />
                    </video>
                </div>
            </foreignObject>
        </g>
    );
}

function TreeView() {
    const nodes = useContext(ProjectNodesContext);
    const rootNode = nodesToTree(nodes);

    const w = 1920;
    const h = 1080;

    return (
        <div className="project-tree">
            <svg viewBox={`0 0 ${w} ${h}`}>
                <g transform={`translate(-260 ${h / 2})`}>
                    <TreeNode node={rootNode} i={0} n={1} />
                </g>
            </svg>
        </div>
    );
}

function TimelineView() {
    return (
        <div className="project-timeline">
            <img src={timelineImg} alt="" />
        </div>
    );
}

export default function ProjectMainView() {
    return (
        <div className="project-view__main">
            <TreeView />
            <TimelineView />
            <NodePreview />
        </div>
    )
}