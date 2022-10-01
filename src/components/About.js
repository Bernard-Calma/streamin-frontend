import React, {Component} from 'react'

class About extends Component {
    render() {
        return(
            <div id='aboutContainer'>
                <div id='aboutStreamin'>
                    <h1>About Streamin</h1>
                    <div className="projectDescription">
                    <p>Streamin is a React-based social media app that allows users to post videos they find interesting while being able to like the videos posted by other users, as well as comment on other users' videos and liking said comments.</p>
                    </div>
                </div>
                <div id='projectMemberInfoDiv'>
                    <div className='aboutDiv'>

                        <img src='images/rousse.jpeg' alt='Rousse Pic' className='teamMemberPic'></img>
                        <div className="aboutInfo">
                        <h1>Rousse Bidon</h1>
                        <div className="teamDescription">
                        <p>Rousse is amazing and totally kicked butt working on frontend and styling for the most part!</p>
                        </div>
                        <div className="socials">
                        <a className="linkedin" href='https://www.linkedin.com/in/roussebidon/' target="_blank">Rousse's LinkedIn</a>
                        <a className="github" href='https://github.com/rbidon' target="_blank">Rousse's GitHub</a>
                        </div>
                        </div>
                    </div>
                    <div className='aboutDiv'>
                        <img src='images/bernard.jpeg' alt='Bernard Pic' className='teamMemberPic'></img>
                        <div className="aboutInfo">
                        <h1>Bernard Calma</h1>
                        <p>Bernard is top notch and did an amazing job on the vast majority of the backend and plenty of the frontend.</p>
                        <div className="socials">
                        <a className="linkedin" href='https://www.linkedin.com/in/bernard-calma/' target="_blank">Bernard's LinkedIn</a>
                        <a className="github" href='https://github.com/Bernard-Calma' target="_blank">Bernard's GitHub</a>
                        </div>
                        </div>
                    </div>
                    <div className='aboutDiv'>
                        <img src="images/jorge.jpeg" alt='Jorge Pic' className='teamMemberPic'/>
                        <div className="aboutInfo">
                        <h1>Jorge Gonzalez</h1>
                        <p>Jorge is also pretty cool and mostly worked on the frontend.</p>
                        <div className="socials">
                        <a  className="linkedin" href='https://www.linkedin.com/in/jorge-gonzalez-atx90125/' target="_blank">Jorge's LinkedIn</a>
                        <a className="github" href='https://github.com/jorge90125' target="_blank">Jorge's GitHub</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About