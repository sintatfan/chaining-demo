import './App.css';
import { Outlet } from "react-router-dom";
import {AppShell, Global, MantineProvider} from '@mantine/core';
import {appStyles, globalStyles, theme, themeStyles} from "./theme";
import AppHeader from "./components/layout/Header";

function App() {
  return (
      <MantineProvider theme={theme} styles={themeStyles} withNormalizeCSS withGlobalStyles>
          <Global styles={globalStyles} />
          <AppShell header={<AppHeader />} styles={appStyles} fixed>
              <Outlet />
          </AppShell>
      </MantineProvider>
  );
}

export default App;
