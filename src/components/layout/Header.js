import {Container, Header} from "@mantine/core";
import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";
import {logoDark} from "../../theme";
import {Link} from "react-router-dom";

function HeaderProfile() {
    // TODO: consider auth state
    const isUser = true;
    return isUser ? (<HeaderUser />) : (<HeaderGuest />);
}

export default function AppHeader() {
    return (
        <Header height={78} className="app-header">
            <Container fluid className="app-header-container">
                <Link to="/">
                    <img src={logoDark} alt="Logo" />
                </Link>
                <HeaderProfile />
            </Container>
        </Header>
    );
}