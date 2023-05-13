import React, { useState } from "react"
import { format } from "timeago.js"

const Comments = props => {
    const [addComment, setAddComment] = useState({
        user: props.user.username,
        comment: "",
        date: new Date()
    });

    const handleChange = e => setAddComment({...addComment, comment: e.target.value})

    const handleLikeComment = comment => {
        console.log(comment)
        if (!comment.likes.includes(props.user.username) && props.user.username !== "Guest") props.handleEditComment(comment)
    }
    return(
        <>
            <h3>Comments</h3>
            <div className="comments">
                {props.video.comments.map(comment => 
                    <div className="comment" key={comment._id}>
                        <h3 className="user">{comment.user}</h3>
                        <p className="date">{format(comment.date)} <span className="commentLikes">
                            {comment.likes.includes(props.user.id)
                                ? <i className="fa-solid fa-heart"/>
                                : <i className="fa-regular fa-heart" onClick={() => handleLikeComment(comment)}/>
                            }
                            {comment.likes.length}</span></p>
                        <p className="text">{comment.comment}</p>
                    </div>
                )}
            </div>
            <div className="inputComment">
                <input type="text" placeholder="Write a comment" onChange={handleChange}/>
                <i class="fa-solid fa-arrow-right" style={{color: "white"}} onClick={async e => {
                    await props.handleAddComment(addComment)
                    e.target.previousElementSibling.value = ''
                    }}></i>
            </div>
        </>
    )
}

export default Comments