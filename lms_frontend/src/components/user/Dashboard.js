import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import MyCourses from './MyCourses';

function Dashboard() {
	return (
		<div className="container mt-4">
			<div className="row">
                <aside className='col-md-3'>
				    <Sidebar />
                </aside>

				<section className="col-md-9">
					User Dashboard
				</section>
			</div>
		</div>
	);
}

export default Dashboard;
