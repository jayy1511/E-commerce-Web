import { Link } from 'react-router-dom'
import { useCart } from '../context/CartContext'

const dummyProducts = [
  {
    id: 1,
    name: 'RGB Mousepad',
    price: 19.99,
    description: 'Glowing LED edges, smooth surface for pro gaming.',
    image: 'https://m.media-amazon.com/images/I/71yC6nPmyZL._AC_SX679_.jpg'
  },
  {
    id: 2,
    name: 'Controller Grips',
    price: 9.99,
    description: 'Anti-slip controller grips for maximum control.',
    image: 'https://m.media-amazon.com/images/I/61UCzAhEHML._AC_SL1500_.jpg'
  },
  {
    id: 3,
    name: 'Thumbstick Covers',
    price: 5.99,
    description: 'Soft, textured thumbstick caps for better handling.',
    image: 'https://m.media-amazon.com/images/I/61o8c+GJkeL._AC_SL1500_.jpg'
  },
  {
    id: 4,
    name: 'Gaming Headset',
    price: 39.99,
    description: 'Surround sound with noise-cancelling mic.',
    image: 'https://m.media-amazon.com/images/I/71nz3cIcFOL._AC_SL1500_.jpg'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 59.99,
    description: 'Tactile switches and RGB lighting.',
    image: 'https://m.media-amazon.com/images/I/71AVbT9yguL._AC_SL1500_.jpg'
  },
  {
    id: 6,
    name: 'Gaming Chair',
    price: 129.99,
    description: 'Ergonomic chair with lumbar support.',
    image: 'https://m.media-amazon.com/images/I/61Y3Mv3mrPL._AC_SL1500_.jpg'
  }
]

const Products = () => {
  const { addToCart } = useCart()

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Our Products</h2>
      <div className="row">
        {dummyProducts.map(product => (
          <div key={product.id} className="col-md-4 mb-4" data-aos="fade-up">
            <div className="card h-100 shadow-sm">
              <img src={product.image} className="card-img-top" alt={product.name} />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <div className="mt-auto">
                  <p className="text-success fw-bold">${product.price}</p>
                  <Link
                    to={`/product/${product.id}`}
                    className="btn btn-outline-primary w-100 mb-2"
                  >
                    View Details
                  </Link>
                  <button
                    className="btn btn-outline-success w-100"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
