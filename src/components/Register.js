import React, { Component } from 'react'

class Register extends Component {
    render() {
        return(
            <>
                <h1>Register</h1>
                <form onSubmit={this.props.handleRegister}>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Display Name: </label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.props.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value='Register'
                        />
                    </div>
                </form>
            </>

        )
    }
}

export default Register