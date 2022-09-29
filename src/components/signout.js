import React, { Component } from 'react'

class SignOut extends Component {
    render() {
        return(
            <p id="nav-link"
                onClick={this.props.signOut}
            >
                Sign Out
            </p>
        )    
    }       
}

export default SignOut