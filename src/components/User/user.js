import React , {Component} from "react"
import UserInfo from "./userInfo";
import VideoList from "./VideoList";
import VideoInfo from "../VideoInfo";

class User extends Component {
    constructor(props){
        super(props)
        this.state ={
            showVideoList: true,
            videoId: "",
        }
    }
    onClickVideo = (e) => {
        e.preventDefault();
        // console.log(e.target.id)
        this.setState({
            showVideoList: false,
            videoId: e.target.id,
        })
    }

    render(){
        return ( this.state.showVideoList 
            ?
            <div className = "userPage" >
                {/* Pass in user name below */}
                <UserInfo user={this.props.user}/>
                <VideoList user={this.props.user} onClickVideo = {this.onClickVideo}/>
            </div>
            :
                <VideoInfo video = {this.state.videoId}/>
        )
    }
}

export default User;