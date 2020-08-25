import React from 'react';
import './Authorization.css';

export class Authorization extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            warningEmail: '',
            warningPassword: '',
            localStorage: localStorage,

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
                warningPassword: 'Please, write valid password or try again.'
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
    checkData = () => {
        const users = JSON.parse(JSON.stringify(this.state.localStorage));
        const user = `${this.state.email}: ${this.state.password}`;
        const arrUsers = [];
        for (const key in users) {
            arrUsers.push(`${key}: ${users[key]}`);
        }
        if (arrUsers.indexOf(user) !== -1) {
            alert('Log in successfuly!');
            this.props.history.push('/');
            this.setState({
                locate: '/'
            })
        } else {
            alert('Plese, register.');
            this.props.history.push('/author');
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
                <button onClick={this.checkData}>Log in</button>              
            </form>
        )
    }
}