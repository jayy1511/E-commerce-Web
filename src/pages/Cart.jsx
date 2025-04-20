import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

const Cart = () => {
  const { cartItems, removeFromCart, increaseQty, decreaseQty } = useCart()

  const getTotal = () =>
    cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)

  if (cartItems.length === 0) {
    return (
      <div className="container text-center mt-5">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/products" className="btn btn-primary mt-3">Shop Now</Link>
      </div>
    )
  }

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Your Shopping Cart</h2>
      <div className="row">
        <div className="col-lg-8">
          {cartItems.map(item => (
            <div key={item.id} className="card mb-3 shadow-sm">
              <div className="row g-0 align-items-center">
                <div className="col-md-4">
                  <img src={item.image} className="img-fluid rounded-start" alt={item.name} />
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text text-success fw-bold">${item.price}</p>
                    <div className="d-flex align-items-center">
                      <button
                        className="btn btn-outline-secondary me-2"
                        onClick={() => decreaseQty(item.id)}
                      >−</button>
                      <span>{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary ms-2"
                        onClick={() => increaseQty(item.id)}
                      >+</button>
                      <button
                        className="btn btn-danger ms-4"
                        onClick={() => removeFromCart(item.id)}
                      >Remove</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-4">
          <div className="card p-3 shadow-sm">
            <h4>Order Summary</h4>
            <hr />
            <p>Total Items: {cartItems.length}</p>
            <h5>Total Price: <span className="text-success">${getTotal()}</span></h5>
            <button className="btn btn-primary mt-3 w-100">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
