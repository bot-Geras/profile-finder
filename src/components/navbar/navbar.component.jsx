import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Fragment>
      <nav className="w-full py-6 px-20 bg-red-200 flex justify-around items-center">
        <Link to="/">
          <h2 className="text-purple-800 text-xl font-bold cursor-pointer">
            Profile Finder
          </h2>
        </Link>
        <div className="flex justify-around">
          <Link to="/" className="mr-6 text-lg text font-medium cursor-pointer">
            HOME
          </Link>
          <Link to="/about" className="text-lg font-medium cursor-pointer">
            ABOUT
          </Link>
        </div>
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Navbar;
