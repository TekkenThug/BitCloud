import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { store } from "@/stores/main";

import AuthPage from "@/components/pages/auth/AuthPage";
import HomePage from "@/components/pages/home/HomePage";
import MarketPage from "@/components/pages/market/MarketPage";

import "swiper/css/grid";
import "swiper/css";
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
        <div className="app" id="bebra">
            <Provider store={ store }>
                <QueryClientProvider client={ queryClient }>
                    <RouterProvider router={ router } />
                </QueryClientProvider>
            </Provider>
        </div>
    );
};

export default App;
