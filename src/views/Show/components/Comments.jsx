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
        // console.log(comment)
        if (!comment.likes.includes(props.user.username) && props.user.username !== "Guest") 
            props.handleEditComment({...comment, likes: comment.likes.push(props.user.id)})
            // console.log(comment);
        else props.handleToggleLoginPage();
    }

    const handleAddComment = async e => {
        if (!props.user.username === "Guest") {
            await props.modifyComment.add(addComment);
            e.target.previousElementSibling.value = '';
        } else props.handleToggleLoginPage();
        
    }

    // console.log(props.video.comments[0].likes.includes(props.user.id))
    return(
        <>
            <h3>Comments</h3>
            <div className="comments">
                {props.comments.map(comment => 
                    <div className="comment" key={comment._id}>
                        <h3 className="user">{comment.user}</h3>
                        <div className="date">
                            <p className="daysAgo">{format(comment.date)}</p> 
                                {comment.user === props.user.username
                                ? <i className="fa-regular fa-trash-can deleteComment" onClick={() => props.modifyComment.delete(comment)}/>
                                : <>
                                    {comment.likes.includes(props.user.id)
                                        ? <i className="fa-solid fa-heart"/>
                                        : <i className="fa-regular fa-heart" onClick={() => handleLikeComment(comment)}/>
                                    }
                                    <p>{comment.likes.length}</p>
                                </>
                                }
                        </div>
                        <p className="text">{comment.comment}</p>
                    </div>
                )}
            </div>
            <div className="inputComment">
                <input type="text" placeholder="Write a comment" onChange={handleChange}/>
                <i className="fa-solid fa-arrow-right" style={{color: "white"}} onClick={handleAddComment}></i>
            </div>
        </>
    )
}

export default Comments