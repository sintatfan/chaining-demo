import {Avatar, Box, Group, Menu, ThemeIcon, Title, UnstyledButton} from "@mantine/core";
import {CaretDown, CirclePlus, Logout, User} from "tabler-icons-react";
import {forwardRef} from "react";

const MenuActivator = forwardRef(({ image, name, email, icon, ...others }, ref) => {
    return (
        <UnstyledButton ref={ref} {...others}>
            <Group spacing="xs">
                <Avatar src={null} color="red" size={48} radius="xl">A</Avatar>
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

function UserProgress() {
    return (
        <Box>
            <Title order={6}>Chances</Title>
            <Group spacing="xs">
                <ThemeIcon><CirclePlus size={16} /></ThemeIcon>
                <ThemeIcon color="gray"><CirclePlus size={16} /></ThemeIcon>
                <ThemeIcon color="gray"><CirclePlus size={16} /></ThemeIcon>
            </Group>
        </Box>
    );
}

export default function HeaderUser() {
    return (
        <Group spacing="xl">
            <UserProgress />
            <UserAvatar />
        </Group>
    );
}