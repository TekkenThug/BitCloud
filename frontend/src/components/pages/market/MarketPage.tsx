import MarketHeader from "./header/MarketHeader";
import MarketTable from "./table/MarketTable";
import MarketBlog from "./blog/MarketBlog";

const MarketPage = () => {
	return (
		<>
			<MarketHeader />

			<MarketTable />

			<MarketBlog />
		</>
	);
};

export default MarketPage;
