import useAxiosPublic from "../../../hook/useAxiosPublic";
import ToDo from "./shear/toDo";

import { useQuery } from "@tanstack/react-query";

const UserHome = () => {
  const axiosPublic = useAxiosPublic();
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosPublic.get("/tasks");
      return res.data;
    },
  });

  return (
    <div className="text-gray-700">
      <div>
        <p className="text-3xl font-bold mb-5">Your Task Over View</p>
      </div>
      {/* Part 1 */}
      <div className="grid lg:grid-cols-3 lg:gap-3">
        <div className="bg-gray-300 p-3 rounded-2xl">
          <h1 className="text-2xl font-medium py-4 text-white bg-[#B68C5A] rounded-2xl text-center mb-4">
            Lists of to-do
          </h1>
          <div className="flex flex-col  gap-2">
            {tasks.map((task) => (
              <ToDo key={task._id} task={task} refetch={refetch}></ToDo>
            ))}
          </div>
        </div>

        {/* part 2 */}
        <div className="bg-gray-300 p-3 rounded-2xl">
          <h1 className="text-2xl font-medium py-4 text-white bg-[#B68C5A] rounded-2xl text-center mb-4">
            Ongoing
          </h1>
          <div className="flex flex-col gap-2"></div>
        </div>

        {/* part 3 */}
        <div className="bg-gray-300 p-3 rounded-2xl">
          <h1 className="text-2xl font-medium py-4 text-white bg-[#B68C5A] rounded-2xl text-center mb-4">
            completed
          </h1>
          <div className="flex flex-col  gap-2"></div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
