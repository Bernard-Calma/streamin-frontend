import React, {Component} from "react";

class Video extends Component {
    onClickVideo = (e) => {
        e.preventDefault();
        console.log("Clicked");
    }

    render(){

        return(
            <div className="video">
               
                {/* Modify Button */}
                <iframe src={this.props.video.videoLink} style={{pointerEvents: "none"}} onClick={this.onClickVideo}></iframe>
                <h3>{this.props.video.title}</h3>
                <div className="videoButtons">
                    <button type="button" className ="btnModify">Modify</button>
                    {/* Delete Button */}
                    <button type="button"  className ="btnDelete">Delete</button>
                </div>

            </div>
        )
    }
}

export default Video;