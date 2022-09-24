import React, { Component } from 'react'

// REGISTER COMPONENT
// ---->> import register component here <<----

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
            ?<div>
                <form onSubmit={this.props.handleLogin}>
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
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            onChange={this.props.handleChange}
                        />
                    </div>
                    <div>
                        <input
                            type="submit"
                            value='Sign In'
                        />
                    </div>
                </form>
                <div>
                    Want to join?
                    Register <a onClick={this.onClickRegister}>here</a>.
                </div>
            </div>
            // if register is true show register component
            : <>
                {/* Add Register Component Here */}
                <div>Register Component</div>
            </>
        );
    }
}

export default SignIn