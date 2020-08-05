import React, { Component } from 'react'


export class App extends Component {
    constructor (props){
        super(props)
        this.state = {
            title: ''
        }
    }
    
    inputHandler = ({target}) => {
        this.setState((prevState) => {
            return {
                title: target.value
            }
        })
    }

    handlerSave = () => {
        const p = document.getElementsByTagName('p')[0];
        p.innerText = this.state.title;
        const input = document.getElementsByTagName('input')[0];
        input.value = ''
    }

    handlerDelete = () => {
        const p = document.getElementsByTagName('p')[0];
        p.innerText = ''
    }

    render(){
        return (
            <>
            <p></p>
            <input type="text" onChange={this.inputHandler}/>
            <button onClick={this.handlerSave}>Save</button>
            <button onClick={this.handlerDelete}>Delete</button>
            </>
        )
    }
}