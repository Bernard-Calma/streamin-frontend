import React, {Component} from "react"
import "./comments.css"

class Comment extends Component {
    render(){

        return(
            <div className ="comment" id={this.props.id}>
                <div className="commentTitleDate">
                    <h4>{this.props.user}</h4> <p className="commentDate">{this.props.date.slice(0,10)}</p>
                    </div>
                    <div className="commentInfo">
                    <p >{this.props.comment}</p>

                </div>
                <div className="likeDelete">
                    <p >Like</p>
                    {
                        !this.props.user === this.props.loggedInUser._id
                        ?
                        <>
                            
                        </>
                        :
                        <>
                            <p onClick={this.props.handleDeleteComment}>Delete</p>
                        </>
                    }
                    
                </div>
            </div>
        )
    }
}

export default Comment;