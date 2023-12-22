import { useContext, useEffect } from "react";
import { AuthContext } from "../../../authProvider/AuthProvider";

const Profile = () => {
  useEffect(() => {
    document.title = 'Profile | Task Management'
  },[])
  const { user } = useContext(AuthContext);

  return (
    <div>
      <div>
        <div className="flex flex-col justify-center items-center">
          <img
            className=" w-24 rounded-full border p-1"
            src={user?.photoURL}
            alt=""
          />
          <p className="text-2xl">Your Image</p>
        </div>
        <form className=" bg-white mx-auto">
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-[#495057]">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input bg-white input-bordered border-gray-300 focus:border-none"
              required
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-[#495057] ">Your Email</span>
            </label>
            <input
              type="text"
              name="description"
              defaultValue={user?.email}
              className="input bg-white border-gray-300 focus:border-none input-bordered"
              required
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Profile;
