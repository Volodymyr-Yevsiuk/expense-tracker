import React from 'react';
import './income-expense.css';

const IncomeExpense = () => {
    return(
        <div className="counter_money">
            <div className="income">
                <div className="special_container">
                    <h6 className="counter_title">Income</h6>
                    <span className="income_balance">$500.00</span>
                </div>
            </div>

            <div className="expense">
                <h6 className="counter_title">Expense</h6>
                <span className="expense_balance">$200.00</span>
            </div>
        </div>
    )
}

export default IncomeExpense;