import {Card, Group, UnstyledButton} from "@mantine/core";
import {BrandFacebook, BrandTwitter, BrandWhatsapp} from "tabler-icons-react";

export default function ShareBar() {
    return (
        <Card sx={(theme) => ({ backgroundColor: theme.colors.gray[4]})} py={5}>
            <Group>
                <span>Share</span>
                <UnstyledButton>
                    <BrandWhatsapp />
                </UnstyledButton>
                <UnstyledButton>
                    <BrandFacebook />
                </UnstyledButton>
                <UnstyledButton>
                    <BrandTwitter />
                </UnstyledButton>
            </Group>
        </Card>
    );
}