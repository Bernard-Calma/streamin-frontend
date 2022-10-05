import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers"
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
            <h1>Comments: </h1>
            <div className = "comments-container">
                {
                    this.props.comments
                    ?
                    <>
                        {
                            this.props.comments.slice(0).reverse().map(comment => {
                                return <Comment 
                                    key = {comment._id}
                                    comment = {comment.comment}
                                    user = {comment.user}
                                    date = {comment.date}
                                    loggedInUser = {this.props.user}
                                    handleDeleteComment = {this.props.handleDeleteComment}
                                    id = {comment._id}
                                />
                            })}
                    </>
                    :
                    <>
                    </>
                }
            </div>
            <div className = "addComment">
              <textarea required type = "text" id = "txtAddComment" placeholder="add a comment" onChange={this.props.handleChangeComment} value ={this.props.commentToBeAdded.comment}/>
              <button id="btnAddComment" onClick={this.props.handleAddComment} > Add Comment </button>              
            </div>
          </div>
          
        )

    }

}

export default Comments;