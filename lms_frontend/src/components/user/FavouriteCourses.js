import React from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'

function FavouriteCourses() {
  return (
    <div className='container mt-4'>
        <div className="row">
            <aside className='col-md-3'>
                <Sidebar />
            </aside>

            <section className='col-md-9'>
                <div className="card">
                    <h3 className='card-header'>Favourite Courses</h3>
                    <div className="card-body">
                        <table className="table table-bordered">
                            <thead>
                                <th>Name</th>
                                <th>Created By</th>
                                <th>Action</th>
                            </thead>
                            <tr>
                                <td>Django Development</td>
                                <td><Link to={"/"}>Destiny Franks</Link></td>
                                <td><button className='btn btn-danger active'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Django Development</td>
                                <td><Link to={"/"}>Destiny Franks</Link></td>
                                <td><button className='btn btn-danger active'>Delete</button></td>
                            </tr>
                            <tr>
                                <td>Django Development</td>
                                <td><Link to={"/"}>Destiny Franks</Link></td>
                                <td><button className='btn btn-danger active'>Delete</button></td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}

export default FavouriteCourses