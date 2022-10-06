import React, {Component} from "react";

class Video extends Component {

    render(){
        return( 
            <div className="video">
                {/* Modify Button */}
                <div onClick={this.props.onClickVideo} id={this.props.video._id}>
                    <iframe title={this.props.video._id} name= {this.props.video.title} src={this.props.video.videoLink} style={{pointerEvents: "none"}}></iframe>
                </div>
                <h3 className="videoTitle">{this.props.video.title}</h3>
                
                    {/* Delete Button */}
                    {this.props.video.user === this.props.user._id
                        ?
                        <>
                            <div className="videoButtons">
                                <button 
                                    type="button" 
                                    className ="btnModify" 
                                    onClick={this.props.handleModifyVideo}
                                >
                                    Modify
                                </button>
                                <button type="button"  className ="btnDelete" onClick={this.props.deleteVideo}>Delete</button>
                            </div>
                        </>
                        :
                        <>
                        
                        </>
                    }    
            </div>
        )
    }
}

export default Video;