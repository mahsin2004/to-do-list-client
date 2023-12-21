import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Register from "../component/Register";
import Home from "../pages/Home";
import App from "../App";
import Error from "../pages/Error";

const Routers = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children:[
        {
          path: "/",
          element: <Home></Home>
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