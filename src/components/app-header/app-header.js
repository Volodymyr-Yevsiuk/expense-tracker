import React from 'react';

import './app-header.css';

const AppHeader = ({balance}) => {
    return(
        <div className="header">
            <h4 className="title">Expense Tracker</h4>
            <div className="balance_block">
                <h6 className="your_balance">Your Balance</h6>
                <span className="balance">${balance}</span>
            </div>
        </div>
    )
}

export default AppHeader;