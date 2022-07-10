import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import HomePage from "./pages/Home";
import NotFound from "./pages/NotFound";
import EditorPage from "./pages/Editor";
import './firebase';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />}>
                  <Route index element={<HomePage />} />
                  <Route path="editor" element={<EditorPage />} />
                  <Route path="*" element={<NotFound />} />
              </Route>
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
