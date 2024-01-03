import DefaultLayout from "@/components/layouts/DefaultLayout";

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
        </DefaultLayout>
    );
};

export default HomePage;