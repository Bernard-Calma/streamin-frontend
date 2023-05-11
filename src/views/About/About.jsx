import React, {useState} from 'react'
import './Styles.css'
import { Member } from './components'

// Images
import imgRouse from '../../assets/developers/rousse.jpeg'
import imgBernard from '../../assets/developers/bernard.jpeg'
import imgJorge from '../../assets/developers/jorge.jpeg'

const About = () => {
    const [members] = useState([
        {
            name: "Rousse Biddon",
            position: "Front End Developer",
            description: "Rousse is amazing and totally kicked butt working on frontend and styling for the most part!",
            linkedIn: "https://www.linkedin.com/in/roussebidon/",
            github: "https://github.com/rbidon",
            image: imgRouse
        },
        {
            name: "Bernard Calma",
            position: "Full Stack Developer",
            description: "Bernard is top notch and did an amazing job on the vast majority of the backend and plenty of the frontend.",
            linkedIn: "https://www.linkedin.com/in/bernard-calma/",
            github: "https://github.com/Bernard-Calma",
            image: imgBernard
        },
        {
            name: "Jorge Gonzalez",
            position: "Front End Developer",
            description: "Jorge is also pretty cool and mostly worked on the frontend.",
            linkedIn: "https://www.linkedin.com/in/jorge-gonzalez-atx90125/",
            github: "https://github.com/jorge90125",
            image: imgJorge
        }
    ])
    
    return(
        <div id='aboutContainer'>
            <div id='aboutStreamin'>
                <h1>About Streamin</h1>
                <p className="projectDescription">Streamin is a React-based social media app that allows users to post videos they find interesting while being able to like the videos posted by other users, as well as comment on other users' videos and liking said comments.</p>
            </div>

            <div id='projectMemberInfoDiv'>
                {
                    members.map(member => <Member 
                        member = {member}
                    />)
                }
            </div>
        </div>
    )
}

export default About