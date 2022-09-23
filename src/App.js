import './App.css';
// Import bootstrap css
// import 'bootstrap/dist/css/bootstrap.min.css';

// Import the Header/Navbar Component
import Header from './components/Header'
//Import the Footer Component
import Footer from './components/Footer'
// Import the signInHeader Component
import SignInHeader from './components/signInHeader'
//Import the aboutPageHeader Component
import AboutPageHeader from './components/AboutPageHeader'

function App() {
  return (
    <div className="App">
      {/* Added the footer and header component that will display on the homepage & User page */}
      {/* <Header/>
      <Footer/> */}
      {/* SignIn Header Component that has Searchbar Component*/}
      {/* <SignInHeader/> */}
      {/* Aboutpage Header Component */}
      <aboutPageHeader/>
    </div>
  );
}

export default App;
