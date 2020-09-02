import React from 'react';
import HistoryItem from '../history-item/history-item';
import './history.css';

const History = ({items, onDelete}) => {

    const elements = items.map((item) => {
        const {id, ...itemProps} = item;

        return (
            <div key={id}>
                <HistoryItem 
                    {...itemProps}
                    onDelete={ () => onDelete(id) }
                />
            </div>
                
        )
    });
    return(
        <div className="history">
            <h5 className="title">History</h5>
            <hr className="line"/>
            <ul className="list-group">
                {elements}
            </ul>
        </div>
    )
}

export default History;