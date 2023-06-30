import React from 'react';
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Navigation from './Naviagtions/navigation';
import { BrowserRouter } from 'react-router-dom';

const rootElement = document.getElementById("container");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Navigation />
    </BrowserRouter>
  </StrictMode>
);