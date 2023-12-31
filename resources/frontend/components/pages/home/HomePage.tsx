import HomeHeader from "./header/HomeHeader";
import HomeNews from "./news/HomeNews";

import DefaultLayout from "@/components/layouts/DefaultLayout";

const HomePage = () => {
    return (
        <DefaultLayout>
            <HomeHeader />

            <HomeNews />
        </DefaultLayout>
    );
};

export default HomePage;