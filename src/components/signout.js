import React, { Component } from 'react'

class SignOut extends Component {
    render() {
        return(
            <a
                className="nav-item"
                onClick={this.props.signOut}
            >
                Sign Out
            </a>
        )    
    }       
}

export default SignOut