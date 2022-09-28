import React, {Component} from "react";

class Video extends Component {

    render(){
        return( 
            <div className="video">
                {/* Modify Button */}
                <div onClick={this.props.onClickVideo} id={this.props.video._id}>
                    <iframe name= {this.props.title} src={this.props.video.videoLink} style={{pointerEvents: "none"}}></iframe>
                </div>
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