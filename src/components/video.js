import React, {Component} from "react";

class Video extends Component {

    render(){
        return( 
            
            <div className="video">
                {/* Modify Button */}
                <div onClick={this.props.onClickVideo} id={this.props.video._id}>
                    <iframe title={this.props.video._id} name= {this.props.title} src={this.props.video.videoLink} style={{pointerEvents: "none"}}></iframe>
                </div>
                <h3 className="videoTitle">{this.props.video.name}</h3>
                {!this.props.searchVideos
                // if user do a search do not show modiy and delete
                    ?
                    <>
                    <div className="videoButtons">
                        <button 
                            type="button" 
                            className ="btnModify" 
                            onClick={this.props.handleModifyVideo}
                        >Modify</button>
                        {/* Delete Button */}
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