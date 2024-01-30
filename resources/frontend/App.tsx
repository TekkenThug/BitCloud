import { useSelector } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Slide, ToastContainer, ToastOptions } from "react-toastify";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { RootState } from "@/stores/main";

import Protected from "@/components/common/protected/Protected";
import AuthPage from "@/components/pages/auth/AuthPage";
import HomePage from "@/components/pages/home/HomePage";
import MarketPage from "@/components/pages/market/MarketPage";

import "swiper/css/grid";
import "swiper/css";
import "react-toastify/dist/ReactToastify.css";
import "@/assets/styles/global.scss";

const queryClient = new QueryClient();

const toastOptions: ToastOptions = {
    theme: "dark",
    position: "bottom-right",
    pauseOnHover: false,
    draggable: false,
    transition: Slide,
};

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
        <div className="app">
            <QueryClientProvider client={ queryClient }>
                <RouterProvider router={ router } />
            </QueryClientProvider>

            <ToastContainer { ...toastOptions } />
        </div>
    );
};

export default App;
