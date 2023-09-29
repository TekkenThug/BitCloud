import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Header from "@/components/common/header/Header";
import MarketPage from "@/components/pages/market/MarketPage";
import AuthPage from "@/components/pages/auth/AuthPage";
import Footer from "@/components/common/footer/Footer";

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
			<Header />

			<main className={styles.main}>
				<RouterProvider router={router} />
			</main>

			<Footer />
		</div>
	);
};

export default App;
