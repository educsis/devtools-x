import "./index.css";

import { MantineProvider } from "@mantine/core";
import { Global } from "@mantine/core";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import { AppContextProvider } from "./Contexts/AppContextProvider";
import theme from "./theme";

const root = createRoot(document.getElementById("root") as Element);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Global
        styles={(theme) => ({
          body: {
            ...theme.fn.fontStyles(),
          },
        })}
      ></Global>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </MantineProvider>
    </BrowserRouter>
  </React.StrictMode>
);
