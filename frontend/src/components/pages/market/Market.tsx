import MarketHeader from "./header/MarketHeader";
import MarketTable from "./table/MarketTable";
import MarketBlog from "./blog/MarketBlog";

const Market = () => {
	return (
		<div>
			<MarketHeader />

			<MarketTable />

			<MarketBlog />
		</div>
	);
};

export default Market;
