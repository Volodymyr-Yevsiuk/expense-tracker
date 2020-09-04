import React from 'react';
import './history-item.css';

const HistoryItem = ({label, cash, onDelete}) => { 

    const border = cash < 0 ? 'red-border' : 'green-border'; 
    const money = cash < 0 ? cash*(-1) : cash;
    const mark = cash < 0 ? '-' : '+';

    return(
        <li className={`list-group-item ${border}`}>
            <span className="name">{label}</span>
            <span className="money">{mark}${money}</span>
            <button onClick={onDelete} className="delete">x</button>
        </li>
    )
}

export default HistoryItem;