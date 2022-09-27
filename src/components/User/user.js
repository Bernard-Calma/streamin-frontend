import React , {Component} from "react"
import UserInfo from "./userInfo";
import VideoList from "./VideoList";

class User extends Component {
    render(){
        return (
            <div className = "userPage" >
                {/* Pass in user name below */}
                <UserInfo user={this.props.user}/>
                <VideoList user={this.props.user}/>
            </div>
        )
    }
}

export default User;