import React, { Component } from 'react'


export class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
            list: [],
            title: ''
        }

    }

    async componentDidMount() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/');
            if (!response.ok) {
                throw new Error(response.statusText)
            }

            const list = await response.json();
            this.setState(
                {
                    list
                }
            )
        } catch (error) {
            console.log(error)
        }
    }

    handlerDelete = (event) => {
        const newList = this.state.list.filter((element) => {
            return element.id !== +event.target.id
        })
        this.setState(
            {
                list: newList
            }
        )
    }

    input = ({ target }) => {
        this.setState(
            {
                title: target.value
            }
        )
    }

    save = () => {
        const newList = this.state.list;
        const title = this.state.title;
        newList.unshift({
            id: newList[0].id - 1,
            title
        })
        this.setState({
            list: newList
        })
    }

    blur = ({ target }) => {
        target.value = ''
    }

    render() {

        return (
            <>
                <input type="text" onChange={this.input} onBlur={this.blur} />
                <button onClick={this.save}>Save</button>
                <ul>
                    {this.state.list.map(({ id, title }) => {
                        return (
                            <li key={id} id={id} onClick={this.handlerDelete}>{title}</li>
                        )
                    })}
                </ul>
            </>
        )
    }
}