import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useCart} from '../context/useCart'
import { serverTimestamp } from 'firebase/firestore';
import { createOrder } from '../firebase/db';
import OrderSuccess from './OrderSuccess';
import { useState } from 'react'; 


function Checkout (){
    const {cart, clearCart} = useCart()
    const [orderData, setOrderData] = useState(null)

    const handleSubmit = async (e) =>{
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const name = form.name.value
        const phone = form.phone.value

        const order = {
            user: {email, name, phone},
            products: cart, 
            time: serverTimestamp(),
        }

        const id = await createOrder(order)
        setOrderData({ id, ...order })
        form.reset()
        clearCart()

      
    }

    if (orderData) {
        return <OrderSuccess order={orderData} />
    }

    return (
        <div
            style={{
                maxWidth: "480px",
                margin: "40px auto",
                padding: "30px",
                borderRadius: "12px",
                boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
                backgroundColor: "#fff",
                fontFamily: "'Helvetica Neue', sans-serif",
            }}
        >
            <h2 style={{ marginBottom: "25px", fontWeight: "600", color: "#222" }}>
                Finalizar compra
            </h2>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="email">
                <Form.Label style={{ fontWeight: "600", color: "#444" }}>
                    Email address
                </Form.Label>
                <Form.Control
                    type="email"
                    placeholder="tuemail@ejemplo.com"
                    required
                    style={{ padding: "12px", fontSize: "1rem", borderRadius: "8px" }}
                />
                <Form.Text className="text-muted" style={{ color: "#888" }}>
                    Nunca compartiremos tu email con nadie más.
                </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="name">
                <Form.Label style={{ fontWeight: "600", color: "#444" }}>
                    Nombre
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Lucas Martinez"
                    required
                    style={{ padding: "12px", fontSize: "1rem", borderRadius: "8px" }}
                />
                </Form.Group>

                <Form.Group className="mb-4" controlId="phone">
                <Form.Label style={{ fontWeight: "600", color: "#444" }}>
                    Teléfono
                </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="1150567893"
                    required
                    style={{ padding: "12px", fontSize: "1rem", borderRadius: "8px" }}
                />
                </Form.Group>

                <Button
                    variant="dark"
                    type="submit"
                    style={{
                        width: "100%",
                        padding: "14px",
                        fontWeight: "600",
                        fontSize: "1.1rem",
                        borderRadius: "8px",
                        transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={e => (e.currentTarget.style.backgroundColor = "#333")}
                    onMouseLeave={e => (e.currentTarget.style.backgroundColor = "#212529")}
                >
                    Finalizar compra
                </Button>
            </Form>
        </div>
    )
}

export default Checkout