import {Avatar, Box, Group, Menu, ThemeIcon, Title, UnstyledButton} from "@mantine/core";
import {CaretDown, CircleDashed, CirclePlus, Logout, User} from "tabler-icons-react";
import {forwardRef} from "react";
import {logout} from "../../firebase";

const MenuActivator = forwardRef(({ avatar, name, ...others }, ref) => {
    return (
        <UnstyledButton ref={ref} {...others}>
            <Group spacing="xs">
                <Avatar src={avatar} color="red" size={46} radius="xl">{name.substring(0, 1)}</Avatar>
                <CaretDown size={16} />
            </Group>
        </UnstyledButton>
    );
});

function UserAvatar({user}) {
    return (
        <Menu control={<MenuActivator avatar={user.avatar} name={user.name} />}>
            <Menu.Label>Hello! {user.name}</Menu.Label>
            <Menu.Item icon={<User size={16} />}>My Profile</Menu.Item>
            <Menu.Item icon={<Logout size={16} />} onClick={logout}>Logout</Menu.Item>
        </Menu>
    );
}

function UserProgress() {
    return (
        <Box>
            <Title order={6}>Chances</Title>
            <Group spacing="xs">
                <ThemeIcon><CirclePlus size={16} /></ThemeIcon>
                <ThemeIcon color="gray"><CircleDashed size={16} /></ThemeIcon>
                <ThemeIcon color="gray"><CircleDashed size={16} /></ThemeIcon>
            </Group>
        </Box>
    );
}

export default function HeaderUser({user}) {
    return (
        <Group spacing="xl">
            <UserProgress />
            <UserAvatar user={user} />
        </Group>
    );
}