import React, { Component } from 'react'

class SignIn extends Component {
    constructor(props){
        super(props)
        this.state = {
            username: '',
            password: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.users.forEach((user) => {
            if(user.name === this.state.username && user.password === this.state.password) {
                console.log('YESSSS')
                return
            } else {
                console.log('NOOOO')
                return
            }
        })
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username: </label>
                        <input
                            type="text"
                            name="username"
                            value={this.state.username}
                            onChange={this.handleChange}
                            required
                        />
                    </div>
                    <div>
                        <label>Password: </label>
                        <input
                            type="password"
                            name="password"
                            value={this.state.password}
                            onChange={this.handleChange}
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
                    Register <a>here</a>.
                </div>
            </div>
        );
    }
}

export default SignIn