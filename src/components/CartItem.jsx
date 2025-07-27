import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'

function CartItem({ cart, isEmpty, total, onIncrement, onDecrement, onRemove, onClear, onNavigate }) {
  if (isEmpty) {
    return (
      <div>
        <h2>Tu carrito está vacío</h2>
        <h5>
          Te invitamos a recorrer nuestra tienda online y conocer todos los productos que tenemos para vos.
        </h5>
        <Button onClick={() => onNavigate("/")}>Ver los productos</Button>
      </div>
    )
  }

  return (
    <div>
      <ListGroup>
        {cart.map((prod) => (
          <ListGroup.Item key={prod.id} className="d-flex justify-content-between align-items-center">
            <img
              src={prod.thumbnail}
              alt={prod.title}
              style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '8px' }}
            />
            <div className="w-50">
              <strong>{prod.title}</strong>
              <div>Precio unitario: ${prod.price}</div>
              <div>Subtotal: ${prod.price * prod.cantidad}</div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <Button variant="secondary" onClick={() => onDecrement(prod.id)} disabled={prod.cantidad <= 1}>
                -
              </Button>
              <span>{prod.cantidad}</span>
              <Button variant="secondary" onClick={() => onIncrement(prod.id)}>+</Button>
            </div>
            <Button variant="danger" onClick={() => onRemove(prod.id)}>Eliminar</Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      <div className="text-center mt-4">
        <h3>Total: ${total}</h3>
        <Button className="w-50 mt-3" variant="dark" onClick={() => onNavigate('/checkout')}>
          Ir al checkout
        </Button>
        <Button className="w-75 mt-2" variant="outline-danger" onClick={onClear}>
          Vaciar carrito
        </Button>
      </div>
    </div>
  )
}

export default CartItem