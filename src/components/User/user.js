import React , {Component} from "react"
import UserInfo from "./userInfo";
import VideoList from "./VideoList";
import VideoInfo from "../Video/VideoInfo";
import CreateForm from "../CreateForm";
import ModifyForm from "../ModifyForm";


class User extends Component {

    render(){
        return ( this.props.showVideoList 
            ?
            <div className = "userPage" >
                {/* Pass in user name below */}
                
                {
                    !this.props.modifyVideo || this.props.showMain
                    ?
                    <>
                        <UserInfo 
                            user={this.props.user} 
                            handleCreateSubmit = {this.props.handleCreateSubmit}
                            searchVideos = {this.props.searchVideos}
                            />
                        <VideoList 
                            user={this.props.user} 
                            onClickVideo = {this.props.onClickVideo} 
                            handleModifyVideo = {this.props.handleModifyVideo}
                            searchVideos = {this.props.searchVideos}
                            searchedVideos = {this.props.searchedVideos}
                            />
                    </>
                    :
                    <>
                        <ModifyForm 
                            handleCreateReturn = {this.props.handleCreateReturn} 
                            videoToModify = {this.props.videoToModify}
                            />
                    </>
                }
                
            </div>
            : <>
                {this.props.createVideo
                ?
                    <CreateForm 
                        handleCreateReturn = {this.props.handleCreateReturn} 
                        user = {this.props.user._id}
                        />
                :
                    <VideoInfo 
                        video = {this.props.videoId} 
                        user = {this.props.user} 
                        handleLogo = {this.props.handleLogo}
                        handleModifyVideo = {this.props.handleModifyVideo}
                        />
                }
            </>
                
                
        )
    }
}

export default User;