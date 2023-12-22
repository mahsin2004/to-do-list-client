import { Link } from "react-router-dom";

const HeroArea = () => {
  return (
    <div className="max-w-[1200px] mx-auto min-h-screen flex justify-center items-center">
      <div className="space-y-3 -mt-16">
        <h1 className="text-4xl font-bold text-center">
          Effortless Task Management
        </h1>
        <p className=" w-80 mx-auto text-center">
          Streamline Your Workflow with Ease
        </p>
        <div className="flex justify-center">
          <Link
            to="/login"
            className="bg-[#B68C5A] px-4 py-2 text-white rounded-lg"
          >
            Let us Explore
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroArea;
