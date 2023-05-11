import React , {Component, useState} from "react"
import './App.css';

// Components
import LandingPage from "./views/LandingPage/LandingPage";
import { 
  Header, 
  Footer } from "./components";

//Import About
import About from "./views/About/About";

// Import User Page Components
import User from "./components/User/user";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

//URL
let baseURL = process.env.REACT_APP_SERVER_URL

const App = () => {
  const [user, setUser] = useState({
    user: {
      id: "Guest",
      username: "Guest",
      name: "Guest"
    },
  })

  const [showLanding, setShowLanding] = useState(true)
  const [showLogin, setShowLogin] = useState(false)
  const [showAbout, setShowAbout] = useState(false)

  const [videoList, setVideoList] =useState([])


  //   state = {      
  //     show: "Landing Page",
  //     loginMessage: "",
  //     videoId: "",
  //     search: "",
  //     // view pages
  //     register: false,
  //     loggedIn: false,
  //     showMain: false,
  //     showVideoList: true,
  //     createVideo: false,
  //     modifyVideo: false,
  //     searchVideos: false,
  //     // modify video
  //     videoToModify: "",
  //     searchedVideos: [],
  //   }
  // }

  // handleChange = (e) => {
  //   // console.log("test ", e.target)
  //   e.preventDefault();
  //   setState({
  //       [e.target.name]: e.target.value,
  //       [e.target.name]: e.target.value,
  //   })
  // }

  // handleLogin = (e) => {
  //   e.preventDefault();
  //   // console.log(baseURL)
  //   fetch(`${baseURL}/users/login/${username}/${password}`)
  //   .then(res => {
  //       if(res.status === 200) {
  //           return res.json();
  //       } else { 
  //         return []
  //       }
  //   })
  //   .then(data => {
  //     if(data.length === 0) {
  //       setState({
  //         loggedIn: false,
  //         loginMessage: "User not found."
  //       }) 
  //     } else {
  //       setState({
  //         user: data,
  //         loggedIn: true,
  //     })  
  //     }
        
  //   })
  // }

  // handleSignOut = (e) => {
  //   e.preventDefault()
  //   setState({
  //       loggedIn : false
  //   })
  // }

  // showAbout = () => {
  //   if(showAbout === true) {
  //     setState({
  //       showAbout: false
  //     })
  //   } else {
  //     setState({
  //       showAbout: true
  //     })
  //   }
  // }

  // handleRegister = (e) => {
  //   e.preventDefault();
  //   if(password !== passwordCheck){
  //     for(const child of e.target.querySelectorAll("input"))
  //       if(child.type === "password")
  //       child.value = ""; 
  //   setState({
  //     loginMessage: "Password does not match."
  //     })
  //     return;
  //   }
  //   // console.log(baseURL)
  //   fetch(`${baseURL}/users/`, {
  //       method: "POST",
  //       body: JSON.stringify(state),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       }
  //   }).then(res => {
  //     return res.json()})
  //   .then(resJson => {
  //       if(!resJson._id) {
  //         setState({
  //           loginMessage: "Username is already taken.",
  //         })
  //         // console.log(e.target.querySelectorAll("input"))
  //         for(const child of e.target.querySelectorAll("input"))
  //           if(child.type === "password")
  //           child.value = ""; 
  //       } else {
  //         // console.log("JSon", resJson)
  //         setState({
  //           username: "",
  //           password: "",
  //           name: "",
  //           user: resJson,
  //           loggedIn: true,
  //           register: false,
  //           loginMessage: "Account Created."
  //         })
  //       } 
        
  //   })
  // }


  // onClickVideo = (e) => {
  //   e.preventDefault();
  //   // console.log(e.target.id)
  //   setState({
  //       showVideoList: false,
  //       videoId: e.target.id,
  //   })
  // }

  // handleCreateSubmit = (e) =>{
  //   e.preventDefault();
  //   // console.log("create video")
  //   setState({
  //       createVideo: true,
  //       showVideoList: false,
  //   })
  // }

  // // Being used on Crate and Modify Forms
  // handleCreateReturn = () => {
  //   setState({
  //       createVideo: false,
  //       showVideoList: true,
  //       modifyVideo: false,
  //       videoToModify: "",
  //   })
  // }

  // handleModifyVideo = (e) => {
  //   e.preventDefault()
  //   // console.log("Modify Video", e.target.parentNode.parentNode.firstChild.id)
  //   let videoID = e.target.parentNode.parentNode.firstChild.id;
  //   setState({
  //           showMain: false,
  //           modifyVideo: true,
  //           videoToModify: videoID,
  //       }
        
  //   )
  // }

  // onClickRegister = (e) => {
  //   e.preventDefault();
  //   setState({
  //       register: true,
  //   })
  // // console.log(baseURL)
  // }

//   const handleSearch = (e) => {
//     e.preventDefault()
//     fetch(`${baseURL}/videos/search/${search}`)
//     .then(res => {
//         if(res.status === 200) return res.json()
//         return ""
//     })
//     .then(data => {
//         setState({
//           searchedVideos: data,
//           searchVideos: true,
//           showVideoList: true,
//         })
//     })
// }

 const handleShowLandingPage = () => {
    setShowLanding(!showLanding)
    setShowAbout(false)
  }

  const handleToggleLoginPage = () => setShowLogin(!showLogin)
  
  const handleToggleAbout = () => setShowAbout(!showAbout)
  
  const handleChangeUser = newUser => setUser(newUser)

  const componentDidMount = async () => {
        await axios({
            method: "GET",
            url: `${process.env.REACT_APP_SERVER_URL}/videos`
        })
        .then(res => {
            // console.log(res.data)
            setVideoList(res.data)
        })
        .catch(err => console.log(err));
    }

    // if logged in is false
    // return( !loggedIn
    //   ? <>
    //     
    //     {showAbout === true
    //       ? <>
    //           <About/>
    //         </>      
    //       : <>
    //         <SignIn
    //           handleChange = {handleChange}
    //           handleLogin = {handleLogin}
    //           handleRegister = {handleRegister}
    //           message = {loginMessage}
    //           onClickRegister = {onClickRegister}
    //           register = {register}
    //         />
    //       </>
    //     }                 
    //     <Footer />
    //   </>
    //   : <>
    //     {/* If login successful change loggedIn to true */}
    //     {/* // Pass in User Component  */}
    //     <SignInHeader 
    //       signOut={handleSignOut} 
    //       handleLogo = {handleLogo}
    //       handleChange = {handleChange}
    //       search = {search}
    //       handleSearch = {handleSearch}
    //       />
    //     <User 
    //       key = {user._id} 
    //       user = {user} 
    //       showMain = {showMain} 
    //       handleLogo = {handleLogo} 
    //       onClickVideo = {onClickVideo}
    //       showVideoList = {showVideoList}
    //       videoId = {videoId}
    //       handleCreateSubmit = {handleCreateSubmit}
    //       createVideo = {createVideo}
    //       videoToModify = {videoToModify}
    //       handleCreateReturn = {handleCreateReturn}
    //       handleModifyVideo = {handleModifyVideo}
    //       modifyVideo = {modifyVideo}
    //       searchVideos = {searchVideos}
    //       searchedVideos = {searchedVideos}
    //     />     
    //     
    //   </>                               
    // )
    return(
      <>
        <Header
          user = {user}
          showAbout = {showAbout}
          handleShowLandingPage={handleShowLandingPage}
          handleToggleLoginPage={handleToggleLoginPage}
        />
        {
            !showAbout
            ? <>
                <LandingPage  
                  handleChangeUser = {handleChangeUser}
                  handleToggleLoginPage={handleToggleLoginPage}
                  showLanding = {showLanding}
                  showLogin = {showLogin}
                  user = {user}
                  videoList = {videoList}
                />
                <Footer 
                  handleToggleAbout = {handleToggleAbout}
                />
            </>
            : <>
              <About/>
            </>
        }
        
      </>
    )
}

export default App;
