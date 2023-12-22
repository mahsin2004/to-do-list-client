import { NavLink } from "react-router-dom";

import { useContext } from "react";
import { AuthContext } from "../../authProvider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then((res) => console.log(res))
      .catch((error) => console.error(error));
  };

  const Links = (
    <>
      <NavLink
        to="/dashboard/userHome"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#B68C5A] border-b-[2px] rounded-full"
            : ""
        }
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold">
          UserHome
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/addTask"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#B68C5A] border-b-[2px] rounded-full"
            : ""
        }
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold ">
          AddTask
        </li>
      </NavLink>
      <NavLink
        to="/dashboard/profile"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#B68C5A] border-b-[2px] rounded-full"
            : ""
        }
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold ">
          Profile
        </li>
      </NavLink>

      <div className="divider"></div>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending
            ? "pending"
            : isActive
            ? "text-[#B68C5A] border-b-[2px] rounded-full"
            : ""
        }
      >
        <li className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold list-none">
          Home
        </li>
      </NavLink>
    </>
  );

  return (
    <div className="sticky top-0 z-10 navbar bg-base-100 border-b">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-[#495057]"
          >
            {Links}
          </ul>
        </div>
        <h1 className="text-3xl font-bold text-[#B68C5A] hidden lg:block">
          Task Management
        </h1>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center lg:gap-3">
              <button
                onClick={handleLogOut}
                className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]"
              >
                Log out
              </button>
              <div className="">
                <div className="text-right hidden md:block lg:block">
                  <p className="text-[14px]">{user?.displayName}</p>
                  <p className="text-[12px]">{user?.email}</p>
                </div>
              </div>
              <img
                className="w-10 rounded-full -ml-1"
                src={user?.photoURL}
              ></img>
            </div>
          </>
        ) : (
          <>
            <NavLink
              className="py-2 px-4 hover:text-[#B68C5A] hover:rounded-full font-bold text-[#495057]"
              to="login"
            >
              Log In
            </NavLink>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
