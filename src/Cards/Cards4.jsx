import { PiStudent } from "react-icons/pi";

const Cards4 = () => {
  return (
    <div className="max-w-lg mx-auto p-6">
      <div className="bg-white shadow-md rounded p-6">
        <div className="flex items-center">
          <div className="w-1/3">
            <PiStudent className="w-full h-48 object-cover"></PiStudent>
          </div>
          <div className="pl-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-800">Students</h1>
            </div>
            <div className="mt-2">
              <p className="text-gray-600">
                Stay on top of assignments, projects, and deadlines with our
                intuitive task management platform designed for students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards4;
