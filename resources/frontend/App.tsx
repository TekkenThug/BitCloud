import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthPage from "@/components/pages/auth/AuthPage";
import HomePage from "@/components/pages/home/HomePage";
import MarketPage from "@/components/pages/market/MarketPage";

import "@/assets/styles/global.scss";
import styles from "./App.module.scss";

const queryClient = new QueryClient();

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/market",
            element: <MarketPage />,
        },
        {
            path: "/auth",
            element: <AuthPage />,
        },
    ]);

    return (
        <div className={styles.App}>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </div>
    );
};

export default App;
