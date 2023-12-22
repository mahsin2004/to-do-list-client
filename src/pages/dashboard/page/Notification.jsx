import { useEffect } from "react";

const Notification = () => {
  useEffect(() => {
    document.title = 'Notification | Task Management'
  },[])
  return (
    <div>
      <h1>This is notification</h1>
    </div>
  );
};

export default Notification;
