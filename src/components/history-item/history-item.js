import React from 'react';
import './history-item.css';

const HistoryItem = ({label, cash, onDelete}) => {
    return(
        <>
            <li className="list-group-item">
                <span className="name">{label}</span>
                <span className="money">${cash}</span>
                <button onClick={onDelete} className="delete">x</button>
            </li>
        </>
    )
}

export default HistoryItem;