import MarketHeader from "./header/MarketHeader";
import MarketTable from "./table/MarketTable";
import MarketBlog from "./blog/MarketBlog";

import DefaultLayout from "@/components/layouts/DefaultLayout";

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
