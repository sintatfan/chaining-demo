import {Avatar, Group, Menu, Stack, UnstyledButton} from "@mantine/core";
import {CaretDown, Logout, User} from "tabler-icons-react";
import {forwardRef} from "react";

const MenuActivator = forwardRef(({ image, name, email, icon, ...others }, ref) => {
    return (
        <UnstyledButton ref={ref} {...others}>
            <Group spacing="xs">
                <Avatar src={null} color="red" radius="xl">A</Avatar>
                <CaretDown size={16} />
            </Group>
        </UnstyledButton>
    );
});

function UserAvatar() {
    return (
        <Menu control={<MenuActivator />}>
            <Menu.Label>Hello! Anthony</Menu.Label>
            <Menu.Item icon={<User size={16} />}>My Profile</Menu.Item>
            <Menu.Item icon={<Logout size={16} />}>Logout</Menu.Item>
        </Menu>
    );
}

export default function HeaderUser() {
    return (
        <Stack>
            <UserAvatar />
        </Stack>
    );
}