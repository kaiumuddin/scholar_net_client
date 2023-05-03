import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
// import img from "../../../Assets/Images";
import { RiMessengerLine } from "react-icons/ri";
import { AuthProvider } from "../../../UserContext/UserContext";
import { toast } from "react-toastify";
import DarkModeToggle from "./DarkMode/DarkModeToggle";

const Header = () => {
	const { logOutUser, setUser, user } = useContext(AuthProvider);
	const logOut = () => {
		logOutUser();
		setUser({});
		toast.info("You are account is logged out !!");
	}
	return (
		<Navbar className="uppercase container max-w-screen-2xl mx-auto">
			<div className="flex lg:hidden ">
				<Dropdown arrowIcon={false} inline={true}></Dropdown>
				<Navbar.Toggle />
			</div>

			<Navbar.Brand href="/">
				{/* <img src={img} className="mr-3 h-6 sm:h-9" alt="ScholarNet Logo" /> */}
				<div className="self-center flex justify-around whitespace-nowrap text-xl font-semibold">
					<p> Scholar Net</p>
					<img
						src="https://cdn.dribbble.com/users/2229852/screenshots/10163018/media/b259931291e7624e6902e29fef3bde4e.png?compress=1&resize=400x300"
						alt="logo"
						className="h-14 w-14 -mt-2.5"
					/>
				</div>
			</Navbar.Brand>


			<div className="flex justify-center items-center md:order-2">
				<Link to={"/chat"} className="mx-3">
					<RiMessengerLine className="h-8 w-8 text-blue-400 me-16"></RiMessengerLine>
				</Link>
				{user.uid && <Dropdown
					arrowIcon={false}
					inline={true}
					label={
						<Avatar
							alt="User settings"
							img={user?.photoURL ? user?.photoURL : "https://i.ibb.co/RSCmwXf/imagenot.jpg"}
							rounded={true}
						/>
					}
				>
					<Dropdown.Header>
						<div className="w-52">
							<b style={{ fontSize: "12px" }}>{user?.displayName}</b>
							<br />
							<b style={{ fontSize: "12px" }}>
								{user?.email}
							</b>
						</div>
					</Dropdown.Header>
					<Dropdown.Item>
						<Link to={"/profile"}><i className="fa-solid fa-user mx-2 text-lg"></i>Profile</Link>
					</Dropdown.Item>
					<Dropdown.Item>
						<Link to={"/privacySettings"}><i className="fa-solid fa-gear mx-2 text-lg"></i> Settings </Link>
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item onClick={() => logOut()}><i className="fa-solid fa-right-from-bracket text-lg mx-2"></i> Sign out</Dropdown.Item>
				</Dropdown>
				}
				<Navbar.Toggle />
			</div>

			<Navbar.Collapse>
				<Navbar.Link as={Link} to="/">
					Home
				</Navbar.Link>
				{/* <Navbar.Link as={Link} to="/videos">
					Videos
				</Navbar.Link> */}
				<Navbar.Link as={Link} to="/courses">
					Courses
				</Navbar.Link>
				<Navbar.Link as={Link} to="/books">
					Books
				</Navbar.Link>
				<Navbar.Link>
				<DarkModeToggle className="float-left"></DarkModeToggle>
				</Navbar.Link>
				<>
					{
						!user.uid && <>
							<Navbar.Link as={Link} to="/register">
								Register
							</Navbar.Link>
							<Navbar.Link as={Link} to="/login">
								Login
							</Navbar.Link>
						</>
					}
				</>
				{/* <Navbar.Link as={Link} to="/blogs">
					Blogs
				</Navbar.Link> */}
				{/* <Navbar.Link as={Link} to="/groups">
					Groups
				</Navbar.Link> */}
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
