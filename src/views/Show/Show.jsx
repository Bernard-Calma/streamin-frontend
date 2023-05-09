import React from "react";
import './Styles.css'
import { Comments } from "./components";

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
                <Comments video={props.video}/>
            </div>
            


        </section>
    );
};

export default Show;