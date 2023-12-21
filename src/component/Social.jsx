import { FcGoogle } from "react-icons/fc";
import useAuth from "../hook/useAuth";
import toast from "react-hot-toast";

const Social = () => {
  const { logInWithGoogle } = useAuth();
  const handleSocialLink = (media) => {
    media()
      .then(() => {
        toast.success("Logged in successfully");
        // navigate(location?.state ? location.state : "/");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };
  return (
    <div className="flex items-center justify-center gap-5">
      <button onClick={() => {handleSocialLink(logInWithGoogle)}} className="p-2 bg-gray-200 rounded-full">
        <FcGoogle></FcGoogle>
      </button>
    </div>
  );
};

export default Social;
