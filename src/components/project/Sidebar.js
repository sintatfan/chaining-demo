import CountDown from "../CountDown";
import {useContext} from "react";
import {Group, Text, UnstyledButton} from "@mantine/core";
import {Refresh, User} from "tabler-icons-react";
import {MetaDateTime} from "../view/DateTime";
import {WorkPreview} from "../view/ViewNodeButton";
import {ProjectContext} from "./ProjectDataWrapper";

function RandomNodeCard() {
    return (
        <div>
            <UnstyledButton>Random <Refresh size={16} /></UnstyledButton>
            <WorkPreview />
            <Group position="apart">
                <Text size="xs"><User size={14} /> {'Name name name'}</Text>
                <MetaDateTime date={new Date()} />
            </Group>
        </div>
    );
}

export default function Sidebar() {
    const project = useContext(ProjectContext);

    return (
        <div className="project-view__sidebar">
            <div className="project-view__sidebar__recommend">
                <RandomNodeCard />
            </div>
            <CountDown target={project.expiry_time.toDate()} />
        </div>
    );
}