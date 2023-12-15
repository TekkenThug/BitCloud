import MarketHeader from "./header/MarketHeader.tsx";
import MarketTable from "./table/MarketTable.tsx";
import MarketBlog from "./blog/MarketBlog.tsx";

import DefaultLayout from "@/components/layouts/DefaultLayout.tsx";

const MarketPage = () => {
	return (
		<DefaultLayout>
			<MarketHeader />

			<MarketTable />

			<MarketBlog />
		</DefaultLayout>
	);
};

export default MarketPage;
