import React, { Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
// styles
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.min.css"
import "./index.css";
// custom components
import ErrorBoundary from "./components/Error/ErrorBoundary";
import Loading from "./components/common/Loading";
import App from "./App";
import { ToastContainer } from "react-toastify";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={""}>
      <Suspense fallback={<Loading />}>
        <App />
        <ToastContainer />
      </Suspense>
    </ErrorBoundary>
  </BrowserRouter>
);
