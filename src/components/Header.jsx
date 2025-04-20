import { Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import { useCart } from '../context/CartContext'

const Header = () => {
  const { cartItems } = useCart()

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">MyShop</Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item"><Link className="nav-link" to="/products">Products</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/cart">Cart 🛒
              {cartItems.length > 0 && (
                <span className="badge bg-danger ms-1">{cartItems.length}</span>
              )}
            </Link></li>
            <li className="nav-item"><Link className="nav-link" to="/login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/signup">Sign Up</Link></li>
          </ul>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Header
