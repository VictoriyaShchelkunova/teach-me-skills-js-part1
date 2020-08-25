import React, { Component } from 'react';
import './Registr.css'

export class Registr extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            passwordSecond: '',
            warningEmail: '',
            warningPassword: '',
            warningSecondPassword: '',
            localStorage: localStorage

        }
    }
    emailHandler = ({ target }) => {
        this.setState({
            email: target.value
        })
    }
    emailCheck = ({ target }) => {
        const regexp = /[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}/igm;
        if (!regexp.test(this.state.email) && this.state.email) {
            this.setState({
                warningEmail: 'Please, write valid email.',

            });
            target.value = ''
        }
    }
    emailFocus = () => {
        if (this.state.warningEmail) {
            this.setState({
                warningEmail: ''
            })
        }
    }
    passwordHandler = ({ target }) => {
        this.setState({
            password: target.value
        })
    }
    passwordCheck = ({ target }) => {
        const regexp = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        if (!regexp.test(this.state.password) && this.state.password) {
            this.setState({
                warningPassword: 'Please, write valid password.'
            })
            target.value = ''
        }

    }
    passwordFocus = () => {
        if (this.state.warningPassword) {
            this.setState({
                warningPassword: ''
            })
        }
    }
    passwordSecondHandler = ({ target }) => {
        this.setState({
            passwordSecond: target.value
        })
    }
    passwordSecondCheck = ({ target }) => {
        if (!(this.state.password === this.state.passwordSecond) && this.state.passwordSecond) {
            this.setState({
                warningSecondPassword: "Password doesn't match. Try again."
            })
            target.value = ''
        }
    }
    passwordSecondFocus = () => {
        if (this.state.warningSecondPassword) {
            this.setState({
                warningSecondPassword: ''
            })
        }
    }
    buttonHandler = () => {
        if (this.state.email && this.state.password && this.state.passwordSecond) {
            localStorage.setItem(this.state.email, this.state.password)
        } else {
            alert('Enter all data.')
        }
    }
    render() {
        return (
            <form>
                <label className="mail">E-mail:<input type="email"
                    onChange={this.emailHandler}
                    onBlur={this.emailCheck}
                    onFocus={this.emailFocus} /></label>
                <p>{this.state.warningEmail}</p>
                <label>Password:<input type="password"
                    onChange={this.passwordHandler}
                    onBlur={this.passwordCheck}
                    onFocus={this.passwordFocus} /></label>
                <p>{this.state.warningPassword}</p>
                <label>Password:<input type="password"
                    onChange={this.passwordSecondHandler}
                    onBlur={this.passwordSecondCheck}
                    onFocus={this.passwordSecondFocus} /></label>
                <p>{this.state.warningSecondPassword}</p>
                <button onClick={this.buttonHandler}>Send</button>
            </form>
        )
    }
}

