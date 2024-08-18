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
import { useDispatch, useSelector } from "react-redux";
import { getVideoListRedux } from "./features/video/videoSlice";

const App = () => {
  const {
    view,
    showLogin
  } = useSelector(store => store.view)
  let [appView, setAppView] = useState("Landing Page")

  // VIEWS
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
          modifyAppView={modifyAppView} 
        />
        { view === "Landing Page" || view === "My Videos"
          ? <LandingPage  
            showLogin = {showLogin}
            appView={appView}
            modifyAppView={modifyAppView}
          />
        : view === "About"
          ? <About/>
        : view === "Add Video"
          ? <AddVideo 
              modifyAppView={modifyAppView}
            />
        : view === "Show"
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
          />
        }
      </>
    )
}

export default App;
