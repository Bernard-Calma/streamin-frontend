import React from "react"

const Comments = props => {
    return(
        <>
            <h3>Comments</h3>
            <div className="comments">
                {props.video.comments.map(comment => 
                    <div className="comment">
                        <h3 className="user">{comment.user}</h3>
                        <p className="text">{comment.comment}</p>
                        <p className="date">{comment.date}</p>
                    </div>
                )}
            </div>
            <div className="inputComment">
                <input type="text" placeholder="Write a comment"/>
                <i class="fa-solid fa-arrow-right" style={{color: "white"}}></i>
            </div>
        </>
    )
}

export default Comments