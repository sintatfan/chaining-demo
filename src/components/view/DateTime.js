import {fullDateTime, humanDateTime} from "../../plugins/dayjs";
import {Text, Tooltip} from "@mantine/core";
import {CalendarTime} from "tabler-icons-react";

export function MetaDateTime({date}) {
    return (
        <Tooltip label={fullDateTime(date)}>
            <Text size="xs"><CalendarTime size={14} /> {humanDateTime(date)}</Text>
        </Tooltip>
    );
}