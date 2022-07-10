import './App.css';
import { Outlet } from "react-router-dom";
import {AppShell, MantineProvider} from '@mantine/core';
import {appStyles, theme} from "./theme";
import AppHeader from "./components/layout/Header";

function App() {
  return (
      <MantineProvider theme={theme} withNormalizeCSS withGlobalStyles>
          <AppShell header={<AppHeader />} styles={appStyles} fixed>
              <Outlet />
          </AppShell>
      </MantineProvider>
  );
}

export default App;
