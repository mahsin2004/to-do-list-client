import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const HeroArea = () => {
  const {user} = useContext(AuthContext);
  return (
    <div className="hero min-h-screen" style={{backgroundImage: 'url(https://i.postimg.cc/W3XL3D2t/bg25.jpg)'}}>
      <div className="max-w-[1200px] mx-auto flex justify-center items-center">
        <div className="space-y-3 -mt-16" >
          <h1 className="text-4xl font-bold text-center">
            Effortless Task Management
          </h1>
          <p className=" w-80 mx-auto text-center">
            Streamline Your Workflow with Ease
          </p>
          <div className="flex justify-center">
            {user ? <Link
              to="/dashboard/userHome"
              className="bg-[#B68C5A] font-bold px-4 py-2 text-white rounded-lg"
            >
              Go To Dashboard
            </Link> : <Link
              to="/login"
              className="bg-[#B68C5A] px-4 py-2 text-white font-bold rounded-lg"
            >
              Let us Explore
            </Link>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
