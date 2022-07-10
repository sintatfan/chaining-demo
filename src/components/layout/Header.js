import {Container, Header} from "@mantine/core";
import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";
import {logoDark} from "../../theme";
import {Link} from "react-router-dom";

function HeaderProfile() {
    // TODO: consider auth state
    const isUser = false;
    return isUser ? (<HeaderUser />) : (<HeaderGuest />);
}

export default function AppHeader() {
    return (
        <Header height={72} className="app-header">
            <Container fluid className="app-header-container">
                <Link to="/">
                    <img src={logoDark} alt="Logo" height={46} />
                </Link>
                <HeaderProfile />
            </Container>
        </Header>
    );
}