import React from "react";

import Header from "@/components/common/header/Header";
import Footer from "@/components/common/footer/Footer";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<Header />

			<main className="main">
				{ children }
			</main>

			<Footer />
		</>
	);
};

export default DefaultLayout;
