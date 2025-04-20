import { useParams } from 'react-router-dom'

const productData = {
  1: { name: 'RGB Mousepad', description: 'Cool lighting.', price: 19.99 },
  2: { name: 'Controller Grips', description: 'Extra grip.', price: 9.99 },
  3: { name: 'Thumbstick Covers', description: 'Precision control.', price: 5.99 },
}

const ProductDetail = () => {
  const { id } = useParams()
  const product = productData[id]

  if (!product) return <h2>Product not found</h2>

  return (
    <div className="container mt-5">
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p className="text-success fw-bold">${product.price}</p>
      <button className="btn btn-primary">Add to Cart</button>
    </div>
  )
}

export default ProductDetail

