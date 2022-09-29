import React, { Component } from 'react'

class Register extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: "",
            displayname: "",
            password: "",
            passwordCheck: "",
            message: "",
        }
    }
    render() {
        return(
            <div className="container-fluid formContainer">
                <div className="formOuterSignOut">
                <div className="registerTitle">
                    <h1>Register</h1>
                </div>
                <form  id="signIForm"
                onSubmit={this.props.handleRegister}>
                    <div className="nameUsernameHolder">
                    <div className=" input-field" >
                        <label  htmlFor="displayName" className="labelStyle">Display Name: </label>
                        <input
                            id="displayName"
                            type="text"
                            name="name"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div className=" input-field">
                    <label className="labelStyle" htmlFor="username">Username: </label>
                        <input
                        id="username"
                            type="text"
                            name="username"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                   </div>
                    <div className=" input-field">
                        <label className="labelStyle"
                        htmlFor="password">Password: </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div className="message">
                        <span>
                             {this.props.message}
                        </span>
                    </div>
                    <div className=" input-field formSub registerBtn">
                        <input className=" registerValue formSubmit"
                            type="submit"
                            value='Register'
                        />
                    </div>
                </form>
                </div>
            </div>

        )
    }
}

export default Register