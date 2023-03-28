import React from 'react'
import {useParams} from  'react-router-dom'
import { Link } from 'react-router-dom'


function TeacherDetail() {
    let {teacher_id} = useParams()
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img className="img-thumbnail" src="/1.jpg" alt="..." />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3>Destiny Franks</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptates laborum beatae consequuntur at exercitationem quis maxime voluptate alias, omnis, nesciunt, reprehenderit provident id tempora animi suscipit in repellat veniam!</p>
          <p><b>Skills:</b> <Link to="/category-courses/django">Django</Link>, <Link to="/category-courses/Node.Js">Node.Js</Link>, <Link to="/category-courses/react">React</Link></p>
          <p><b>Recent Course:</b> <Link to="/teacher-detail/1">Django Fullstack Course</Link></p>
          <p><b>Total Courses:</b> 4</p>
          <p><b>Rating:</b> 4.5</p>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h4>Course Lists</h4>
          
        </div>
        <div className="list-group list-group-flush">
			<Link to="/detail/1" className='list-group-item list-group-item-action'>React Course 1</Link>
			<Link to="/detail/1" className='list-group-item list-group-item-action'>Python Course 2</Link>
			<Link to="/detail/1" className='list-group-item list-group-item-action'>PHP Course 3</Link>
			<Link to="/detail/1" className='list-group-item list-group-item-action'>Node.js Course 4</Link>
        </div>
      </div>

    </div>
  )
}

export default TeacherDetail