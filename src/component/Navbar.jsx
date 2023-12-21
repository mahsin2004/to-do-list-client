import { NavLink } from "react-router-dom";
import useAuth from "../hook/useAuth";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };
  const Links = (
    <>
      <li>
        <NavLink to="/">
          <a href="">Home</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/about">
          <a href="">About</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact">
          <a href="">Contact</a>
        </NavLink>
      </li>
      <li>
        <NavLink to="dashboard">
          <a href="">Dashboard</a>
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {Links}
          </ul>
        </div>
        <h1>To Do App</h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{Links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center lg:gap-3">
              <button
                onClick={handleLogOut}
                className="py-2 px-3 lg:pl-4 text-base hover:text-red-400"
              >
                Log out
              </button>
              <div className="">
                <div className="text-right hidden md:block lg:block">
                  <p className="text-[14px]">{user?.displayName}</p>
                  <p className="text-[12px]">{user?.email}</p>
                </div>
              </div>
              <img className="w-8 rounded-full -ml-1" src={user?.photoURL}></img>
            </div>
          </>
        ) : (
          <>
            <NavLink to="login">Log In</NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
