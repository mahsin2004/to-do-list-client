import { RiBankLine } from "react-icons/ri";

const Card2 = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center">
          <div className="w-1/3">
            <RiBankLine className="w-full h-48 object-cover"></RiBankLine>
          </div>
          <div className="pl-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Bankers</h1>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
                Effortlessly manage financial tasks, deadlines, and projects
                critical to the banking industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2;
