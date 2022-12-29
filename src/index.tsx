import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UseReactQuery } from "./components/useReactQuery";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient();
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UseReactQuery>
        <App />
      </UseReactQuery>
    </QueryClientProvider>
    ,
  </React.StrictMode>
);
