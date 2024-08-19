import './Styles.css'
import { useDispatch } from 'react-redux';
import { setView } from '../../features/view/viewSlice';

const Footer = () => {
    const dispatch = useDispatch();
    return(
        <footer className="footer container-fluid">
            <h3 className="footerHeader"> <span>©</span> Copyright {new Date().getFullYear()}</h3>
        <p onClick={() => dispatch(setView("About"))}>{`>About Us<`}</p>
        </footer>
    )
}
export default Footer; 