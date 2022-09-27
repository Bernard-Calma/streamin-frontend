import React, {Component} from "react";

class Video extends Component {
    render(){

        return(
            <div className="video">
               
                {/* Modify Button */}
                <iframe src={this.props.video.videoLink}></iframe>
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