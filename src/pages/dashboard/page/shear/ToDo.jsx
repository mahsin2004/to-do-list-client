import { MdModeEdit, MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../../../hook/useAxiosPublic";

const ToDo = ({ task, refetch }) => {
  const axiosPublic = useAxiosPublic();

  const deleteItem = (id) => {
    console.log(id)
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
        <div className="flex gap-3 justify-end">
          <Link to={`/update/${task._id}`} className="bg-[#3C393B] p-[10px] rounded">
            <MdModeEdit className="text-white" />
          </Link>
          <button
            onClick={() => deleteItem(task._id)}
            className="bg-[#EA4744] p-[10px] rounded"
          >
            <MdDelete className="text-white" />
          </button>
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
