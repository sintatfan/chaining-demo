import './App.css';
import { Outlet } from "react-router-dom";
import {AppShell, Global, MantineProvider} from '@mantine/core';
import {appStyles, globalStyles, theme, themeStyles} from "./theme";
import AppHeader from "./components/layout/Header";
import {NotificationsProvider} from "@mantine/notifications";
import {AuthProvider} from "./auth";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {auth, extractUserInfo} from "./firebase";

function App() {
    // User auth state
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        // Update user state when Firebase Auth state is changed
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user ? extractUserInfo(user) : null);
        })
    }, [])

  return (
      <MantineProvider theme={theme} styles={themeStyles} withNormalizeCSS withGlobalStyles>
          <Global styles={globalStyles} />
          <NotificationsProvider position="top-right">
                <AuthProvider value={{currentUser}}>
                  <AppShell header={<AppHeader />} styles={appStyles} fixed>
                      <Outlet />
                  </AppShell>
                </AuthProvider>
          </NotificationsProvider>
      </MantineProvider>
  );
}

export default App;
