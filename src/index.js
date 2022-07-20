import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import EditorPage from "./pages/Editor";
import './plugins/firebase';
import './plugins/dayjs';
import ProjectHomePage from "./pages/ProjectHome";
// import ImportDataTool from "./pages/ImportDataTool";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* React Router Configuration */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<HomePage />} />
                  <Route path="project/:projectId" element={<ProjectHomePage />} />
                  <Route path="project/:projectId/timeline" element={<ProjectHomePage />} />
                  <Route path="project/:projectId/:nodeId" element={<EditorPage />} />
                  {/*<Route path="import-data" element={<ImportDataTool />} />*/}
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
