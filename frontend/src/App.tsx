import Header from "components/common/header/Header";
import Market from "components/pages/market/Market";
import Footer from "components/common/footer/Footer";

import "assets/styles/global.scss";

const App = () => {
	return (
		<div>
			<Header />

			<Market />

			<Footer />
		</div>
	);
};

export default App;
