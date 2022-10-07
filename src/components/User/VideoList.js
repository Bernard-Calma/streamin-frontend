import React , {Component} from "react"
import Video from "../video"


//URL
let baseURL = process.env.REACT_APP_SERVER_URL

class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
            modifyVideo: false,
        }
    }
    getVideos = (e) => {
        fetch(`${baseURL}/videos/uservideos/` + this.props.user._id)
        .then(res => {
            if (res.status === 200) {
                return res.json();
              } else {
                return []
              }  
        }).then(data => {
            if(data.length === 0) {
                this.setState({
                  videos: [],
                }) 
              } else {
                this.setState({
                    videos: data,
              })  
              }
            // console.log(data);
        })
    }

    componentDidMount(){
        this.getVideos();
    }

    deleteVideo = (e) => {
        e.preventDefault()
        // console.log("Delete Video", e.target.parentNode.parentNode.firstChild.id)
        let videoID = e.target.parentNode.parentNode.firstChild.id;
        fetch(`${baseURL}/videos/${videoID}`, {
            method: 'DELETE',
        })
        this.getVideos()
    }

    render(){
        return (
            <div className="videoListContainer">
            <div className = "videoList" >
                {/* <div className="videoCategoriesHolder">
                    <select name = "Categories" id="Categories">
                        <option value = "category1">Category 1</option>
                        <option value = "category2">Category 2</option>
                        <option value = "category3">Category 3</option>
                    </select>
                </div> */}
                <div className ="videos">
                    {
                        !this.props.searchVideos
                        ?
                        <>
                        {/* User Videos */}
                            {this.state.videos.map(video => {
                                return  (
                                    <Video 
                                        key={video._id} 
                                        video={video} 
                                        className="video"
                                        onClickVideo = {this.props.onClickVideo} 
                                        deleteVideo = {this.deleteVideo} 
                                        handleModifyVideo = {this.props.handleModifyVideo}
                                        user = {this.props.user}
                                        searchVideos = {this.props.searchVideos}
                                        />
                                    )
                                })
                            }
                        </>
                        :
                        <>
                        {/* Searched Videos */}
                            {
                                this.props.searchVideos.length !== 0
                                ?
                                <>
                                
                                    {this.props.searchedVideos.map(video => {
                                        return  (
                                            <Video 
                                                key={video._id} 
                                                video={video} 
                                                className="video"
                                                onClickVideo = {this.props.onClickVideo} 
                                                deleteVideo = {this.deleteVideo} 
                                                handleModifyVideo = {this.props.handleModifyVideo}
                                                user = {this.props.user}
                                                searchVideos = {this.props.searchVideos}
                                                />
                                            )
                                        })
                                    }
                                </>
                                :
                                <>
                                </>
                            }
                            
                        </>
                    }
                    
                </div>
            </div>
            </div>
        )
    }
}

export default VideoList;