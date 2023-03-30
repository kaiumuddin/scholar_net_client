import { Dropdown, Navbar } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
// import img from "../../../Assets/Images";
import "./Header.css";

const Header = () => {
  return (
    <Navbar className="uppercase container max-w-screen-2xl mx-auto">
      <div className="flex lg:hidden">
        <Dropdown arrowIcon={false} inline={true}></Dropdown>
        <Navbar.Toggle />
      </div>

      <Navbar.Brand href="/">
        {/* <img src={img} className="mr-3 h-6 sm:h-9" alt="ScholarNet Logo" /> */}
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          ScholarNet
        </span>
      </Navbar.Brand>

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

      <Navbar.Collapse>
        <Navbar.Link as={Link} to="/profile">
          Profile
        </Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
