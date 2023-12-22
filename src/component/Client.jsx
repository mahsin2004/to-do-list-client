import Marquee from "react-fast-marquee";
import Card1 from "../Cards/Card1";
import Card2 from "../Cards/Card2";
import Card3 from "../Cards/Card3";
import Cards4 from "../Cards/Cards4";
const Client = () => {
  return (
    <div className="max-w-[1200px] mx-auto mt-8 mb-20">
      <h1 className="text-4xl text-center font-bold text-gray-800">Who Benefits from Us</h1>
      <p className="text-center w-96 mx-auto text-gray-800">Our Task Management Platform caters to a wide range of professionals, making it ideal for...</p>
      <Marquee speed={100}>
        <Card1></Card1>
        <Card2></Card2>
        <Card3></Card3>
        <Cards4></Cards4>
      </Marquee>
    </div>
  );
};

export default Client;
