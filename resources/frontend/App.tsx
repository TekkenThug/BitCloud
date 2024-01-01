import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import AuthPage from "@/components/pages/auth/AuthPage";
import HomePage from "@/components/pages/home/HomePage";
import MarketPage from "@/components/pages/market/MarketPage";

import "@/assets/styles/global.scss";

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
        <div className="app">
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={router} />
            </QueryClientProvider>
        </div>
    );
};

export default App;
