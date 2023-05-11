import React from "react";
import loading from '../../assets/loading.gif'
import './Styles.css';

const Loading = props => 
        <div className="loading">
            { props.loading && <img src={loading} alt="" /> }  
        </div> 

export default Loading