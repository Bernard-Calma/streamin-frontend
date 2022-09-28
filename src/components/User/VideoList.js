import React , {Component} from "react"
import Video from "../video"

class VideoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            videos: [],
        }
    }
    getVideos = (e) => {
        fetch("http://localhost:3003/videos/uservideos/" + this.props.user._id)
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

    render(){
        return (
            <div className = "videoList" >
                <div>
                    <select name = "Categories" id="Categories">
                        <option value = "category1">Category 1</option>
                        <option value = "category2">Category 2</option>
                        <option value = "category3">Category 3</option>
                    </select>
                </div>
                <div className ="videos">
                    {this.state.videos.map(video => {
                    return  (
                        <Video key={video._id} video={video} className="video"/>
                    )
                    })}
                </div>
            </div>
        )
    }
}

export default VideoList;