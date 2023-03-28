import { Routes as Switch, Route } from 'react-router-dom';

// Partials
import Header from './Header';
import Footer from '../Footer';
import About from './About';

// course pages
import Home from './Home';
import CourseDetail from './CourseDetail';
import AllCourses from './AllCourses';
import TeacherDetail from './TeacherDetail';
import PopularTeachers from './PopularTeachers';
import PopularCourses from './PopularCourses';


// Student
import Login from '../components/user/Login'
import Register from '../components/user/Register'
import Dashboard from '../components/user/Dashboard'
import FavouriteCourses from './user/FavouriteCourses';
import MyCourses from './user/MyCourses';
import RecommendedCourses from './user/RecommendedCourses';
import ProfileSetting from './user/ProfileSetting';
import ChangePassword from './user/ChangePassword';


// Teacher
import TeacherLogin from './teacher/TeacherLogin';
import TeacherRegister from './teacher/TeacherRegister';
import TeacherDashboard from './teacher/TeacherDashboard';
import AddCourse from './teacher/AddCourse';
import TeacherCourses from './teacher/TeacherCourses';
import TeacherUsers from './teacher/TeacherUsers';
import TeacherProfileSetting from './teacher/TeacherProfileSetting';
import TeacherChangePassword from './teacher/TeacherChangePassword';
import CategoryCourses from './CategoryCourses';


function Main() {
	return (
		<div className="App">
			<Header />
			<Switch>
				<Route path='/' element={<Home />} />
				<Route path='/about' element={<About />} />
				<Route path='/detail/:course_id' element={<CourseDetail />} />
				<Route path='/all-courses/' element={<AllCourses />} />
				<Route path='/popular-courses/' element={<PopularCourses />} />
				<Route path='/popular-teachers/' element={<PopularTeachers />} />
				<Route path='/category-courses/:category_slug' element={<CategoryCourses />} />
				{/* User Authentication */}
				<Route path='/user-login' element={<Login />} />
				<Route path='/user-register' element={<Register />} />
				<Route path='/user-dashboard' element={<Dashboard />} />
				<Route path='/my-courses' element={<MyCourses />} />
				<Route path='/favourite-courses' element={<FavouriteCourses />} />
				<Route path='/recommended-courses' element={<RecommendedCourses />} />
				<Route path='/profile-setting' element={<ProfileSetting />} />
				<Route path='/change-password' element={<ChangePassword />} />

				{/* Teacher Authentication */}
				<Route path='/teacher-login' element={<TeacherLogin />} />
				<Route path='/teacher-register' element={<TeacherRegister />} />
				<Route path='/teacher-dashboard' element={<TeacherDashboard />} />
				<Route path='/teacher-courses' element={<TeacherCourses />} />
				<Route path='/add-course' element={<AddCourse />} />
				<Route path='/teacher-users' element={<TeacherUsers />} />
				<Route path='/recommended-courses' element={<RecommendedCourses />} />
				<Route path='/teacher-profile-setting' element={<TeacherProfileSetting />} />
				<Route path='/teacher-change-password' element={<TeacherChangePassword />} />
				<Route path='/teacher-detail/:teacher_id' element={<TeacherDetail />} />
				{/* Teacher Routes */}
			</Switch>
			<Footer />
		</div>
	);
}

export default Main;
