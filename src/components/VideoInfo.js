import React, {Component} from "react";

//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class VideoInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            video: "",
            user: "",
            userlikes: [],
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
                    userlikes: data.likes,
              })  
              }
            // console.log("Data : ", data);
        }).then(()=>{
          this.getUserName()
        })
    }

    componentDidMount(){
      this.showVideo()
    }

    changeDateFormat = (date) => {
      if(date) date = date.toString().slice(5,7) + "-" + parseInt(date.toString().slice(8,10)) + "-" + date.toString().slice(0,4);
      return date
    }

    getUserName = () => {
      // console.log("user", this.state)
      fetch(baseURL + "/users/"+ this.state.video.user)
      .then(res => {
        if(res.status === 200) return res.json()
        return ""
      })
      .then(data => {
        // console.log("data", data)
        if(data) this.setState({
          username: data.username
        })
      })
    }

    handleLike = (e) => {
      e.preventDefault();
      if(!this.state.video.likes.includes(this.props.user._id)){
        this.state.video.likes = [...this.state.video.likes, this.props.user._id]
        // fetch edit video here
        fetch(`${baseURL}/videos/${this.state.video._id}`, {
          method: 'PUT',
          body: JSON.stringify({
            likes: this.state.video.likes,
          }),
          headers: {
            'Content-Type': 'application/json'
          }
        })
        this.props.handleModifyVideo(e)
      } 
      e.target.setAttribute("hidden", true)
    }

    checkLiked = (e) => {
      // console.log("target", e)
      // console.log("likes: ",this.state.userlikes)
      // console.log(this.props.user._id)
      // console.log("Is liked? ", this.state.likes.includes(this.props.user._id))
    }

    render() {
      let likes = 0;
      if(this.state.video) likes = this.state.video.likes.length;
      
        return (
            <div className = "videoInfo">
                
                <iframe className = "videoIframe" src={this.state.video.videoLink}/>
                <h1>{this.state.video.title}</h1>
                <label>Uploaded: {this.changeDateFormat(this.state.video.publishedDate)}</label>
                <label>Uploaded by: {this.state.username}</label>
                <label>
                    Description: {this.state.video.description}
                </label>
                <label>
                  Likes : {likes}          <button onLoad={() => this.checkLiked()} onClick={this.handleLike}>👍</button>
                </label> 
                
                <div className="comments">
                  <h1>Comments: </h1>
                  <div className = "addComment">
                    <input type = "text" />
                    <button id="btnAddComment"> Add Comment </button>
                  </div>
                </div>
                
            </div>
        )
    }
}

export default VideoInfo;