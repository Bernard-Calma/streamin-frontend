import React , {Component} from "react"
import './App.css';

// Components
import LandingPage from './components/landingPage/LandingPage'
import Header from './components/Header'
import SignInHeader from './components/signInHeader'

//Import About
import About from './components/About';

//Signin Component
import SignIn from "./components/SignIn";

// Import the Footer Components
import Footer from './components/Footer'

// Import User Page Components
import User from "./components/User/user";

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

//URL
let baseURL = process.env.REACT_APP_SERVER_URL

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        id: "Guest",
        username: "Guest",
        name: "Guest"
      },
      username: "",
      password: "",
      passwordCheck: "",
      name: "",
      loginMessage: "",
      showAbout: false,
      videoId: "",
      search: "",
      // view pages
      register: false,
      loggedIn: false,
      showMain: false,
      showVideoList: true,
      createVideo: false,
      modifyVideo: false,
      searchVideos: false,
      // modify video
      videoToModify: "",
      searchedVideos: [],
    }
  }

  handleChange = (e) => {
    // console.log("test ", e.target)
    e.preventDefault();
    this.setState({
        [e.target.name]: e.target.value,
        [e.target.name]: e.target.value,
    })
  }

  handleLogin = (e) => {
    e.preventDefault();
    // console.log(baseURL)
    fetch(`${baseURL}/users/login/${this.state.username}/${this.state.password}`)
    .then(res => {
        if(res.status === 200) {
            return res.json();
        } else { 
          return []
        }
    })
    .then(data => {
      if(data.length === 0) {
        this.setState({
          loggedIn: false,
          loginMessage: "User not found."
        }) 
      } else {
        this.setState({
          user: data,
          loggedIn: true,
      })  
      }
        
    })
  }

  handleSignOut = (e) => {
    e.preventDefault()
    this.setState({
        loggedIn : false
    })
  }

  showAbout = () => {
    if(this.state.showAbout === true) {
      this.setState({
        showAbout: false
      })
    } else {
      this.setState({
        showAbout: true
      })
    }
  }

  handleRegister = (e) => {
    e.preventDefault();
    if(this.state.password !== this.state.passwordCheck){
      for(const child of e.target.querySelectorAll("input"))
        if(child.type === "password")
        child.value = ""; 
    this.setState({
      loginMessage: "Password does not match."
      })
      return;
    }
    // console.log(baseURL)
    fetch(`${baseURL}/users/`, {
        method: "POST",
        body: JSON.stringify(this.state),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
      return res.json()})
    .then(resJson => {
        if(!resJson._id) {
          this.setState({
            loginMessage: "Username is already taken.",
          })
          // console.log(e.target.querySelectorAll("input"))
          for(const child of e.target.querySelectorAll("input"))
            if(child.type === "password")
            child.value = ""; 
        } else {
          // console.log("JSon", resJson)
          this.setState({
            username: "",
            password: "",
            name: "",
            user: resJson,
            loggedIn: true,
            register: false,
            loginMessage: "Account Created."
          })
        } 
        
    })
  }

  handleLogo = (e) => {
    e.preventDefault();
    this.setState({
      showMain: true,
      showVideoList: true,
      createVideo: false,
      modifyVideo: false,
      videoToModify: "",
      register: false,
      searchVideos: false,
      searchedVideos: [],
    })
    
  }

  onClickVideo = (e) => {
    e.preventDefault();
    // console.log(e.target.id)
    this.setState({
        showVideoList: false,
        videoId: e.target.id,
    })
  }

  handleCreateSubmit = (e) =>{
    e.preventDefault();
    // console.log("create video")
    this.setState({
        createVideo: true,
        showVideoList: false,
    })
  }

  // Being used on Crate and Modify Forms
  handleCreateReturn = () => {
    this.setState({
        createVideo: false,
        showVideoList: true,
        modifyVideo: false,
        videoToModify: "",
    })
  }

  handleModifyVideo = (e) => {
    e.preventDefault()
    // console.log("Modify Video", e.target.parentNode.parentNode.firstChild.id)
    let videoID = e.target.parentNode.parentNode.firstChild.id;
    this.setState({
            showMain: false,
            modifyVideo: true,
            videoToModify: videoID,
        }
        
    )
  }

  onClickRegister = (e) => {
    e.preventDefault();
    this.setState({
        register: true,
    })
  // console.log(baseURL)
  }

  handleSearch = (e) => {
    e.preventDefault()
    fetch(`${baseURL}/videos/search/${this.state.search}`)
    .then(res => {
        if(res.status === 200) return res.json()
        return ""
    })
    .then(data => {
        this.setState({
          searchedVideos: data,
          searchVideos: true,
          showVideoList: true,
        })
    })
}


  render() {
    
    // if logged in is false
    // return( !this.state.loggedIn
    //   ? <>
    //     
    //     {this.state.showAbout === true
    //       ? <>
    //           <About/>
    //         </>      
    //       : <>
    //         <SignIn
    //           handleChange = {this.handleChange}
    //           handleLogin = {this.handleLogin}
    //           handleRegister = {this.handleRegister}
    //           message = {this.state.loginMessage}
    //           onClickRegister = {this.onClickRegister}
    //           register = {this.state.register}
    //         />
    //       </>
    //     }                 
    //     <Footer />
    //   </>
    //   : <>
    //     {/* If login successful change state.loggedIn to true */}
    //     {/* // Pass in User Component  */}
    //     <SignInHeader 
    //       signOut={this.handleSignOut} 
    //       handleLogo = {this.handleLogo}
    //       handleChange = {this.handleChange}
    //       search = {this.state.search}
    //       handleSearch = {this.handleSearch}
    //       />
    //     <User 
    //       key = {this.state.user._id} 
    //       user = {this.state.user} 
    //       showMain = {this.state.showMain} 
    //       handleLogo = {this.handleLogo} 
    //       onClickVideo = {this.onClickVideo}
    //       showVideoList = {this.state.showVideoList}
    //       videoId = {this.state.videoId}
    //       handleCreateSubmit = {this.handleCreateSubmit}
    //       createVideo = {this.state.createVideo}
    //       videoToModify = {this.state.videoToModify}
    //       handleCreateReturn = {this.handleCreateReturn}
    //       handleModifyVideo = {this.handleModifyVideo}
    //       modifyVideo = {this.state.modifyVideo}
    //       searchVideos = {this.state.searchVideos}
    //       searchedVideos = {this.state.searchedVideos}
    //     />     
    //     
    //   </>                               
    // )
    return(
      <>
        <Header
          showAbout = {this.showAbout}
          isShowingAbout = {this.state.showAbout}
          handleLogo={this.handleLogo}
        />
        <LandingPage 
          user={this.state.user}
        />
        <Footer />
      </>
    )
  }
}

export default App;
