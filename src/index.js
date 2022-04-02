import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";

import "./assets/stylesheets/index.css";

import App from "./views/App";
import Codeman from "./views/Codeman";

const container = document.querySelector("#container");
const root = ReactDOM.createRoot(container);

root.render(
  <BrowserRouter>
    <Helmet>
      <title>miniElection - small open source applications</title>
      <meta
        name="description"
        content="Small apps written to do a variety of cool coder related things."
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;200;300;400;500;600;700;800;900&display=swap"
        rel="stylesheet"
      />
    </Helmet>

    <Routes>
      <Route path="/" element={<App />} />
      <Route path="codeman" element={<Codeman />} />
    </Routes>
  </BrowserRouter>
);
