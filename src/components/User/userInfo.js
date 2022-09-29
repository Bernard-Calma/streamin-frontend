import React , {Component} from "react"
import CreateForm from "../CreateForm";

class UserInfo extends Component {
    render(){
        return( 
            <div className = "userInfo" >
                {/* Pass in user name below */}
                <div className = "createVideo" >
                    <input type = "button" value = "create" id="createVideoButton" onClick={this.props.handleCreateSubmit}/>
                </div>
                <div className = "usernameInfo">
                    <p>Sign in as <span id="usernameInfo">{this.props.user.username}</span></p>
                </div>
            </div>
        )
    }
}

export default UserInfo;