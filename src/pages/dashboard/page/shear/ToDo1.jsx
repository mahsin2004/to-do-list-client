
import PropTypes from "prop-types";

const ToDo1 = ({ task}) => {
  

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
            
          </div>
        </div>
      </div>
    </div>
  );
};

ToDo1.propTypes = {
  task: PropTypes.object.isRequired,
};

export default ToDo1;
