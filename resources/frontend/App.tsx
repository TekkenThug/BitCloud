import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import MarketPage from "@/components/pages/market/MarketPage.tsx";
import AuthPage from "@/components/pages/auth/AuthPage.tsx";

import styles from "./App.module.scss";
import "@/assets/styles/global.scss";

const queryClient = new QueryClient();

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
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
