import { Link } from "react-router-dom"
import './Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <img className="logo" src="/logo.png" alt="logo" />
            <nav className="nav">
                    <Link className="Link" to="/">HOME</Link>
                    <Link className="Link" to="/menu">MENU</Link>
                    <Link className="Link" to='/about'>ABOUT</Link>
                    <Link className="Link" to='/offers'>OFFERS</Link>
                    <Link className="Link" to='/reservation'>RESERVATION</Link>
                    <Link className="Link" to="/blog">BLOG</Link>
                    <Link className="Link" to='/contact'>CONTACT</Link>
            </nav>
            <button className="btn">ORDER NOW</button>
            <img src="/play.png" alt="image" />
        </div>
    );
}

export default Navbar;