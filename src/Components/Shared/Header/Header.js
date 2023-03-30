import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav>
        <Button component={Link} to="/">
          Home
        </Button>
        <Button component={Link} to="/videos">
          Videos
        </Button>
        <Button component={Link} to='/courses'>
          Courses
        </Button>
        <Button component={Link} to="/Books">
          Books
        </Button>
        <Button component={Link} to="/blogs">
          Blogs
        </Button>
        <Button component={Link} to="/groups">
          Groups
        </Button>
      </nav>
    </div>
  );
};

export default Header;
