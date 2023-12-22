import { useEffect } from "react";
import Client from "../component/Client";
import HeroArea from "../component/HeroArea";


const Home = () => {
  useEffect(() => {
    document.title = 'Home | Task Management'
  },[])
  return (
    <div>
        <HeroArea></HeroArea>
        <Client></Client>
    </div>
  );
};

export default Home;