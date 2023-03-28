import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className="container mt-4">
			{/* latest Courses */}
			<h3 className="pb-1 mb-2 mt-4">
				Latest Courses{' '}
				<Link to="/all-courses" className="float-end">See All</Link>{' '}
			</h3>
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<Link to="/detail/1">
							<img src="1.jpg" className="card-img-top" alt="..." />
						</Link>
						<div className="card-body">
							<h4 className="card-title">
								<Link to="/detail/1">Course title</Link>
							</h4>
						</div>
						<div className="card-footer">
                                <span>Rating: 4.5/5.0</span>
                                <span className='float-end'>Views: 700</span>
                            </div>
					</div>
				</div>
			</div>
			{/* End of Latest Courses */}

			{/* Popular Courses */}
			<h3 className="pb-1 mb-2 mt-4">
				Popular Courses
				<Link to="/popular-courses" className="float-end">See All</Link>{' '}
			</h3>
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<a href="">
							<img src="1.jpg" className="card-img-top" alt="..." />
						</a>
						<div className="card-body">
							<h4 className="card-title">
								<a href="">Course title</a>
							</h4>
						</div>
						<div className="card-footer">
                                <span>Rating: 4.5/5.0</span>
                                <span className='float-end'>Views: 700</span>
                            </div>
					</div>
				</div>
			</div>
			{/* End of Popular Courses */}

			{/* student Testimonial */}
			<h3 className="pb-1 mb-1 mt-4">Student Testimonials</h3>

			<div
				id="carouselExampleIndicators"
				className="carousel slide bg-dark text-light py-5"
				data-bs-ride="carousel"
			>
				<div className="carousel-indicators">
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="0"
						className="active"
						aria-current="true"
						aria-label="Slide 1"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="1"
						aria-label="Slide 2"
					/>
					<button
						type="button"
						data-bs-target="#carouselExampleIndicators"
						data-bs-slide-to="2"
						aria-label="Slide 3"
					/>
				</div>
				<div className="carousel-inner">
					<div className="carousel-item active">
						<figure class="text-center">
							<blockquote class="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption class="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
					<div className="carousel-item">
						<figure class="text-center">
							<blockquote class="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption class="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
					<div className="carousel-item">
						<figure class="text-center">
							<blockquote class="blockquote">
								<p>A well-known quote, contained in a blockquote element.</p>
							</blockquote>
							<figcaption class="blockquote-footer">
								Someone famous in <cite title="Source Title">Source Title</cite>
							</figcaption>
						</figure>
					</div>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="prev"
				>
					<span className="carousel-control-prev-icon" aria-hidden="true" />
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#carouselExampleIndicators"
					data-bs-slide="next"
				>
					<span className="carousel-control-next-icon" aria-hidden="true" />
					<span className="visually-hidden">Next</span>
				</button>
			</div>
			{/* end student Testimonial */}

			{/* Popular Courses */}
			<h3 className="pb-1 mb-4 mt-4">Popular Teachers <Link to="/popular-teachers" className="float-end">See All</Link>{' '}</h3>
			<div className="row">
				<div className="col-md-4">
					<div className="card">
						<a href="">
							<img src="1.jpg" className="card-img-top" alt="..." />
						</a>
						<div className="card-body">
							<h5 className="card-title">
								<a href="">Course title</a>
							</h5>
						</div>
						<div className="card-footer">
                                <span>Rating: 4.5/5.0</span>
                            </div>
					</div>
				</div>
				
			</div>
			{/* End of Popular Courses */}
		</div>
	);
}

export default Home;
