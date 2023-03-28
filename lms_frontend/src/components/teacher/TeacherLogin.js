import React from 'react'

function Login() {
  return (
    <div className='container'>
      <div className="row mt-4">
				<div className="col-6 offset-3">
					<div className="card">
            <h5 className="card-header">Teacher Login</h5>
						<div className="card-body">
							<form action="">
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Username</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Password</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                  <input type="checkbox" className='form-check-input' id='checkbox' />
                  <label htmlFor="checkbox" className='form-check-label'>Remember Me</label>
                </div>
                <div className="mb-3">
                  <button className='btn btn-primary'>Login</button>
                </div>
              </form>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Login