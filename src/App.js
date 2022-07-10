import './App.css';
import { Outlet } from "react-router-dom";
import {AppShell, Global, MantineProvider} from '@mantine/core';
import {appStyles, globalStyles, theme, themeStyles} from "./theme";
import AppHeader from "./components/layout/Header";
import {NotificationsProvider} from "@mantine/notifications";
import {AuthProvider} from "./auth";
import {useEffect, useState} from "react";
import {onAuthStateChanged} from 'firebase/auth';
import {auth} from "./firebase";

function App() {
    const [currentUser, setCurrentUser] = useState(null);
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
        })
    }, [])

  return (
      <AuthProvider value={{currentUser}}>
          <MantineProvider theme={theme} styles={themeStyles} withNormalizeCSS withGlobalStyles>
              <Global styles={globalStyles} />
              <NotificationsProvider position="top-right">
                  <AppShell header={<AppHeader />} styles={appStyles} fixed>
                      <Outlet />
                  </AppShell>
              </NotificationsProvider>
          </MantineProvider>
      </AuthProvider>
  );
}

export default App;
