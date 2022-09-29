import React, { Component } from 'react'

// REGISTER COMPONENT
import Register from './Register'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            register: false,
        }
    }
    onClickRegister = (e) => {
        this.setState({
            register: true,
        })
    }
    render() {

                // if register state is false show login component
        return ( !this.state.register 
            ?<div className=" container-fluid formContainer">
                <div className="formOuter">
                    <div className="signInTitle">
                        <h1 className="signIn">Sign In</h1>
                    </div>
                
                
                <form id="signInForm"
                onSubmit={this.props.handleLogin}>
                    <div className="input-field">
                        <label for="username"
                        className="labelStyle">Username: 
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div className="input-field">
                        <label 
                        for="password"
                        className="labelStyle">Password: </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div className=" input-field formSubmit">
                        <input className="formSub"
                            type="submit"
                            value='Sign In'
                        />
                    </div>
                    <div>
                <span className="registerLink">
                    Want to join?
                    Register <a onClick={this.onClickRegister}>here</a>.
                </span>
                </div>
                </form>
                </div>
                
            </div>
            // if register is true show register component
            : <>
                <Register
                    handleRegister={this.props.handleRegister}
                    handleChange={this.props.handleChange}
                    message = {this.props.message}
                />
            </>
        );
    }
}

export default SignIn