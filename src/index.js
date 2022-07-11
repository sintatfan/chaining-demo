import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import EditorPage from "./pages/Editor";
import './firebase';
import ProjectHomePage from "./pages/ProjectHome";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      {/* React Router Configuration */}
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<HomePage />} />
                  <Route path="project/:projectId" element={<ProjectHomePage />} />
                  <Route path="project/:projectId/:nodeId/fork" element={<EditorPage />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
