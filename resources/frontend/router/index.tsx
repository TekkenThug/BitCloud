import { createBrowserRouter } from "react-router-dom";

import Protected from "@/components/common/protected/Protected.tsx";
import AuthPage from "@/components/pages/auth/AuthPage.tsx";
import HomePage from "@/components/pages/home/HomePage.tsx";
import MarketPage from "@/components/pages/market/MarketPage.tsx";
import SettingsProfile from "@/components/pages/settings/profile/SettingsProfile.tsx";
import SettingsPage from "@/components/pages/settings/SettingsPage.tsx";

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
        {
            path: "/settings",
            element: (
                <Protected isAllowed={isAllowed}>
                    <SettingsPage />
                </Protected>
            ),
            children: [
                {
                    path: "profile",
                    id: "profile",
                    element: <SettingsProfile />,
                },
            ],
        },
    ]);

export default createRouter;
