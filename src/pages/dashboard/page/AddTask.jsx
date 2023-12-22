import { useRef } from "react";
import Swal from "sweetalert2";

const AddTask = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    console.log(name, email);
    form.current.reset();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out.",
    });
  };
  return (
    <div>
      <div>
        <form ref={form} onSubmit={sendEmail} className=" bg-white mx-auto">
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-[#495057]">Enter Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Enter your title"
              className="input bg-white input-bordered border-gray-300 focus:border-none"
              required
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-[#495057] ">
                Enter Description
              </span>
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Your description"
              className="input bg-white border-gray-300 focus:border-none input-bordered"
              required
            />
          </div>
          <div className="form-control mb-3">
            <label className="label">
              <span className="label-text text-[#495057] ">Enter Deadline</span>
            </label>
            <input
              type="date"
              name="deadline"
              placeholder="Enter your deadline"
              className="input bg-white border-gray-300 focus:border-none input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg">Select Priority</span>
            </label>
            <select
              name="category"
              placeholder="select type"
              className="input input-bordered"
              required
            >
              <option value="Low">Low</option>
              <option value="Moderate">Moderate</option>
              <option value="High">High</option>
            </select>
          </div>

          <div className="form-control mt-6">
            <button className="btn bg-[#495057] text-white hover:bg-[#B68C5A] border hover:border-[#B68C5A] border-[#495057] hover:text-">
              Add Task
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
