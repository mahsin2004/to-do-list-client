import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../pages/Home";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
        {

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
  }
]);

export default Routers