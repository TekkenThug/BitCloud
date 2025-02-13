import { useEffect, useState } from "react";
import { Outlet, useMatches, useNavigate } from "react-router-dom";

import { Breadcrumb } from "@/types";

import DefaultLayout from "@/components/layouts/DefaultLayout.tsx";
import SettingsHeader from "@/components/pages/settings/header/SettingsHeader.tsx";
import SettingsSidebar from "@/components/pages/settings/sidebar/SettingsSidebar.tsx";

import styles from "./SettingsPage.module.scss";

const TITLES: Record<string, string> = {
    profile: "Profile info",
    referrals: "Referrals",
};

const SettingsPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        navigate("/settings/profile");
    }, []);

    const [title, setTitle] = useState("");
    const matches = useMatches();
    const [breadcrumbs, setBreadcrumbs] = useState<Breadcrumb[]>([]);
    useEffect(() => {
        const matchedTitle = matches.find((item) => TITLES[item.id] !== undefined);

        if (matchedTitle) {
            setTitle(TITLES[matchedTitle.id]);
            setBreadcrumbs([
                { link: "/", text: "Home" },
                { link: matchedTitle.id, text: TITLES[matchedTitle.id] },
            ]);
        }
    }, [matches]);

    return (
        <DefaultLayout>
            <SettingsHeader
                title={title}
                breadcrumbs={breadcrumbs}
            />

            <section className={styles.content}>
                <div className="container">
                    <div className={styles.wrapper}>
                        <SettingsSidebar />

                        <div className={styles.routeSection}>
                            <Outlet />
                        </div>
                    </div>
                </div>
            </section>
        </DefaultLayout>
    );
};

export default SettingsPage;
