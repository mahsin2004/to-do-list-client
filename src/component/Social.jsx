import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";

const Social = () => {
  const { googleUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleSocialLink = (media) => {
    media()
      .then(() => {
        toast.success("Logged in successfully");
        navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="flex items-center justify-center gap-5">
      <button onClick={() => {handleSocialLink(googleUser)}} className="p-2 bg-gray-200 rounded-full">
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default Social;
