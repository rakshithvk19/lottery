import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { MetaMaskProvider } from "@metamask/sdk-react";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MetaMaskProvider
      debug={true}
      sdkOptions={{
        dappMetadata: {
          name: "Example React Dapp",
          url: window.location.href,
        },
      }}
    >
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </MetaMaskProvider>
  </React.StrictMode>
);
