import React, {Component} from "react"
import "./comments.css"

//Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' 

//URL
let baseURL = process.env.REACT_APP_SERVER_URL;

class Comment extends Component {

    handleCommentLike = (e) => {
        e.preventDefault()
        console.log(this.props.likes)
        console.log(this.props.user)
        console.log(this.props.video._id)
        if(!this.props.likes.includes(this.props.user)){
            this.props.likes.push(this.props.user)
            // fetch edit video here
            fetch(`${baseURL}/videos/${this.props.video._id}`, {
              method: 'PUT',
              body: JSON.stringify({
                comments: this.props.comments,
              }),
              headers: {
                'Content-Type': 'application/json'
              }
            })
            .then(res => {
                if(res.status === 200)
                return res.json()
                // return ""
            })
            .then(data => {
                console.log("data", data)
            })
        } 
        e.target.setAttribute("hidden", true)
        this.props.loadComments()
    }

    render(){
        let likes = this.props.likes.length
        return(
            <div className ="comment" id={this.props.id}>
                <div className="commentTitleDate">
                    <h4>{this.props.user}</h4> <p className="commentDate">{this.props.date.slice(0,10)}</p>
                    </div>
                    <div className="commentInfo">
                    <p >{this.props.comment}</p>

                </div>
                <div className="likeDelete">
                    Likes : {likes} 
                    <span className="likeButton" onClick={this.handleCommentLike}>
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