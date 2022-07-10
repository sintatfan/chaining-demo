import {Box, Button, Divider, MantineProvider, Modal, PasswordInput, Text, TextInput} from "@mantine/core";
import {useState} from "react";
import {lightTheme, logoLight} from "../../theme";
import {useForm, zodResolver} from "@mantine/form";
import { z } from 'zod';

function SignInForm() {
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
    const formHandler = form.onSubmit((values) => console.log(values));

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

            <Button fullWidth type="submit" size="md" mb="sm">
                Sign In
            </Button>

            <Text size="sm">
                Don't have an account?
                <Button variant="subtle">Sign Up Now</Button>
            </Text>
        </form>
    );
}

function LoginModalBody() {
    return (
        <Box className="login-dialog" px="sm">
            <img src={logoLight} alt="Logo" />
            <Text size="sm" mt="md" mb="md">Sign in to co-create the digital work.</Text>

            <SignInForm />

            <Divider my="sm" />

            {/* Social Login */}
            <div>
                <Text size="sm">Continue with social media</Text>
            </div>
        </Box>
    );
}

export default function HeaderGuest() {
    const [opened, setOpened] = useState(false);

    return (
        <>
            <MantineProvider theme={lightTheme}>
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
