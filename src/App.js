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

  // VIDEOS
  const getVideoList = async () => {
    await axios({
        method: "GET",
        url: `${process.env.REACT_APP_SERVER_URL}/videos`
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
    modifyVideo: videoToModify => {
      // console.log(videoToModify)
      setVideoList(videoList.map(video => video._id === videoToModify._id ? videoToModify : video))
    }
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

  useEffect(() => {
    const updateVideoToShow = () => {
      if(videoToShow) setVideoToShow(videoList.find(video => video._id === videoToShow._id))
    }

    updateVideoToShow();
  }, [videoList])
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
