import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/store";

import App from "./App";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
    <StrictMode>
        <Provider store={ store }>
            <QueryClientProvider client={ queryClient }>
                <App />
            </QueryClientProvider>
        </Provider>
    </StrictMode>,
);
