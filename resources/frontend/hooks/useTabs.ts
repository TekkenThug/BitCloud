import { useState } from "react";

const useTabs = (tabs: string[], activeTab?: string) => {
    const [_tabs] = useState(tabs);
    const [_activeTab, _setActiveTab] = useState(activeTab || _tabs[0]);

    return {
        tabs: _tabs,
        activeTab: _activeTab,
        setTab: _setActiveTab,
    };
};

export default useTabs;
