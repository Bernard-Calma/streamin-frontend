import React , {Component} from "react"
import UserInfo from "./userInfo";
import VideoList from "./VideoList";
import VideoInfo from "../VideoInfo";
import CreateForm from "../CreateForm";
import ModifyForm from "../ModifyForm";


class User extends Component {
    constructor(props){
        super(props)
        this.state ={
            showVideoList: true,
            createVideo: false, 
            videoId: "",
            modifyVideo: false,
        }
    }

    handleCreateSubmit = (e) =>{
        e.preventDefault();
        // console.log("create video")
        this.setState({
            createVideo: true,
            showVideoList: false,
        })
    }

    handleCreateReturn = () => {
        this.setState({
            createVideo: false,
            showVideoList: true,
            modifyVideo: false,
            videoToModify: "",
        })
    }

    modifyVideo = (e) => {
        e.preventDefault()
        // console.log("Modify Video", e.target.parentNode.parentNode.firstChild.id)
        let videoID = e.target.parentNode.parentNode.firstChild.id;
        this.setState({
                modifyVideo: true,
                videoToModify: videoID,
            }
            
        )
    }

    render(){
        return ( this.props.showVideoList 
            ?
            <div className = "userPage" >
                {/* Pass in user name below */}
                
                {
                    !this.state.modifyVideo || this.props.showMain
                    ?
                    <>
                        <UserInfo user={this.props.user} handleCreateSubmit = {this.handleCreateSubmit} />
                        <VideoList user={this.props.user} onClickVideo = {this.props.onClickVideo} modifyVideo = {this.modifyVideo}/>
                    </>
                    :
                    <>
                        <ModifyForm handleCreateReturn = {this.handleCreateReturn} videoToModify = {this.state.videoToModify}/>
                    </>
                }
                
            </div>
            : <>
                {this.state.createVideo
                ?
                    <CreateForm handleCreateReturn = {this.handleCreateReturn} user = {this.props.user._id}/>
                :
                    <VideoInfo video = {this.props.videoId} user = {this.props.user} handleLogo = {this.props.handleLogo}/>
                }
            </>
                
                
        )
    }
}

export default User;