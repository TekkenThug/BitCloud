import { createBrowserRouter } from "react-router-dom";

import Protected from "@/components/common/protected/Protected.tsx";
import AuthPage from "@/components/pages/auth/AuthPage.tsx";
import HomePage from "@/components/pages/home/HomePage.tsx";
import MarketPage from "@/components/pages/market/MarketPage.tsx";

const createRouter = (isAllowed: boolean) =>
    createBrowserRouter([
        {
            path: "/",
            element: <HomePage />,
        },
        {
            path: "/market",
            element: (
                <Protected isAllowed={isAllowed}>
                    <MarketPage />
                </Protected>
            ),
        },
        {
            path: "/auth",
            element: <AuthPage />,
        },
    ]);

export default createRouter;
