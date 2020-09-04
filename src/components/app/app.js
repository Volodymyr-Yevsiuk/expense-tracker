import React, {Component} from 'react';
import nextId from "react-id-generator";
import AppHeader from '../app-header/app-header';
import IncomeExpense from '../income-expense/income-expense';
import History from '../history/history';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css'

export default class App extends Component{

    state = {
        data: [],
        incomeMoney: '0.00',
        expenseMoney: '0.00',
        balance: '0.00'
    }

    onAddItem = (body, sum) => {

        const newItem = {
            label: body,
            cash: +sum,
            id: nextId()
        }

        this.setState(({data, incomeMoney, expenseMoney, balance}) => {
            const newArr = [newItem, ...data];
            if (sum >= 0) {
                incomeMoney = (+(incomeMoney) + (+sum)).toFixed(2);
                balance = (+(balance) + (+sum)).toFixed(2);
                if (balance === 0) {
                    balance = '0.00';
                }
            } else {
                expenseMoney = (+(expenseMoney) + (+sum*(-1))).toFixed(2);
                balance = (+(balance) - (+sum*(-1))).toFixed(2);
                if (balance === 0) {
                    balance = '0.00';
                }
            }
            return {    
                data: newArr,
                incomeMoney,
                expenseMoney,
                balance
            }
        }) 
    }

    onDeleteItem = (id) => {
        this.setState(({data, incomeMoney, expenseMoney, balance}) => {
            const index = data.findIndex( elem => elem.id === id);
            const newArr = [
                ...data.slice(0, index),
                ...data.slice(index + 1)
            ];

            if (data[index].cash >= 0) {
                incomeMoney = (+incomeMoney - +(data[index].cash)).toFixed(2);
                balance = (+(balance) - +(data[index].cash)).toFixed(2);
                if (incomeMoney === 0){
                    incomeMoney = '0.00';
                    if (balance === 0) {
                        balance = '0.00';
                    }
                }
            } else {
                expenseMoney = (+expenseMoney - +(data[index].cash*(-1))).toFixed(2);
                balance = (+(balance) + data[index].cash*(-1)).toFixed(2);
                if (expenseMoney === 0){
                    expenseMoney = '0.00';
                    if (balance === 0) {
                        balance = '0.00';
                    }
                } 
            }
            
            return {
                data: newArr,
                incomeMoney,
                expenseMoney,
                balance
            }
        }) 
    }



    render () {
        const {data, incomeMoney, expenseMoney, balance} = this.state;

        return(
            <div className="app">
                <AppHeader
                    balance={balance}/>
                <IncomeExpense
                    income={incomeMoney}
                    expense={expenseMoney}/>
                <History 
                    items={data} 
                    onDelete={this.onDeleteItem}/>
                <PostAddForm onAdd={this.onAddItem}/>
            </div>   
        )
    }
}
