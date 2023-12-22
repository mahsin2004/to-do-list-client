import { MdLocationPin, MdOutlineEmail, MdAddIcCall } from "react-icons/md";
import { useRef } from "react";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    form.current.reset();
    Swal.fire({
      icon: "success",
      title: "Message Sent!",
      text: "Thank you for reaching out.",
    });
  };

  return (
    <div className="py-16 mb-4 bg-white max-w-6xl mx-auto px-8" id="contact">
      <h1 className="text-4xl font-bold pb-8 text-[#495057]">Get In Touch</h1>
      <div className="flex flex-col lg:flex-row items-center justify-center gap-14">
        <div className=" flex-1">
          <div className="grid grid-cols-1 gap-6 mx-auto">
            <div className="bg-white drop-shadow-md rounded-md flex items-center gap-3 p-10">
              <MdLocationPin className="text-3xl text-[#495057]"></MdLocationPin>
              <div className="flex flex-col">
                <p className="text-[#495057] text-xl">
                  Brahmanbaria, Bangladesh
                </p>
              </div>
            </div>
            <div className="bg-white drop-shadow-md rounded-md p-10 flex items-center gap-3">
              <MdAddIcCall className="text-3xl text-[#495057]"></MdAddIcCall>
              <div className="flex flex-col">
                <p className="text-[#495057] text-xl">+8801741156408</p>
              </div>
            </div>
            <div className="bg-white drop-shadow-md rounded-md p-10 flex items-center gap-3">
              <MdOutlineEmail className="text-3xl  text-[#495057]"></MdOutlineEmail>
              <div className="flex flex-col">
                <p className="text-[#495057] text-xl">mahsin1912@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <form ref={form} onSubmit={sendEmail} className=" bg-white mx-auto">
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text text-[#495057]">
                  Enter Your Name
                </span>
              </label>
              <input
                type="text"
                name="from_name"
                placeholder="Your Name"
                className="input bg-white input-bordered border-gray-300 focus:border-none"
                required
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text text-[#495057] ">
                  Enter Your Email
                </span>
              </label>
              <input
                type="email"
                name="from_email"
                placeholder="email"
                className="input bg-white border-gray-300 focus:border-none input-bordered"
                required
              />
            </div>
            <div className="form-control mb-3">
              <label className="label">
                <span className="label-text text-[#495057]">
                  Enter Your Message
                </span>
              </label>
              <textarea
                type="text"
                name="message"
                placeholder="Enter your message"
                className="input pt-2 h-20 border-gray-300 focus:border-none bg-white input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-[#495057] text-white hover:bg-[#B68C5A] border hover:border-[#B68C5A] border-[#495057] hover:text-">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
