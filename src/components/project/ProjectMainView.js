import {useCallback, useContext, useState} from "react";
import Tree from 'react-d3-tree';
import {ProjectContext} from "./ProjectDataWrapper";

const useCenteredTree = () => {
    const [translate, setTranslate] = useState({ x: 0, y: 0 });
    const containerRef = useCallback((containerElem) => {
        if (containerElem !== null) {
            const { width, height } = containerElem.getBoundingClientRect();
            setTranslate({ x: width / 2, y: height / 2 });
        }
    }, []);
    return [translate, containerRef];
};


function TreeView() {
    const project = useContext(ProjectContext);
    const [translate, containerRef] = useCenteredTree();
    console.log(project);

    const orgChart = {
        name: 'CEO',
        children: [
            {
                name: 'Manager',
                attributes: {},
                children: [
                    {
                        name: 'Foreman',
                        attributes: {},
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                    {
                        name: 'Foreman',
                        attributes: {},
                        children: [
                            {
                                name: 'Worker',
                            },
                        ],
                    },
                ],
            },
        ],
    };

    const renderForeignObjectNode = ({
                                         nodeDatum,
                                         toggleNode,
                                         foreignObjectProps
                                     }) => (
        <g>
            <circle r={15}></circle>
            {/* `foreignObject` requires width & height to be explicitly set. */}
            <foreignObject {...foreignObjectProps}>
                <div style={{ border: "1px solid black", backgroundColor: "#dedede" }}>
                    <h3 style={{ textAlign: "center" }}>{nodeDatum.name}</h3>
                    {nodeDatum.children && (
                        <button style={{ width: "100%" }} onClick={toggleNode}>
                            {nodeDatum.__rd3t.collapsed ? "Expand" : "Collapse"}
                        </button>
                    )}
                </div>
            </foreignObject>
        </g>
    );

    const nodeSize = { x: 200, y: 200 };
    const foreignObjectProps = { width: nodeSize.x, height: nodeSize.y, x: 20 };

    return (
        <div className="project-tree" ref={containerRef}>
            <Tree
                data={orgChart}
                pathClassFunc={() => 'project-tree__link'}
                collapsible={false}
                translate={translate}
                renderCustomNodeElement={(rd3tProps) =>
                    renderForeignObjectNode({ ...rd3tProps, foreignObjectProps })
                }
            />
        </div>
    );
}

export default function ProjectMainView() {
    return (
        <div className="project-view__main">
            <TreeView />
        </div>
    )
}