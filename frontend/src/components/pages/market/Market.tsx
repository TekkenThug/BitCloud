import MarketHeader from "./header/MarketHeader";
import MarketTable from "./table/MarketTable";
import MarketBlog from "./blog/MarketBlog";

const Market = () => {
	return (
		<>
			<MarketHeader />

			<MarketTable />

			<MarketBlog />
		</>
	);
};

export default Market;
