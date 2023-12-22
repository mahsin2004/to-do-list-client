import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../pages/Home";
import App from "../App";
import Error from "../pages/Error";
import Contact from "../pages/Contact";
import Features from "../pages/Features";
import Dashboard from "../pages/dashboard/Dashboard";

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
    element: <Dashboard></Dashboard>
  }
]);

export default Routers