import {Eye, GitFork, Heart, User} from "tabler-icons-react";
import {Box, Button, Grid, Group, MantineProvider, Modal, Skeleton, Text} from "@mantine/core";
import {useState} from "react";
import {lightTheme, themeStyles} from "../../theme";
import {CommentSection} from "./Comment";
import {MetaDateTime} from "./DateTime";
import ShareBar from "./ShareBar";
import {Link} from "react-router-dom";

function ModalHeader({projectId, nodeId}) {
    return (
        <Group position="apart" align="start" noWrap className="node-details__header" mb="sm">
            <div>
                <Text size="sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum feugiat sodales lorem cursus porttitor. Mauris iaculis aliquet luctus. Duis nec elementum erat, et fermentum nisi. Phasellus at erat pretium, auctor dui vel, vulputate sem. Sed mi lorem, vestibulum et accumsan ullamcorper, ornare ut nunc. Nam interdum hendrerit felis a molestie.</Text>
                <Group>
                    <Text size="xs"><User size={14} /> Name</Text>
                    <MetaDateTime date={new Date()} />
                </Group>
            </div>

            <div className="node-details__header__actions">
                <Button mr="xs" component={Link} to={`/project/${projectId}/${nodeId}?action=fork`} target="_blank">
                    <GitFork /> Fork
                </Button>
                <Button color="pink"><Heart /></Button>
            </div>
        </Group>
    )
}

function WorkPreview() {
    return (
        <Box mb="sm">
            <Skeleton width="100%" height={300}></Skeleton>
        </Box>
    );
}

export function NodeDetailsModal({projectId, nodeId, state, onClose}) {
    return (
        <MantineProvider theme={lightTheme} styles={themeStyles}>
            <Modal opened={state} onClose={onClose} zIndex={300} size="xl" title="View Work">
                <ModalHeader projectId={projectId} nodeId={nodeId} />
                <WorkPreview />
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
                This is node details dialog
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