import React from 'react'
import { Link } from 'react-router-dom'

function TeacherSidebar() {
  return (
        <div className="card">
            <h5 className='card-header'>Student Dashboard</h5>
            <div className="list-group list-group-flush">
                <Link to="/teacher-dashboard" className='list-group-item list-group-item-action actidve'>User Dashboard</Link>
                <Link to="/teacher-courses" className='list-group-item list-group-item-action actidve'>My Courses</Link>
                <Link to="/add-course" className='list-group-item list-group-item-action actidve'>Add Course</Link>
                <Link to="/teacher-users" className='list-group-item list-group-item-action actidve'>My Students</Link>
                <Link to="/teacher-profile-setting" className='list-group-item list-group-item-action'>Profile Setting</Link>
                <Link to="/teacher-change-password" className='list-group-item list-group-item-action'>Change Password</Link>
                <Link to="/teacher-login" className='list-group-item list-group-item-action text-danger'>Logout</Link>
            </div>
        </div>
  )
}

export default TeacherSidebar