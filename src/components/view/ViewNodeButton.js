import {Eye, GitFork, Heart, User} from "tabler-icons-react";
import {AspectRatio, Button, Grid, Group, MantineProvider, Modal, Text} from "@mantine/core";
import {useState} from "react";
import {lightTheme, themeStyles} from "../../theme";
import {CommentSection} from "./Comment";
import {MetaDateTime} from "./DateTime";
import ShareBar from "./ShareBar";
import {Link} from "react-router-dom";
import {NodeContext, NodeDataWrapper} from "../project/ProjectDataWrapper";
import PreviewArea from "../preview/PreviewArea";

function ModalHeader({projectId, node}) {
    return (
        <Group position="apart" align="start" noWrap className="node-details__header" mb="sm">
            <div>
                <Text size="sm">{node.description}</Text>
                <Group>
                    <Text size="xs"><User size={14} /> {node.author_name}</Text>
                    <MetaDateTime date={node.post_time.toDate()} />
                </Group>
            </div>

            <div className="node-details__header__actions">
                <Button mr="xs" component={Link} to={`/project/${projectId}/${node.id}?action=fork`} target="_blank">
                    <GitFork /> Fork
                </Button>
                <Button color="pink"><Heart /></Button>
            </div>
        </Group>
    )
}

export function WorkPreview({videoUrl, ratio = 1}) {
    return (
        <AspectRatio ratio={ratio} className="work-preview">
            <video autoPlay muted playsInline loop>
                <source src={videoUrl} type="video/mp4" />
            </video>
        </AspectRatio>
    );
}

export function NodeDetailsModal({projectId, nodeId, state, onClose}) {
    return (
        <MantineProvider theme={lightTheme} styles={themeStyles}>
            <Modal opened={state} onClose={onClose} zIndex={300} size="xl" title="View Work">
                <NodeDataWrapper projectId={projectId} nodeId={nodeId}>
                    <NodeContext.Consumer>
                        {(node) => (
                            <>
                                <ModalHeader projectId={projectId} node={node} />
                                <div className="quickview__preview">
                                    <PreviewArea code={node.content} />
                                </div>
                                <Grid>
                                    <Grid.Col span={6}>
                                        <CommentSection />
                                    </Grid.Col>
                                    <Grid.Col span={6}>
                                        <Group>
                                            <ShareBar />
                                            <Button color="gray" component={Link} to={`/project/${projectId}/${nodeId}`} target="_blank">
                                                View code
                                            </Button>
                                        </Group>
                                    </Grid.Col>
                                </Grid>
                            </>
                        )}
                    </NodeContext.Consumer>
                </NodeDataWrapper>
            </Modal>
        </MantineProvider>
    );
}

export function ViewNodeButton({projectId, nodeId, onOpened}) {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <NodeDetailsModal
                projectId={projectId} nodeId={nodeId}
                state={opened} onClose={() => setOpened(false)}
            />
            <Button fullWidth component={Link} to={`/project/${projectId}/${nodeId}`} target="_blank">
                <Eye /> View
            </Button>
        </>
    );
}