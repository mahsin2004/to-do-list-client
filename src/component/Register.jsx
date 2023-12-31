import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import Social from "./Social";
import { useContext, useEffect } from "react";
import { AuthContext } from "../authProvider/AuthProvider";

const Register = () => {
  useEffect(() => {
    document.title = 'Register | Task Management'
  },[])
  const {createUser, profileUpdate}= useContext(AuthContext);
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;


    if (password.length < 6) {
      toast.error("Password should be 6 characters or more");
      return;
    }

    if (!/[A-Z]/.test(password)) {
      toast.error("Password should have at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*()_+{}[\]:;<>,/.?~\\]/.test(password)) {
      toast.error("Password should have at least one special character");
      return;
    }

    createUser(email, password)
      .then(() => {
        profileUpdate(name, photo).then(() => {
          window.location.reload();
        });
        toast.success("user create successfully");
        navigate("/");
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
      <div className="flex items-center justify-center bg-white">
        <div className="card w-full max-w-sm lg:max-w-md bg-white border shadow py-5">
          <h1 className="text-3xl font-semibold text-center">Register</h1>
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered border-gray-300 focus:border-none bg-white"
                required
              />
            </div>
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Photo Link</span>
              </label>
              <input
                type="text"
                placeholder="Enter Photo Link"
                name="photo"
                className="input input-bordered border-gray-300 focus:border-none bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input border-gray-300 focus:border-none input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input border-gray-300 focus:border-none input-bordered bg-white"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#B68C5A]  text-white hover:bg-white hover:border border-[#B68C5A] hover:border-[#B68C5A] hover:text-black">
                Register
              </button>
            </div>
            <div className="space-y-4 mt-3">
              <h1 className="text-center text-sm">Or Register in With</h1>
              <Social></Social>
              <h1 className="text-center">
                Already Have an account?
                <Link to="/login" className="text-[#B68C5A]">
                  Log In
                </Link>
              </h1>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
