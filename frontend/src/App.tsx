import Header from "@/components/common/header/Header";
import Market from "@/components/pages/market/Market";
import Footer from "@/components/common/footer/Footer";

import styles from "./App.module.scss";
import "@/assets/styles/global.scss";

const App = () => {
	return (
		<div className={styles.App}>
			<Header />

			<main className={styles.main}>
				<Market />
			</main>

			<Footer />
		</div>
	);
};

export default App;
