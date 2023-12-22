import { useContext, useEffect, useState } from "react";
import useAxiosPublic from "../../../hook/useAxiosPublic";
import ToDo from "./shear/toDo";

import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../authProvider/AuthProvider";
import ToDo1 from "./shear/ToDo1";
import ToDo2 from "./shear/ToDo2";

const UserHome = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const [onGoingTasks, setOnGoingTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const { data: tasks = [], refetch } = useQuery({
    queryKey: ["allTasks"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/tasks/${user?.email}`);
      return res.data;
    },
  });

  useEffect(() => {
    axiosPublic.get(`/onGoings`).then((res) => {
      setOnGoingTasks(res.data);
      console.log(res);
    });
  }, [axiosPublic]);

  useEffect(() => {
    axiosPublic.get(`/completes`).then((res) => {
      setCompletedTasks(res.data);
      console.log(res);
    });
  }, [axiosPublic]);

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
          <div className="flex flex-col gap-2">
            {onGoingTasks.map((task) => (
              <ToDo1 key={task._id} task={task}></ToDo1>
            ))}
          </div>
        </div>

        {/* part 3 */}
        <div className="bg-gray-300 p-3 rounded-2xl">
          <h1 className="text-2xl font-medium py-4 text-white bg-[#B68C5A] rounded-2xl text-center mb-4">
            completed
          </h1>
          <div className="flex flex-col  gap-2">
            {completedTasks.map((task) => (
              <ToDo2 key={task._id} task={task}></ToDo2>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
