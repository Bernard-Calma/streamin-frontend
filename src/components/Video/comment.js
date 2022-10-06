import React, {Component} from "react"
import "./comments.css"

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

class Comment extends Component {
    render(){
        let likes = this.props.likes.length
        return(
            <div class ="comment" id={this.props.id}>
                <h4>{this.props.user}</h4>
                <p>{this.props.comment}</p>
                <p>{this.props.date.slice(0,10)}</p>
                <div>
                    Likes : {likes} 
                    <span className="likeButton" onClick={this.props.handleCommentLike}>
                    <FontAwesomeIcon icon={solid("heart")} />
                    </span>
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