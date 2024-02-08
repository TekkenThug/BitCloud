import { FC, ReactNode } from "react";

import Footer from "@/components/common/footer/Footer.tsx";
import Header from "@/components/common/header/Header.tsx";

const DefaultLayout: FC<{ children: ReactNode }> = ({ children }) => {
    return (
        <>
            <Header />

            <main className="main">
                { children }
            </main>

            <Footer />
        </>
    );
};

export default DefaultLayout;
