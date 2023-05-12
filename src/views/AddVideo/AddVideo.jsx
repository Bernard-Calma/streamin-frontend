import React, {useState} from "react";
import './Styles.css'
import { CreateForm } from "./components";

const AddVideo = props => {
    return(
        <section className="addVideo">
            <CreateForm 
                user={props.user}
            />
        </section>
    )
}

export default AddVideo