import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux";
import { format } from "timeago.js"

const Comments = props => {
    const {
        comments
    } = useSelector(store => store.videoList.videoToShow)

    const {
        user
    } = useSelector(store => store.user)

    const {
        username,
        _id
    } = user

    const [addComment, setAddComment] = useState({
        user: {...user},
        likes: [],
        comment: "",
        date: new Date()
    });

    const handleChange = e => setAddComment({...addComment, comment: e.target.value})

    const handleLikeComment = comment => {
        // console.log(comment)
        if (!comment.likes.includes(username) && username !== "Guest") 
           props.modifyComment.modify({...comment, likes: [...comment.likes, username]})
        else {
            props.handleToggleLoginPage();
        }
    }

    const handleAddComment = e => {
        e.preventDefault();
        // console.log(user)
        if (username !== "Guest") {
            // console.log("Add Comment: ", addComment)
            props.modifyComment.add(addComment);
            e.target.previousElementSibling.value = '';
        } else {
            props.handleToggleLoginPage();
        }
        
    }

    useEffect(() => {
        setAddComment({...addComment, user: username})
    },[user])

    // console.log(props.video.comments[0].likes.includes(username))
    return(
        <>
            <h3>Comments</h3>
            <div className="comments">
                {comments.map(comment => 
                    <div className="comment" key={comment._id || new Date(comment.date).getMilliseconds()}>
                        <h3 className="user">{comment.user}</h3>
                        <div className="date">
                            <p className="daysAgo">{format(comment.date)}</p> 
                                {comment.user === username
                                ? <i className="fa-regular fa-trash-can deleteComment" onClick={() => props.modifyComment.delete(comment)}/>
                                : <>
                                    {comment.likes.includes(username)
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