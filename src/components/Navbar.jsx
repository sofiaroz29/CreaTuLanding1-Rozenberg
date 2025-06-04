import CartWidget from "./CartWidget";
import logo from "../assets/logo.png"
import "../NavbarStyles.css"
function Navbar (){
    return (
        <nav className="navbar">
            <div>
                <img src = {logo} width="200" height="40"></img>
            </div>
            
            <div>
                <ul id = "navbar-menu">
                    <li>REMERAS Y TOPS</li>
                    <li>PANTALONES</li>
                    <li>VESTIDOS</li>
                    <li>ACCESORIOS</li>
                </ul>
            </div>
            <CartWidget />
        </nav>
        
    );
    
}

export default Navbar;