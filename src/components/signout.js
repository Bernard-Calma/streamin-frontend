import React, { Component } from 'react'

class SignOut extends Component {
    render() {
        return(
            <a id="nav-link"
                onClick={this.props.signOut}
            >
                Sign Out
            </a>
        )    
    }       
}

export default SignOut