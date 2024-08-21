import React , {useEffect} from "react"
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

  const {
    navSelected
} = useSelector(store => store.view)

  // Redux initialization
  const dispatch = useDispatch();

  // LOAD EFECTS
  useEffect(() => {
    
    dispatch(getVideoListRedux())
    // eslint-disable-next-line
  },[])

    return(
      <>
        <Header/>
        {(showLogin || navSelected === "My Videos") && <SignIn/>}
        { view === "Landing Page" || view === "My Videos" || view === "Search"
          ? <LandingPage/>
        : view === "About"
          ? <About/>
        : view === "Add Video"
          ? <AddVideo/>
        : view === "Show"
          ? <Show/>
        : <></>
        }
        <Footer/>
        
      </>
    )
}

export default App;
