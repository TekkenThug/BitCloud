import React from "react";

import Footer from "@/components/common/footer/Footer.tsx";
import Header from "@/components/common/header/Header.tsx";

const DefaultLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
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
