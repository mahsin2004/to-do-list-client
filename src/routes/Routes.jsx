import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../pages/Home";
import App from "../App";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Dashboard from "../pages/dashboard/Dashboard";
import UserHome from "../pages/dashboard/page/UserHome";
import AddTask from "../pages/dashboard/page/AddTask";
import Notification from "../pages/dashboard/page/Notification";
import PrivetRoute from "./PrivetRoute";
import Profile from "../pages/dashboard/page/Profile";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        },
        {
          path: "/features",
          element: <Features></Features>
        }
    ],
  },
  {
    path: "login",
    element: <Login></Login>,
  },
  {
    path: 'register',
    element: <Register></Register>
  },
  {
    path: 'dashboard',
    element: <PrivetRoute><Dashboard></Dashboard></PrivetRoute>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "userHome",
        element: <PrivetRoute><UserHome></UserHome></PrivetRoute>
      },
      {
        path: "addTask",
        element: <PrivetRoute><AddTask></AddTask></PrivetRoute>
      },
      {
        path: "notification",
        element: <PrivetRoute><Notification></Notification></PrivetRoute>
      },
      {
        path: "profile",
        element: <PrivetRoute><Profile></Profile></PrivetRoute>
      }
    ]
  }
]);

export default Routers