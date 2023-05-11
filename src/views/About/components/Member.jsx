import React from "react";

const Member = props => {
    return(
        <div className='aboutDiv'>
            <img src={props.member.image} alt={props.member.name} className='teamMemberPic'></img>
            <div className="aboutInfo">
                <h1 className='aboutName'>{props.member.name}</h1>
                <h2 className='aboutRole'>{props.member.position}</h2>
                <p className="teamDescription">{props.member.description}</p>
                <div className="socials">
                    <a className="linkedin" href={props.member.linkedIn} target="_blank" rel="noopener noreferrer">{`${props.member.name}'s LinkedIn`}</a>
                    <a className="github" href={props.member.github} target="_blank" rel="noopener noreferrer">{`${props.member.name}'s GitHub`}</a>
                </div>
            </div>
        </div>
    )
}

export default Member;