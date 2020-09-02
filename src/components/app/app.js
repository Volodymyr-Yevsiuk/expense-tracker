import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/app-header';
import IncomeExpense from '../income-expense/income-expense';
import History from '../history/history';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css'

export default class App extends Component{

    state = {
        data: [{label: 'Test', cash: 15, id: nextId()},
               {label: 'Test2', cash: 35, id: nextId()},
               {label: 'Test3', cash: 75, id: nextId()}]
    }

    onAddItem = (body, sum) => {

        const newItem = {
            label: body,
            cash: sum,
            id: nextId()
        }

        this.setState(({data}) => {
            const newArr = [newItem, ...data];

            return {
                data: newArr
            }
        }) 
    }

    onDeleteItem = (id) => {
        this.setState(({data}) => {
            const index = data.findIndex( elem => elem.id === id);
            const newArr = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ];

            return {
                data: newArr
            }
        }) 
    }

    render () {
        const {data} = this.state;

        return(
            <div className="app">
                <AppHeader/>
                <IncomeExpense/>
                <History 
                    items={data} 
                    onDelete={this.onDeleteItem}/>
                <PostAddForm onAdd={this.onAddItem}/>
            </div>   
        )
    }
}
