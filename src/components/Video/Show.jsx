import React from "react";

const Show = props => {
    return (
        <section className="showVideo">
            <div className="left">
                <div className="showVideo videoPlayer">
                    <iframe 
                        title={props.video._id}
                        name={props.title}
                        src={props.video.videoLink}
                    />
                </div>

                <div className="divTitle">
                    <div className="buttons">
                        <i class="fa-solid fa-heart"></i>
                        <p>{props.video.likes.length}</p>
                    </div>
                    <h2 className="title"> {props.video.title} </h2>
                </div>
                <p className="description">{props.video.description}</p>    
            </div>

            <div className="right">
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
            </div>
            


        </section>
    );
};

export default Show;