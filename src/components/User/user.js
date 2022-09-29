import React , {Component} from "react"
import UserInfo from "./userInfo";
import VideoList from "./VideoList";
import VideoInfo from "../VideoInfo";
import CreateForm from "../CreateForm";


class User extends Component {
    constructor(props){
        super(props)
        this.state ={
            showVideoList: true,
            createVideo: false, 
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

    handleCreateSubmit = (e) =>{
        e.preventDefault();
        // console.log("create video")
        this.setState({
            createVideo: true,
            showVideoList: false,
        })
    }

    handleCreateReturn = (e) => {
        e.preventDefault();
        this.setState({
            createVideo: false,
            showVideoList: true,
        })
    }

    render(){
        return ( this.state.showVideoList 
            ?
            <div className = "userPage" >
                {/* Pass in user name below */}
                <UserInfo user={this.props.user} handleCreateSubmit = {this.handleCreateSubmit} />
                <VideoList user={this.props.user} onClickVideo = {this.onClickVideo}/>
            </div>
            : <>
                {this.state.createVideo
                ?
                    <CreateForm handleCreateReturn = {this.handleCreateReturn}/>
                :
                    <VideoInfo video = {this.state.videoId} user = {this.props.user}/>
                }
            </>
                
                
        )
    }
}

export default User;