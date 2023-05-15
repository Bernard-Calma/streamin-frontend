import React , {useEffect, useState} from "react"
import axios from "axios";
import './App.css';

// Components
import LandingPage from "./views/LandingPage/LandingPage";
import { 
  Header, 
  Footer } from "./components";

//Import About
import About from "./views/About/About";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
import AddVideo from "./views/AddVideo/AddVideo";
import Show from "./views/Show/Show";
import SignIn from "./views/Login/SignIn";

const App = () => {
  const [user, setUser] = useState({
    id: "632bb2e2699c899a76193e86",
    username: "Guest",
    name: "Guest"
  })

  const [showLogin, setShowLogin] = useState(false)
  const [appView, setAppView] = useState("Landing Page")
  const [videoList, setVideoList] = useState([])
  const [videoToShow, setVideoToShow] = useState({})

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

  // onClickRegister = (e) => {
  //   e.preventDefault();
  //   setState({
  //       register: true,
  //   })
  // // console.log(baseURL)
  // }

  // VIDEOS
  const getVideoList = async () => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_SERVER_URL}/videos`,
        withCredentials: true
    })
    .then(res =>  setVideoList(res.data))
    .catch(err => console.log(err));
  }

  const getUserVideos = async () => {
    console.log("Get user videos")
    await axios({
      method: "GET",
      url: `${process.env.REACT_APP_SERVER_URL}/videos/uservideos/${user.id}`,
      withCredentials: true
    })
    .then(res => {
      setVideoList(res.data);
      modifyAppView.show();
    })
    .catch(err => setVideoList([]))
  }

  // VIEWS
  const handleToggleLoginPage = () => setShowLogin(!showLogin)
  const handleChangeUser = newUser => setUser({...user, ...newUser})

  const modifyVideoList = {
    addVideo: newVideo => setVideoList([...videoList, newVideo]),
    deleteVideo: videoToDelete => setVideoList(videoList.filter(video => video._id !== videoToDelete._id)),
    modifyVideo: videToModify => setVideoList(videoList.map(video => video._id === videToModify._id ? videToModify : video))
  }

  const modifyAppView = {
    landingPage: () => setAppView("Landing Page"),
    about: () => setAppView("About"),
    addVideo: () => setAppView("Add Video"),
    show: () => setAppView("Show")
  }

  const modifyUser = {
    login: user => setUser(user),
    logout: () => setUser({
        id: "632bb2e2699c899a76193e86",
        username: "Guest",
        name: "Guest"
      })
  }

  // LOAD EFECTS
  useEffect(() => {
    getVideoList();
  },[])
    return(
      <>
        <Header
          user = {user}
          toggleLogin={() => setShowLogin(!showLogin)}
          modifyAppView={modifyAppView} 
          getUserVideos={getUserVideos}
        />
        { appView === "Landing Page"
          ? <LandingPage  
            videoList = {videoList}
            handleChangeUser = {handleChangeUser}
            handleToggleLoginPage={handleToggleLoginPage}
            showLogin = {showLogin}
            user = {user}
            modifyVideoList={modifyVideoList}
            appView={appView}
            modifyAppView={modifyAppView}
            setVideoToShow={setVideoToShow}
          />
        : appView === "About"
          ? <About/>
        : appView === "Add Video"
          ? <AddVideo 
              user={user}
              modifyVideoList={modifyVideoList}
              modifyAppView={modifyAppView}
            />
        : appView === "Show"
          ? <Show 
              video = {videoToShow}
              user = {user}
              modifyVideoList = {modifyVideoList}
              modifyAppView={modifyAppView}
            />
        : <></>
        }
        <Footer
          modifyAppView={modifyAppView}
        />
        {showLogin && 
          <SignIn 
              modifyUser = {modifyUser}
              modifyAppView = {modifyAppView}
              user = {user}
              toggleLogin = {() => setShowLogin(!showLogin)}
          />
        }
      </>
    )
}

export default App;
