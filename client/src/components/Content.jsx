import React from 'react';

const Results = (props) => {
    const { allTabs, thisTab } = props;

    return (
    <div className="results">
        { allTabs[thisTab].content }
    </div>
    )
}

export default Results;