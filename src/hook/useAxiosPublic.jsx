import axios from "axios";


const axiosPublic = axios.create({
    // baseURL: "http://localhost:5000",
    baseURL: "https://to-do-list-server-psi.vercel.app",
  });
  
  const useAxiosPublic = () => {
    return axiosPublic;
  };
  
export default useAxiosPublic;