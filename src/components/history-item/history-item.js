import React from 'react';
import './history-item.css';

const HistoryItem = ({label, cash, onDelete}) => { 

    const border = cash < 0 ? 'red-border' : 'green-border'; 

    return(
        <li className={`list-group-item ${border}`}>
            <span className="name">{label}</span>
            <span className="money">${cash}</span>
            <button onClick={onDelete} className="delete">x</button>
        </li>
    )
}

export default HistoryItem;