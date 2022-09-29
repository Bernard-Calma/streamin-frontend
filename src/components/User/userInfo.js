import React , {Component} from "react"

class UserInfo extends Component {
    render(){
        return( 
            <div className = "userInfo" >
                {/* Pass in user name below */}
                <div className = "createVideo" >
                    <input type = "button" value = "create" id="createVideoButton" onClick={this.props.handleCreateSubmit}/>
                </div>
                <div className = "usernameInfo">
                    <p> Sign in as 
                        <br/>
                    <span id="usernameInfoName"> {this.props.user.username} 
                    </span></p>
                </div>
            </div>
        )
    }
}

export default UserInfo;
