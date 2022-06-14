import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import Loading from "./components/common/Loading";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SWRConfig } from "swr";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import ErrorBoundary from "./components/Error/ErrorBoundary";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={""} >
      <Suspense fallback={<Loading />}>
        <SWRConfig
          vlaue={{
            suspense: true,
            refreshInterval: 3000,
            revalidateOnFocus: false,
            errorRetryInterval: 5000,
            fetcher: (...args) => axios.get(args).then((res) => res.data),
          }}
        >
          <App />
        </SWRConfig>
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
