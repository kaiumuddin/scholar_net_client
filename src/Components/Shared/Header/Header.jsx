import { Avatar, Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
// import img from "../../../Assets/Images";

const Header = () => {
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

			<div className="flex md:order-2">
				<Dropdown
					arrowIcon={false}
					inline={true}
					label={
						<Avatar
							alt="User settings"
							img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
							rounded={true}
						/>
					}
				>
					<Dropdown.Header>
						<span className="block text-sm">Bonnie Green</span>
						<span className="block truncate text-sm font-medium">
							name@flowbite.com
						</span>
					</Dropdown.Header>
					<Dropdown.Item>
						<Navbar.Link as={Link} to="/profile">
							Profile
						</Navbar.Link>
					</Dropdown.Item>
					<Dropdown.Item>Settings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item>Sign out</Dropdown.Item>
				</Dropdown>
				<Navbar.Toggle />
			</div>

			<Navbar.Collapse>
				<Navbar.Link as={Link} to="/">
					Home
				</Navbar.Link>
				<Navbar.Link as={Link} to="/videos">
					Videos
				</Navbar.Link>
				<Navbar.Link as={Link} to="/courses">
					Courses
				</Navbar.Link>
				<Navbar.Link as={Link} to="/books">
					Books
				</Navbar.Link>
				<Navbar.Link as={Link} to="/blogs">
					Blogs
				</Navbar.Link>
				<Navbar.Link as={Link} to="/groups">
					Groups
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default Header;
