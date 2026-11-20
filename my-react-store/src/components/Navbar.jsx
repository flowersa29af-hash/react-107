// import
import { NavLink } from "react-router-dom";
import "./Navbar.css";

//Logic section
function Navbar() {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className="navbar-brand">
                    <h2>My Online Store</h2>
                </div>
                <ul className="navbar-nav">
                    <li><NavLink to="/" end className="nav-link">Home</NavLink></li>
                    <li><NavLink to="/catalog" className="nav-link">Catalog</NavLink></li>
                    <li><NavLink to="/about" className="nav-link">About</NavLink></li>
                    <li><NavLink to="/contact" className="nav-link">Contact</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}
//export section
export default Navbar;
