import DefaultLayout from "@/components/layouts/DefaultLayout";

import HomeBecome from "./become/HomeBecome.tsx";
import HomeHeader from "./header/HomeHeader.tsx";
import HomeNews from "./news/HomeNews.tsx";
import HomeSlideshow from "./slideshow/HomeSlideshow.tsx";
import HomeTrend from "./trend/HomeTrend.tsx";
import HomeWork from "./work/HomeWork.tsx";

const HomePage = () => {
    const scrollableId = "news";

    return (
        <DefaultLayout>
            <HomeHeader id={scrollableId} />

            <HomeNews id={scrollableId} />

            <HomeTrend />

            <HomeBecome />

            <HomeSlideshow />

            <HomeWork />
        </DefaultLayout>
    );
};

export default HomePage;
