import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"
import "../NavbarStyles.css"
import { Link } from "react-router";
function Navbar (){
    return (
        <nav className="navbar">
            <Link to="/" className = "navbar-logo">
                <img src={logo} width="200" height="40" alt="Logo" />
            </Link>
            
            <div>
                <ul id = "navbar-menu">
                    <li><Link to = {"/category/tops"}>MUJER</Link></li>
                    <li><Link to = {"/category/mens-shirts"}>HOMBRE</Link></li>
                    <li><Link to = {"/category/beauty"}>BEAUTY</Link></li>
                    <li><Link to = {"/category/womens-jewellery"}>ACCESORIOS</Link></li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
    
}

export default Navbar;