import {Box, Button, Divider, Group, MantineProvider, Modal, PasswordInput, Text, TextInput} from "@mantine/core";
import {useState} from "react";
import {lightTheme, logoLight, themeStyles} from "../../theme";
import {useForm, zodResolver} from "@mantine/form";
import { z } from 'zod';
import {passwordSignIn, signInWithGitHub, signInWithGoogle} from '../../firebase';
import {BrandGithub, BrandGoogle} from "tabler-icons-react";
import {showNotification} from "@mantine/notifications";

function SignInForm() {
    const [submitting, setSubmitting] = useState(false);

    const schema = z.object({
        email: z.string().email({ message: 'Invalid email address' }),
        password: z.string().min(6, { message: 'Your password must contain at least 6 characters' }),
    });
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },
        schema: zodResolver(schema),
    });
    const formHandler = form.onSubmit(async (values) => {
        try {
            setSubmitting(true);
            const user = await passwordSignIn(values.email, values.password);
            console.log(user);
        } catch (e) {
            showNotification({color: 'red', message: e});
        } finally {
            setSubmitting(false);
        }
    });

    return (
        <form onSubmit={formHandler} className="login-form">
            <TextInput
                variant="filled" size="md" mb="sm"
                placeholder="Email" required
                {...form.getInputProps('email')} />
            <PasswordInput
                variant="filled" size="md" mb="sm"
                placeholder="Password" required
                {...form.getInputProps('password')} />

            <Button fullWidth type="submit" size="md" mb="sm" loading={submitting}>
                Sign In
            </Button>

            <Text size="sm">
                Don't have an account?
                <Text variant="link" size="sm" ml="xs" component="a" href="#">Sign Up Now</Text>
            </Text>
        </form>
    );
}

function ThirdPartyLogin() {
    const socialLogin = function (fn) {
        return async () => {
            try {
                await fn();
            } catch (e) {
                showNotification({color: 'red', message: e});
            }
        };
    }

    return (
        <Group position="center" spacing="xs">
            <Button onClick={socialLogin(signInWithGoogle)} radius="xl"><BrandGoogle /></Button>
            <Button onClick={socialLogin(signInWithGitHub)} radius="xl"><BrandGithub /></Button>
        </Group>
    )
}

function LoginModalBody() {
    return (
        <Box className="login-dialog" px="sm" mb="xl">
            <img src={logoLight} alt="Logo" />
            <Text size="sm" mt="md" mb="md">Sign in to co-create the digital work.</Text>

            <SignInForm />

            <Divider my="sm" />

            <Text size="sm" mb="sm">Continue with social media</Text>
            <ThirdPartyLogin />
        </Box>
    );
}

export default function HeaderGuest() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <MantineProvider theme={lightTheme} styles={themeStyles}>
                <Modal opened={opened} onClose={() => setOpened(false)} radius={10}>
                    <LoginModalBody />
                </Modal>
            </MantineProvider>

            <Button onClick={() => setOpened(true)}>
                Login
            </Button>
        </>
    );
}
