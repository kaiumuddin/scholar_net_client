import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Error from "../Components/Error/Error";
import Home from "../Components/Home/Home/Home";
import Videos from "../Components/Videos/Videos/Videos";
import Courses from "../Components/Courses/Courses/Courses";
import Books from "../Components/Books/Books/Books";
import Blogs from "../Components/Blogs/Blogs/Blogs";
import Groups from "../Components/Groups/Groups/Groups";
import PrivacySettings from "../Components/Profile/PrivacySettings/PrivacySettings";
import Profile from "../Components/Profile/Profile/Profile";

// import ChatHomePage from "../Components/Chat/ChatHomePage";
import Register from "../Components/Pages/Register/Register";
import Login from "../Components/Pages/Login/Login";
import ResetPassword from "../Components/Pages/ResetPassword/ResetPassword";
import EditPost from "../Components/Home/LeftContent/Modals/EditPost/EditPost";
import MainPage from "../Components/Pages/ChatHome/MainPage";

const router = createBrowserRouter([
	{
		path: "/",
		errorElement: (
			<h2 className="text-3xl font-bolder my-52 text-center text-red-600">
				{" "}
				You have an error{" "}
			</h2>
		),
		children: [
			{
				path: "/",
				element: <Main></Main>,
				children: [
					{
						path: "/",
						element: <Home></Home>,
					},
					{
						path: "/videos",
						element: <Videos></Videos>,
					},
					{
						path: "/courses",
						element: <Courses></Courses>,
					},
					{
						path: "/books",
						element: <Books></Books>,
					},
					{
						path: "/blogs",
						element: <Blogs></Blogs>,
					},
					{
						path: "/groups",
						element: <Groups></Groups>,
					},
					{
						path: "/profile",
						element: <Profile></Profile>,
					},
					{
						path: "/privacySettings",
						element: <PrivacySettings></PrivacySettings>,
					},
					{
						path: "/register",
						element: <Register></Register>
					},
					{
						path: "/login",
						element: <Login></Login>
					},
					{
						path: "/chat",
						element: <MainPage></MainPage>,
					},
					{
						path: "/reset-password", element: <ResetPassword></ResetPassword>
					},
					{
						path: "/edit-post/:id",
						loader: async ({  params }) => 
							 fetch(`https://scholar-net-subrota.vercel.app/edit-posts/${params.id}`)
								.then((res) => res.json())
								.then(data => data)
						
						,
						element: <EditPost></EditPost>
					},
					{
						path: "*",
						element: <Error></Error>,
					},
				],
			},
		],
	},
]);

export default router;
