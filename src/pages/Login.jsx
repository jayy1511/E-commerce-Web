const Login = () => (
    <div className="container mt-5">
      <h2>Login</h2>
      <form className="mt-4">
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" placeholder="Enter password" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  )
  
  export default Login
  