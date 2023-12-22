
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Social from "./Social";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
const Login = () => {
  const {userLogin} = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    userLogin(email, password)
    .then((res) => {
      const user = res.user;
      console.log(user.email);
      toast.success("login successfully");
      navigate(location?.state ? location.state : "/");
    })
    .catch((error) => {
      toast.error(error.code);
    });
  };
  return (
    <>
      <div className="py-5">
        <h1 className=" text-2xl text-center lg:text-left max-w-[1200px] mx-auto">
          <Link className="text-[#B68C5A] font-bold text-xl" to="/">
            Back Home
          </Link>
        </h1>
      </div>
      <div className="flex items-center bg-white justify-center h-screen">
        <div className="card w-full max-w-sm lg:max-w-md border shadow py-5">
          <h1 className="text-3xl font-semibold text-center">Log In</h1>
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input border-gray-300 input-bordered focus:border-none bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input border-gray-300 input-bordered focus:border-none bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B68C5A] text-white focus:border-none hover:bg-white border border-[#B68C5A] hover:border-[#B68C5A] hover:text-black">
                Log In
              </button>
            </div>
            <div className="space-y-4 mt-3">
              <h1 className="text-center text-sm">Or Log In With</h1>
              <Social></Social>
              <h1 className="text-center">
                Do not Have account?
                <Link to="/register" className="text-[#B68C5A]">
                  Register
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
