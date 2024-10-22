import { NavLink } from "react-router-dom";

const Navbar = () => {
  
  const navLinks = (
    <>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/" activeClassName="text-red-500">Home</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/allfoods" activeClassName="text-red-500">Our Service</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/register" activeClassName="text-red-500">Members</NavLink>
      </li>
      <li className="mr-2 font-semibold text-lg">
        <NavLink to="/gallery" activeClassName="text-red-500">Contact Us</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-orange-400">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
       {navLinks}
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">Acon Construction
     
      </a>
      
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
      {navLinks}
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
  );
};

export default Navbar;
