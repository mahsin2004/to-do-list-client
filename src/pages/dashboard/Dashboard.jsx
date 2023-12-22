import { NavLink, Outlet } from "react-router-dom";
import Nav from "./Nav";

const Dashboard = () => {
  return (
    <div>
      <Nav></Nav>
      <div className="lg:grid lg:grid-cols-12">
        <div className=" hidden lg:block lg:col-span-2 bg-[#B68C5A] min-h-screen pt-3">
          <NavLink
            to="/dashboard/userHome"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-white hover:rounded-full font-bold list-none">
              User Home
            </li>
          </NavLink>
          <NavLink
            to="/dashboard/addTask"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-white hover:rounded-full font-bold list-none">
              Add Task
            </li>
          </NavLink>
          <NavLink
            to="/dashboard/notification"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-white hover:rounded-full font-bold list-none">
              Notification
            </li>
          </NavLink>
          <NavLink
            to="/dashboard/profile"
            className={({ isActive, isPending }) =>
              isPending
                ? "pending"
                : isActive
                ? "text-white border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-white hover:rounded-full font-bold list-none">
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
                ? "text-white border-b-[2px] rounded-full"
                : ""
            }
          >
            <li className="py-2 px-4 hover:text-white hover:rounded-full font-bold list-none">
              Home
            </li>
          </NavLink>
        </div>
        <div className=" col-span-10 p-5">
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
