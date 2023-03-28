import React from 'react'

function Register() {
  return (
    <div className='container'>
      <div className="row mt-4">
				<div className="col-6 offset-3">
					<div className="card">
            <h5 className="card-header">User Register</h5>
						<div className="card-body">
							<form action="">
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Full Name</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Email</label>
                  <input type="email" className='form-control' />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Username</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Password</label>
                  <input type="text" className='form-control' />
                </div>
                <div className="mb-3">
                  <label htmlFor="" className='form-label'>Intrest</label>
                  <textarea className='form-control' placeholder='Python, Django, React e.t.c'></textarea>
                </div>
                
                <div className="mb-3">
                  <button className='btn btn-primary w-100'>Register</button>
                </div>
              </form>
						</div>
					</div>
				</div>
			</div>
    </div>
  )
}

export default Register