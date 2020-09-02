import React, {Component} from 'react';
import './post-add-form.css';

export default class PostAddForm extends Component{

    constructor(props){
        super(props);

        this.state = {
            text: '',
            money: ''
        }

        this.onLabelChange = (e) => {
            this.setState({
                text: e.target.value
            })
        }

        this.onSumChange = (e) => {
            this.setState({
                money: e.target.value
            })
        }

        this.onSubmit = (e) => {
            e.preventDefault();
            this.props.onAdd(this.state.text, this.state.money);
            this.setState({
                text: '',
                money: ''
            });
        }
    }

    render () {
        return(
            <div className="post-form">
                <h5 className="title">Add transaction</h5>
                <hr className="line"/>
                <form onSubmit={this.onSubmit}>
                    
                    <span>Text</span>
                    <input 
                        onChange={this.onLabelChange}
                        className="enter-field" 
                        placeholder="Enter text..."
                        value={this.state.text}
                    />
                
                    <span>Amount<br/>(negative - expense, positive - income)</span>
                    <input 
                        onChange={this.onSumChange}
                        type="number" 
                        className="enter-field" 
                        placeholder="Enter amount..."
                        value={this.state.money}
                    />
                      
                    <button className="btn-add">Add transaction</button>
                </form>
            </div>
        )
    }
}
