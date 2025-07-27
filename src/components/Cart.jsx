import { useCart } from '../context/useCart'
import { useNavigate } from 'react-router'
import CartItem from './CartItem'

function Cart() {
  const { cart, incrementQuantity, decrementQuantity, removeFromCart, clearCart } = useCart()
  const navigate = useNavigate()

  const total = cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)

  const isEmpty = cart.length === 0

  return (
    <CartItem
      cart={cart}
      isEmpty={isEmpty}
      total={total}
      onIncrement={incrementQuantity}
      onDecrement={decrementQuantity}
      onRemove={removeFromCart}
      onClear={clearCart}
      onNavigate={navigate}
    />
  )
}

export default Cart