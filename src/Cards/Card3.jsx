import { MdCorporateFare } from "react-icons/md";

const Card3 = () => {
    return (
        <div className="max-w-lg mx-auto p-6">
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center">
          <div className="w-1/3">
            <MdCorporateFare className="w-full h-48 object-cover"></MdCorporateFare>
            
          </div>
          <div className=" pl-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">
              Corporate Professionals
              </h1>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
              Enhance project management, track deadlines, and foster collaboration among team members in a corporate environment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Card3;