import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

function CourseDetail() {
  let {course_id} = useParams();
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-lg-4 col-md-4 col-sm-12">
          <img className="img-thumbnail" src="/1.jpg" alt="..." />
        </div>
        <div className="col-lg-8 col-md-8 col-sm-12">
          <h3>Course Title</h3>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam voluptates laborum beatae consequuntur at exercitationem quis maxime voluptate alias, omnis, nesciunt, reprehenderit provident id tempora animi suscipit in repellat veniam!</p>
          <p><b>Course By:</b> <Link to="/teacher-detail/1">Destiny Franks</Link></p>
          <p><b>Duration:</b> 1hr 30min</p>
          <p><b>Rating:</b> 44</p>
        </div>
      </div>
      <div className="card mt-4">
        <div className="card-header">
          <h4>Course Contents</h4>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Introduction 
			<span className="float-end">
				<span className="me-4">1 Hour 30 Minutes</span>
				<button data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn"><i className="fas fa-play text-danger"></i></button>
			</span>
            <div className="modal fade modal-dxl" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div className="modal-dialog modal-xl">
					<div className="modal-content">
					<div className="modal-header">
						<h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
						<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
					</div>
					<div className="modal-body">
					<div class="ratio ratio-16x9">
						<iframe src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" title="YouTube video" allowfullscreen></iframe>
						</div>
					</div>
					
					</div>
				</div>
			</div>
		  </li>

        </ul>
      </div>
      {/* Popular Courses */}
			<h3 className="pb-1 mb-4 mt-4">Related Courses</h3>
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<a href="">
							<img src="/1.jpg" className="card-img-top img-thumbnail" alt="..." />
						</a>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Course title</a>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<a href="">
							<img src="/1.jpg" className="card-img-top img-thumbnail" alt="..." />
						</a>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Course title</a>
							</h5>
						</div>
					</div>
				</div>
				<div className="col-md-4">
					<div className="card">
						<a href="">
							<img src="/1.jpg" className="card-img-top img-thumbnail" alt="..." />
						</a>
						<div className="card-body">
							<h5 className="card-title">
								<Link to="">Course title</Link>
							</h5>
						</div>
					</div>
				</div>
			</div>
			{/* End of Popular Courses */}
    </div>
    
  )
}

export default CourseDetail