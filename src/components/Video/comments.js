import React, {Component} from "react"
import Comment from "./comment"
import "./comments.css"

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            commentToBeAdded: {},
            comments: this.props.comments,
            video: this.props.video
        }
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
        fetch(`${process.env.REACT_APP_SERVER_URL}/videos/${this.props.video._id}`,{
            method: "PUT",
            body: JSON.stringify({
                comments: [...this.props.video.comments, this.state.commentToBeAdded],
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        })
        
    }

    render(){

        return(
        <div className="comments">
            <h1>Comments: </h1>
            <div className = "comments-container">
                {
                    this.props.comments
                    ?
                    <>
                        {
                            this.props.comments.map(comment => {
                                return <Comment 
                                    key = {comment._id}
                                    comment = {comment.comment}
                                    user = {comment.user}
                                    date = {comment.date}
                                />
                            })}
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <div className = "addComment">
              <textarea type = "text" id = "txtAddComment" placeholder="add a comment" onChange={this.handleChangeComment}/>
              <button id="btnAddComment" onClick={this.handleAddComment} > Add Comment </button>              
            </div>
          </div>
        )

    }

}

export default Comments;