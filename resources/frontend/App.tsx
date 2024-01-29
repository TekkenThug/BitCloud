import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RootState } from "@/stores/main";

import Protected from "@/components/common/protected/Protected";
import AuthPage from "@/components/pages/auth/AuthPage";
import HomePage from "@/components/pages/home/HomePage";
import MarketPage from "@/components/pages/market/MarketPage";

import "swiper/css/grid";
import "swiper/css";
import "@/assets/styles/global.scss";

const queryClient = new QueryClient();

const App = () => {
    const isAuth = useSelector((state: RootState) => state.auth.isAuth);
    const router = createBrowserRouter([
        {
            path: "/",
            element: <HomePage />
        },
        {
            path: "/market",
            element: <Protected isAllowed={ isAuth }><MarketPage /></Protected>,
        },
        {
            path: "/auth",
            element: <Protected isAllowed={ !isAuth }><AuthPage /></Protected>,
        },
    ]);

    return (
        <div className="app" id="bebra">
            <QueryClientProvider client={ queryClient }>
                <RouterProvider router={ router } />
            </QueryClientProvider>
        </div>
    );
};

export default App;
