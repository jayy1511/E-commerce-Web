const Signup = () => (
    <div className="container mt-5">
      <h2>Sign Up</h2>
      <form className="mt-4">
        <div className="mb-3"><input className="form-control" placeholder="First Name" /></div>
        <div className="mb-3"><input className="form-control" placeholder="Last Name" /></div>
        <div className="mb-3"><input type="email" className="form-control" placeholder="Email" /></div>
        <div className="mb-3"><input type="password" className="form-control" placeholder="Password" /></div>
        <button className="btn btn-success">Create Account</button>
      </form>
    </div>
  )
  
  export default Signup
  