import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, {Component} from "react";
import Comments from "./Video/comments"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import fontawesome


//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class VideoInfo extends Component {
    constructor(props){
        super(props)
        this.state = {
            video: "",
            user: "",
            userlikes: [],
            commentToBeAdded: {},
            comments: [],
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

    handleChangeComment = (e) =>{
      e.preventDefault();
      // console.log(e.target.value)
      this.setState({
          commentToBeAdded: {
              comment: e.target.value,
              user: this.props.user.username,
              date: Date.now(),
      }
      })
  }

    handleAddComment = (e) => {
      e.preventDefault();
      // let commentsToBeAdded = {comments: [...this.state.comments, this.state.commentToBeAdded]};
      // // console.log("add comment", this.state.commentToBeAdded);
      // // console.log(this.props.video)
      // console.log("Comments: ", commentsToBeAdded)
      
      // Edit route
      fetch(`${process.env.REACT_APP_SERVER_URL}/videos/${this.state.video._id}`,{
          method: "PUT",
          body: JSON.stringify({
              comments: [...this.state.video.comments, this.state.commentToBeAdded],
          }),
          headers: {
              'Content-Type': 'application/json'
          },
      }).then(res => {
          if (res.status === 200) {
              return res.json();
            } else {
              return []
            }  
      }).then(data => {
          // console.log(data)
          this.setState({
              video: data,
          })
          this.componentDidMount()
      })
      
  }

    render() {
      let likes = 0;
      if(this.state.video) likes = this.state.video.likes.length;
      
        return (
          <div className="videoPage">
          <div className="videoContainer">
            <div className = "videoInfo">
                <div className="videoHandler">
                <iframe className = "videoIframe" src={this.state.video.videoLink}/>
                </div>
                    <div className="description">

                <h2>{this.state.video.title}</h2>
                <label>Uploaded: {this.changeDateFormat(this.state.video.publishedDate)}</label>
                <label>Uploaded by: {this.state.username}</label>
                <label>
                    Description: {this.state.video.description}
                </label>
                <label>
                  Likes : {likes} 
                  <span className="likeButton"onLoad={() => this.checkLiked()} onClick={this.handleLike}>
                  <FontAwesomeIcon icon={solid("heart")} />
                  </span>
                </label> 
                
                <Comments 
                  video = {this.state.video} 
                  user = {this.props.user} 
                  comments = {this.state.video.comments}
                  commentToBeAdded = {this.state.commentToBeAdded}
                  handleChangeComment = {this.handleChangeComment}
                  handleAddComment = {this.handleAddComment}
                  />
                
            </div>
        )
    }
}

export default VideoInfo;