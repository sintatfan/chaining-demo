import {Container, Header} from "@mantine/core";
import HeaderGuest from "./HeaderGuest";
import HeaderUser from "./HeaderUser";
import {logoDark} from "../../theme";
import {Link} from "react-router-dom";
import {useAuthValue} from "../../plugins/auth";

function HeaderProfile() {
    const {currentUser} = useAuthValue();
    const isUser = !!currentUser;
    return isUser ? (<HeaderUser user={currentUser} />) : (<HeaderGuest />);
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