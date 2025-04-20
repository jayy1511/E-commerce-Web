import { Link } from 'react-router-dom'

const NotFound = () => (
  <div className="container text-center mt-5">
    <h1 className="display-1">404</h1>
    <p className="lead">Oops! The page you're looking for doesn't exist.</p>
    <Link to="/" className="btn btn-outline-primary">Go Back Home</Link>
  </div>
)

export default NotFound
