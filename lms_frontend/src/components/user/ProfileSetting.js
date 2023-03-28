import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';

function ProfileSetting() {
	return (
		<div className="container mt-4">
			<div className="row">
                <aside className='col-md-3'>
				    <Sidebar />
                </aside>

				<section className="col-md-9">
					<div className="card">
						<h3 className="card-header">Profile Setting</h3>
						<div className="row mt-2 p-2">
							<label htmlFor="" className='col-sm-2 col-form-label'>Full Name</label>
							<div className="col-sm-10">
								<input type="text" className='form-control' name="" id="" />
							</div>
						</div>
						<div className="row  p-2">
							<label htmlFor="" className='col-sm-2 col-form-label'>Email</label>
							<div className="col-sm-10">
								<input type="text" className='form-control' name="" id="" />
							</div>
						</div>
						<div className="row p-2">
							<label htmlFor="" className='col-sm-2 col-form-label'>Username</label>
							<div className="col-sm-10">
								<input type="text" className='form-control' name="" id="" />
							</div>
						</div>

						<div className="row p-2">
							<label htmlFor="" className='col-sm-2 col-form-label'>Password</label>
							<div className="col-sm-10">
								<input type="password"  className='form-control' name="" id="" />
							</div>
						</div>
						<div className="row  p-2">
							<div className="col-sm-10">
								<button className='btn btn-primary'>Update</button>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default ProfileSetting;
