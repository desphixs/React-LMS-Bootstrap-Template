import { Link } from "react-router-dom"



function Header() {
    return (
      <div className=''>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container">
                  <Link className="navbar-brand" to="/">DexxaEd</Link>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav ms-auto">
                      <Link className="nav-link active" to="/">Home</Link>
                      <Link className="nav-link" to="/all-courses">Courses</Link>

                      {/* Teacher Drop */}
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Teachers</a>
                            <ul class="dropdown-menu">
                                <Link className="dropdown-item" to="/teacher-login">Login</Link>
                                <Link className="dropdown-item" to="/teacher-register">Register</Link>
                                <Link className="dropdown-item border-top mt-2" to="/teacher-dashboard">Dashboard</Link>
                            </ul>
                        </li>
                        {/* Student Drop */}
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">User</a>
                            <ul class="dropdown-menu">
                                <Link className="dropdown-item" to="/user-login">Login</Link>
                                <Link className="dropdown-item" to="/user-register">Register</Link>
                                <Link className="dropdown-item border-top mt-2" to="/user-dashboard">Dashboard</Link>
                            </ul>
                        </li>
                  </div>
                  </div>
              </div>
          </nav>
      </div>
    )
  }
  
  export default Header