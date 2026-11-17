// import
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
                    <li><a href="#home" className="nav-link">Home</a></li>
                    <li><a href="#catalog" className="nav-link">Catalog</a></li>
                    <li><a href="#about" className="nav-link">About</a></li>
                </ul>
            </div>
        </nav> 
    );
}
//export sectionS
export default Navbar;