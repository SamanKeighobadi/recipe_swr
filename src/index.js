import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import axios from 'axios'
import "bootstrap/dist/css/bootstrap.min.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <SWRConfig
      vlaue={{
        refreshInterval: 3000,
        revalidateOnFocus: false,
        errorRetryInterval: 5000,
        fetcher:(...args) => axios.get(args).then(res =>res.data),
      }}
    >
      <App />
    </SWRConfig>
  </BrowserRouter>
);
