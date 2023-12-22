import { MdOutlineEmail, MdAddIcCall, MdLocationPin } from "react-icons/md";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="">
      <div className="p-10 bg-neutral text-white">
        <div className="max-w-[1200px] mx-auto lg:flex justify-around">
          <nav>
            <header className="footer-title text-2xl">Task Management</header>
            <header className="footer-title">Nav Links</header>
            <div className="flex gap-2">
              <li className="link link-hover list-none">
                <Link to="/">Home</Link>
              </li>
              <li className="link link-hover list-none">
                <Link to="/Features">Features</Link>
              </li>
              <li className="link link-hover list-none">
                <Link to="/contact">Contact Us</Link>
              </li>
            </div>
            <header className="footer-title mt-3">Social Links</header>
            <div className="flex gap-2">
              <a
                href="https://github.com/mahsin2004"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="p-2 bg-white rounded-full">
                  <FaLinkedin className="text-2xl text-blue-500"></FaLinkedin>
                </p>
              </a>
              <a
                href="https://www.linkedin.com/in/md-mahsin-mia"
                target="_blank"
                rel="noopener noreferrer"
              >
                <p className="p-2 bg-white rounded-full">
                  <FaGithub className="text-2xl text-gray-800"></FaGithub>
                </p>
              </a>
            </div>
          </nav>
          <div className="mt-8 lg:mt-0">
            <header className="footer-title text-2xl">Address</header>
            <div className="grid lg:grid-cols-2 gap-3 mx-auto">
              <div className="bg-white drop-shadow-md rounded-md flex items-center gap-1 p-2 ">
                <MdLocationPin className="text-3xl text-[#495057]"></MdLocationPin>
                <div className="flex flex-col">
                  <p className="text-[#495057]">Brahmanbaria, Bangladesh</p>
                </div>
              </div>
              <div className="bg-white drop-shadow-md rounded-md p-2 flex items-center gap-1">
                <MdAddIcCall className="text-3xl text-[#495057]"></MdAddIcCall>
                <div className="flex flex-col">
                  <p className="text-[#495057]">+8801741156408</p>
                </div>
              </div>
              <div className="bg-white drop-shadow-md rounded-md p-2 flex items-center gap-1">
                <MdOutlineEmail className="text-3xl  text-[#495057]"></MdOutlineEmail>
                <div className="flex flex-col">
                  <p className="text-[#495057]">mahsin1912@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#676767] text-center text-white py-3">
        <h1 className="font-bold">© To Do List 2023</h1>
      </div>
    </div>
  );
};

export default Footer;
