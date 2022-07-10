import './App.css';
import { Outlet } from "react-router-dom";
import {AppShell, Global, MantineProvider} from '@mantine/core';
import {appStyles, globalStyles, theme, themeStyles} from "./theme";
import AppHeader from "./components/layout/Header";
import {NotificationsProvider} from "@mantine/notifications";

function App() {
  return (
      <MantineProvider theme={theme} styles={themeStyles} withNormalizeCSS withGlobalStyles>
          <Global styles={globalStyles} />
          <NotificationsProvider position="top-right">
              <AppShell header={<AppHeader />} styles={appStyles} fixed>
                  <Outlet />
              </AppShell>
          </NotificationsProvider>
      </MantineProvider>
  );
}

export default App;
