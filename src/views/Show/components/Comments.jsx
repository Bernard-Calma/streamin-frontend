import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { format } from "timeago.js"
import { showLogin } from "../../../features/view/viewSlice";
import { modifyVideo } from "../../../features/video/videoSlice";

const Comments = () => {
    const dispatch = useDispatch();

    const {
        videoToShow
    } = useSelector(store => store.videoList)

    const {
        comments
    } = videoToShow

    const {
        username
    } = useSelector(store => store.user.user)

    const [newComment, setNewComment] = useState({
        likes: [],
        comment: "",
        date: new Date()
    });

    const handleChange = e => setNewComment({...newComment, comment: e.target.value})

    const handleLikeComment = comment => {
        // console.log(comment)
        if (!comment.likes.includes(username) && username !== "Guest") 
           modifyComment.modify({...comment, likes: [...comment.likes, username]})
        else {
            dispatch(showLogin());
        }
    }

    const modifyComment = {
        add: newComment => {
            console.log("Add comment")
            if (username !== "Guest") {
                // console.log("Add Comment: ", newComment)
                dispatch(modifyVideo({...videoToShow, comments: [...comments, {...newComment, user: username}]}))
                setNewComment({
                    likes: [],
                    comment: "",
                    date: new Date()})
            } else { dispatch(showLogin()) }  
            
            },
        delete: deleteComment => {
            dispatch(modifyVideo({...videoToShow, 
                comments: comments.filter(comment => comment._id !== deleteComment._id)}))
            },
        modify: modifiedComment => {
            dispatch(modifyVideo({...videoToShow,
                comments: comments.map(comment => comment._id === modifiedComment._id ? modifiedComment : comment)
            }))
        }
    }

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
                                ? <i className="fa-regular fa-trash-can deleteComment" onClick={() => modifyComment.delete(comment)}/>
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
                <input type="text" placeholder="Write a comment" value = {newComment.comment} onChange={handleChange}/>
                <i className="fa-solid fa-arrow-right" style={{color: "white"}} onClick={() => modifyComment.add(newComment)}></i>
            </div>
        </>
    )
}

export default Comments