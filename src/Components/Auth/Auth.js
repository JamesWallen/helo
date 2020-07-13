import React, {Component} from 'react';
import {Switch, Link, Redirect} from 'react-router-dom';
import axios from 'axios';



class Auth extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            loggedIn: false,
        }
    }


    updateUsername = (val) => {
        this.setState({username: val});
    }
    updatePassword = (val) => {
        this.setState({password: val});
    }

    handleRegister = () => {        
        const body = {username: this.state.username, password: this.state.password}
        axios.post('/auth/register', body)
            .then(res => {
                this.setState({username: '', password: '', loggedIn: true});
            })
            .catch(err => {
                this.setState({password: ''});
                alert(err.response.request.response);
            });
    }

    handleLogin = () => {
        const body = {username: this.state.username, password: this.state.password};
        axios.post('/auth/login', body)
            .then(res => {
                this.setState({username: '', password: '', loggedIn: true});
            })
            .catch(err => {
                this.setState({password: ''});
                alert(err.response.request.response);
            });
    }

    render() {
        return (
            <Switch>
                {this.state.loggedIn !== true
                ? (
                    <div className='auth'>
                        <section className='auth-container'>
                            <h1>Helo</h1>                    
                            <div className='username-password'>
                                <p>Username:</p>
                                <input value={this.state.username} onChange={e => this.updateUsername(e.target.value)} />
                            </div>
                            <div className='username-password'>
                                <p>Password:</p>
                                <input type='password' value={this.state.password} onChange={e => this.updatePassword(e.target.value)} />
                            </div>
                            <div className='auth-buttons'>
                                <button className='auth-login' onClick={this.loginUser} >Login</button>
                                <button className='auth-register' onClick={this.registerUser} >Register</button>
                            </div>
                        </section>  
                    </div>
                )
                : (
                    <Redirect to='/dashboard'/>
                )
                }
            </Switch>
        )
    }
}

export default Auth;