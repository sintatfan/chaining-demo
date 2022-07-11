import {useNavigate} from "react-router-dom";
import {Center, Loader} from "@mantine/core";
import {useEffect} from "react";

export default function HomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        // Redirect to project #1 (with hard-coded data in the DB)
        navigate('/project/1', { replace: true });
    });

    // Show loading spinner
    return (
        <Center style={{height: '100%'}}>
            <Loader size={64} />
        </Center>
    );
}