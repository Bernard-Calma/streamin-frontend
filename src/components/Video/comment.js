import React, {Component} from "react"
import "./comments.css"

class Comment extends Component {
    render(){

        return(
            <div class ="comment">
                <h4>{this.props.user}</h4>
                <p>{this.props.comment}</p>
            </div>
        )
    }
}

export default Comment;