import React, {Component} from "react"
import Comment from "./comment"
import "./comments.css"

class Comments extends Component{
    constructor(props){
        super(props)
        this.state = {
            comments: this.props.comments,
            video: this.props.video
        }
    }

    loadComments = () =>{
        if(this.props.comments){
            this.setState({
                comments: this.props.comments,
            })
        }
        
    }

    componentDidMount(){
        this.loadComments();
    }

    render(){

        return(
        <div className="comments">
            <h2>Comments: </h2>
            <div className = "comments-container">
                {
                    this.props.comments
                    ?
                    <>
                        {
                            this.props.comments.slice(0).reverse().map(comment => {
                                return <Comment 
                                    comment = {comment.comment}
                                    user = {comment.user}
                                    date = {comment.date}
                                    loggedInUser = {this.props.user}
                                    handleDeleteComment = {this.props.handleDeleteComment}
                                    id = {comment._id}
                                    likes = {comment.likes}
                                    comments = {this.props.comments}
                                    video = {this.props.video}
                                    handleModifyVideo = {this.props.handleModifyVideo}
                                    componentDidMount = {this.componentDidMount}
                                    loadComments = {this.loadComments}
                                />
                            })}
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <div className = "addComment">
              <textarea required type = "text" id = "txtAddComment" placeholder="Add a Comment" onChange={this.props.handleChangeComment} value ={this.props.commentToBeAdded.comment}/>
              <button id="btnAddComment" onClick={this.props.handleAddComment} >Comment </button>              
            </div>
          </div>
          
        )

    }

}

export default Comments;