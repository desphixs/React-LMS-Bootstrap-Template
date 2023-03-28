import React from 'react'
import { Link } from 'react-router-dom'

function PopularCourses() {
  return (
    <div className='container'>
            {/* all Courses */}
			<h3 className="pb-1 mb-2 mt-4">Popular Courses</h3>
			<div className="row">
				
                <div className="col-md-4">
                        <div className="card">
                            <Link to="/detail/1">
                                <img src="1.jpg" className="card-img-top" alt="..." />
                            </Link>
                            <div className="card-body">
                                <h2 className="card-title">
                                    <Link to="/detail/1">Course title</Link>
                                </h2>
                            </div>
                            <div className="card-footer">
                                <span>Rating: 4.5/5.0</span>
                                <span className='float-end'>Views: 700</span>
                            </div>

                        </div>
                </div>
				
			</div>
			{/* End of all courses */}
            <nav aria-label="Page navigation examdple mt-4">
                <ul class="pagination mt-5 mb-5 justify-content-center">
                    <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item"><a class="page-link" href="#">2</a></li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item"><a class="page-link" href="#">Next</a></li>
                </ul>
            </nav>
    </div>
  )
}

export default PopularCourses