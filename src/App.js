import React , {useEffect, useState} from "react"
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
import { useDispatch } from "react-redux";
import { getVideoListRedux } from "./features/video/videoSlice";

const App = () => {

  let [appView, setAppView] = useState("Landing Page")
  let [showLogin, setShowLogin] = useState(false)

  // VIEWS
  const handleToggleLoginPage = () => setShowLogin(!showLogin)

  const modifyAppView = {
    landingPage: () => setAppView("Landing Page"),
    about: () => setAppView("About"),
    addVideo: () => setAppView("Add Video"),
    show: () => setAppView("Show"),
    myVideos: () => setAppView("My Videos")
  }

  // Redux initialization
  const dispatch = useDispatch();

  // LOAD EFECTS
  useEffect(() => {
    
    dispatch(getVideoListRedux())
    // eslint-disable-next-line
  },[])

    return(
      <>
        <Header
          toggleLogin={() => setShowLogin(!showLogin)}
          modifyAppView={modifyAppView} 
        />
        { appView === "Landing Page" || appView === "My Videos"
          ? <LandingPage  
            handleToggleLoginPage={handleToggleLoginPage}
            showLogin = {showLogin}
            appView={appView}
            modifyAppView={modifyAppView}
          />
        : appView === "About"
          ? <About/>
        : appView === "Add Video"
          ? <AddVideo 
              modifyAppView={modifyAppView}
            />
        : appView === "Show"
          ? <Show 
              modifyAppView={modifyAppView}
            />
        : <></>
        }
        <Footer
          modifyAppView={modifyAppView}
        />
        {showLogin && 
          <SignIn 
              modifyAppView = {modifyAppView}
              handleToggleLoginPage = {handleToggleLoginPage}
          />
        }
      </>
    )
}

export default App;
