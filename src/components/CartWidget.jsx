import cart from "../assets/cart.webp"
import "../NavbarStyles.css"


function CartWidget () {
    return (
        <div className="cart-container">
            <img className="carticon" src={cart} width="50" height="50" />
            <div className="count-products">
                <span id="contador-productos">1</span>
            </div>
        </div>
    );
}


export default CartWidget;
