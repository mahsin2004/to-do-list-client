import { RiJavascriptFill } from "react-icons/ri";

const Card1 = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center">
          <div className="w-1/3">
            <RiJavascriptFill className="w-full h-48 object-cover" ></RiJavascriptFill>
          </div>
          <div className="pl-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
                Developer
              </h1>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
              Streamline project tasks, manage coding sprints, and collaborate seamlessly with your development team.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card1;
