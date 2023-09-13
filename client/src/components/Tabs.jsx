import React from 'react';

const Tabs = (props) => {
    const { allTabs, thisTab, setThisTab } = props;

    const tabStyle = (index) => {
        if (index === thisTab) {
        return "selectedTab";
    } else {
        return "nonSelectedTab";
    }
    }

    const setSelectedTab = (index) => {
    setThisTab(index);
    }
    return (
    <div>
        {
        allTabs.map((item, index) => (
            <div className={`tab ${ tabStyle(index) }`} onClick={(e) => setSelectedTab(index) }>{ item.label }</div>
        ))
        }
    </div>
    )
}

export default Tabs;