import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";

import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hook/useAxiosPublic";

const ToDo = ({ task, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const onGoing = (id) => {
    const noGo = {
      title: task?.title,
      priority: task?.email,
      description: task?.description,
      deadline: task?.deadline,
      email: task?.priority,
    };

    axiosPublic.post("/onGoings", noGo).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Successfully",
          text: "New Task Added",
          icon: "success",
          confirmButtonText: "oky",
        });
        refetch();
      }
    });

    axiosPublic.delete(`/tasks/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Task Deleted",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    });
  };
  const complete = (id) => {
    const com = {
      title: task?.title,
      priority: task?.email,
      description: task?.description,
      deadline: task?.deadline,
      email: task?.priority,
    };

    axiosPublic.post("/completes", com).then((res) => {
      console.log(res.data);
      if (res.data.acknowledged) {
        Swal.fire({
          title: "Successfully",
          text: "New Task Added",
          icon: "success",
          confirmButtonText: "oky",
        });
        refetch();
      }
    });

    axiosPublic.delete(`/tasks/${id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        Swal.fire({
          title: "Successfully",
          text: "Task Deleted",
          icon: "success",
          confirmButtonText: "Okay",
        });
        refetch();
      }
    });
  };

  const deleteItem = (id) => {
    console.log(id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/tasks/${id}`).then((res) => {
          console.log(res.data);
          if (res.data.deletedCount > 0) {
            Swal.fire({
              title: "Successfully",
              text: "Task Deleted",
              icon: "success",
              confirmButtonText: "Okay",
            });
            refetch();
          }
        });
      }
    });
  };

  return (
    <div className="border border-base-300 rounded-2xl p-3 bg-base-200">
      <div className="text-xl font-bold">
        <span className="font-medium">Title:</span> {task?.title}
      </div>
      <div>
        <p>
          <span className="font-medium">Description:</span> {task?.description}
        </p>
        <p>
          <span className="font-medium">Deadline:</span> {task?.deadline}
        </p>
        <p>
          <span className="font-medium">Priority:</span> {task?.priority}
        </p>
        <div className="flex gap-1">
          <div className="flex gap-1 justify-end">
            
            <button
              onClick={() => deleteItem(task._id)}
              className="bg-[#EA4744] p-[10px] rounded"
            >
              <MdDelete className="text-white" />
            </button>
          </div>
          <div className="flex gap-1 ">
            <button
              onClick={() => complete(task._id)}
              className=" bg-green-500 p-[10px] rounded"
            >
              <p className="text-white">Complete</p>
            </button>
            <button
              onClick={() => onGoing(task._id)}
              className="bg-[#EA4744] p-[10px] rounded"
            >
              <p className="text-white">Ongoing</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ToDo.propTypes = {
  task: PropTypes.object.isRequired,
  refetch: PropTypes.func.isRequired,
};

export default ToDo;
