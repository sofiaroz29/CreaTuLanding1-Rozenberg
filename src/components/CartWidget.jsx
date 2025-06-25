import cart from "../assets/cart.webp"
import "../NavbarStyles.css"


function CartWidget () {
    return (
        <div className="cart-container">
            <img className="carticon" src={cart}  />
            <div className="count-products">
                <span id="contador-productos">1</span>
            </div>
        </div>
    );
}


export default CartWidget;
