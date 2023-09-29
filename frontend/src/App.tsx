import { createBrowserRouter, RouterProvider } from "react-router-dom";

import MarketPage from "@/components/pages/market/MarketPage";
import AuthPage from "@/components/pages/auth/AuthPage";

import styles from "./App.module.scss";
import "@/assets/styles/global.scss";

const App = () => {
	const router = createBrowserRouter([
		{
			path: "/",
			element: <MarketPage />,
		},
		{
			path: "/auth",
			element: <AuthPage />
		}
	]);

	return (
		<div className={styles.App}>
			<RouterProvider router={router} />
		</div>
	);
};

export default App;
