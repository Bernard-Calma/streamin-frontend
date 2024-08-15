import React from "react";
import loading from '../../assets/loading.svg'
import './Styles.css';

const Loading = props => 
        <div className="loading">
            { props.loading && <img src={loading} alt="loading" /> }  
        </div> 

export default Loading