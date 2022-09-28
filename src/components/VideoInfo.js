import React, {Component} from "react";

let baseURL = "";

if(process.env.NODE_ENV === "development") {
  baseURL = "http://localhost:3003"
} else {
  baseURL = process.env.REACT_APP_SERVER_URL
}

class VideoInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            video: "",
        }
    }
    showVideo = () => {
        // console.log(baseURL)
        fetch(`${baseURL}/videos/${this.props.video}`  )
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
                    video: data,
              })  
              }
            console.log("Data : ", data);
        })
    }
    componentDidMount(){
        this.showVideo()
    }
    render() {
        return (
            <div className = "videoInfo">
                
                <iframe className = "videoIframe" src={this.state.video.videoLink}/>
                <h1>{this.state.video.title}</h1>
                <label>Uploaded: {this.state.video.publishedDate}</label>
                <label>Uploaded by: {this.state.video.user}</label>
                <lablel>
                    Description: 
                </lablel>
                <div className="comments">
                  <h1>Comments: </h1>
                </div>
                
            </div>
        )
    }
}

export default VideoInfo;