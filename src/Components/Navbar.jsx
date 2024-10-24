import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const location = useLocation();

  // Hide dropdown on route change
  useEffect(() => {
    setAboutDropdown(false);
  }, [location]);

  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-lg">
        <NavLink exact to="/" activeClassName="text-red-500">
          Home
        </NavLink>
      </li>

      {/* About with Dropdown on hover */}
      <li
        className="mr-2 font-semibold text-lg relative"
        onMouseEnter={() => setAboutDropdown(true)}
        onMouseLeave={() => setAboutDropdown(false)}
      >
        <div className="cursor-pointer">About</div>
        {aboutDropdown && (
          <ul className="absolute bg-teal-950 text-white 
           mt-10  w-56  rounded-lg  z-10  ">
            <li className="p-2">
              <NavLink to="/companyProfile" activeClassName="text-red-500">
                Company History
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/management" activeClassName="text-red-500">
                Management Team
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/architech" activeClassName="text-red-500">
                Architech Team
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/structure" activeClassName="text-red-500">
                Structure Team
              </NavLink>
            </li>
            <li className="p-2">
              <NavLink to="/structure" activeClassName="text-red-500">
               Construction team
              </NavLink>
            </li>
          </ul>
        )}
      </li>

      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/ourService" activeClassName="text-red-500">
          Services
        </NavLink>
      </li>

      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/" activeClassName="text-red-500">
          Projects
        </NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/contactUs" activeClassName="text-red-500">
          Contact Us
        </NavLink>
      </li>
     
    </>
  );

  return (
    <div className="navbar bg-teal-700 py-4 text-white sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <a className="btn btn-ghost text-lg">
          <span className="text-red-800 text-6xl font-bold">Acon</span>
           Design Development <br /> & Construction
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
