import DefaultLayout from "@/components/layouts/DefaultLayout";

import HomeBecome from "./become/HomeBecome.tsx";
import HomeHeader from "./header/HomeHeader.tsx";
import HomeNews from "./news/HomeNews.tsx";
import HomeTrend from "./trend/HomeTrend.tsx";

const HomePage = () => {
    const scrollableId = "news";

    return (
        <DefaultLayout>
            <HomeHeader id={scrollableId} />

            <HomeNews id={scrollableId} />

            <HomeTrend />

            <HomeBecome />
        </DefaultLayout>
    );
};

export default HomePage;
