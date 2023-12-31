import HomeHeader from "./header/HomeHeader";
import HomeNews from "./news/HomeNews";

import DefaultLayout from "@/components/layouts/DefaultLayout";

const HomePage = () => {
    const scrollableId = "news";
    
    return (
        <DefaultLayout>
            <HomeHeader id={scrollableId} />

            <HomeNews id={scrollableId} />
        </DefaultLayout>
    );
};

export default HomePage;