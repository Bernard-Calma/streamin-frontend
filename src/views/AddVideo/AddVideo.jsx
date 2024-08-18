import React from "react";
import './Styles.css'
import { CreateForm } from "./components";

const AddVideo = props => {

    return(
        <section className="addVideo">
            <CreateForm 
                modifyAppView={props.modifyAppView}
                modifyVideoList={props.modifyVideoList}
            />
        </section>
    )
}

export default AddVideo