import React , {Component} from "react"
import './App.css';


// Import the Header Components 
import Header from './components/Header'
import SignInHeader from './components/signInHeader'

// Import the Footer Components
import Footer from './components/Footer'

// Import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      username: "",
      password: "",
      user: "",
      loggedIn: true,
    }
  }
  render() {
    // if logged in is false
    return( !this.state.loggedIn
      ? <>
          <Header />
          <div>Log In Component Here</div>
          <Footer />
        </>
      : <>
        {/* If login successfull change state.loggedIn to true */}
        {/* // Pass in User Component  */}
        <SignInHeader />
        <div>User Component</div>
        <Footer />
      </>
                                
    )
  }
}

export default App;
