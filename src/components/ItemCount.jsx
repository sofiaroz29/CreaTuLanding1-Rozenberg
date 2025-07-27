import {useState, useContext} from 'react';
import {cartContext} from "../context/CartContext"

function ItemCount({item}){
    const [count, setCount] = useState(1);
    const {addToCart} = useContext(cartContext);

    const handleSumar = ()=>{
        setCount(count + 1);
    }

    const handleRestar = ()=>{
        setCount(count-1);
    }

    const handleAddToCart = () =>{
        addToCart({
            id: item.id,
            title: item.title,
            price: item.price,
            thumbnail: item.thumbnail,
            cantidad: count
        })
    }
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginTop: "20px",
            }}
        >
            <button
                onClick={handleRestar}
                disabled={count === 1}
                style={{
                    padding: "8px 14px",
                    fontSize: "18px",
                    borderRadius: "6px",
                    border: "1.5px solid #333",
                    backgroundColor: count === 1 ? "#eee" : "#fff",
                    cursor: count === 1 ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s",
                }}
            >
               -
            </button>

            <p
                style={{
                    fontSize: "1.3rem",
                    minWidth: "30px",
                    textAlign: "center",
                    margin: 0,
                    fontWeight: "600",
                    color: "#222",
                }}
            >
                {count}
            </p>

            <button
                onClick={handleSumar}
                style={{
                padding: "8px 14px",
                fontSize: "18px",
                borderRadius: "6px",
                border: "1.5px solid #333",
                backgroundColor: "#fff",
                cursor: "pointer",
                transition: "background-color 0.3s",
                }}
            >
                +
            </button>

            <button
                onClick={handleAddToCart}
                disabled={count === 0}
                style={{
                    marginLeft: "auto",
                    backgroundColor: "#1a1a1a",
                    color: "white",
                    border: "none",
                    padding: "10px 18px",
                    borderRadius: "6px",
                    fontWeight: "600",
                    cursor: count === 0 ? "not-allowed" : "pointer",
                    transition: "background-color 0.3s",
                }}
                onMouseEnter={e => {
                    if (count !== 0) e.currentTarget.style.backgroundColor = "#333";
                }}
                onMouseLeave={e => {
                    e.currentTarget.style.backgroundColor = "#1a1a1a";
                }}
            >
                Agregar al carrito
            </button>
        </div>

    )

}

export default ItemCount