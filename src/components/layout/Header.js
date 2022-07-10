import {Container, Header} from "@mantine/core";
import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";
import {logoDark} from "../../theme";

function HeaderProfile() {
    // TODO: consider auth state
    const isUser = false;
    return isUser ? (<HeaderUser />) : (<HeaderGuest />);
}

export default function AppHeader() {
    return (
        <Header height={78} className="app-header">
            <Container fluid className="app-header-container">
                <img src={logoDark} alt="Logo" />
                <HeaderProfile />
            </Container>
        </Header>
    );
}