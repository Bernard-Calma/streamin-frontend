import React, {Component} from "react"
import "./comments.css"

class Comment extends Component {
    render(){

        return(
            <div class ="comment">
                <h4>{this.props.user}</h4>
                <p>{this.props.comment}</p>
                <p>{this.props.date.slice(0,10)}</p>
                <div>
                    <p>Like</p>
                    {
                        !this.props.user === this.props.loggedInUser._id
                        ?
                        <>
                            
                        </>
                        :
                        <>
                            <p>Delete</p>
                        </>
                    }
                    
                </div>
            </div>
        )
    }
}

export default Comment;