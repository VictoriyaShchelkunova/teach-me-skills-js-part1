import React, { Component } from 'react'


export class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            title: '',
            inputValue: ''
        }
    }
    
    inputHandler = ({target}) => {
        this.setState((prevState) => {
            return {
                inputValue: target.value
            }
        })
    }

    handlerSave = () => {
        this.setState({
            title: this.state.inputValue,
            inputValue: ''
        })
    }

    handlerDelete = () => {
        this.setState({
            title: '',
        })
    }

    render(){
        return (
            <>
            <p>{this.state.title}</p>
            <input type="text" onChange={this.inputHandler} value={this.state.inputValue}/>
            <button onClick={this.handlerSave}>Save</button>
            <button onClick={this.handlerDelete}>Delete</button>
            </>
        )
    }
}