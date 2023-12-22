import { useEffect } from "react";

const Features = () => {
  useEffect(() => {
    document.title = 'Features | Task Management'
  },[])
  return (
    <div className="py-16 max-w-6xl mx-auto px-8" id="about">
      <p className="text-2xl lg:text-3xl font-semibold text-[#495057]">
        To-Do-APP
      </p>
      <p className="text-xl my-4">
        Welcome to TaskEase, your go-to solution for streamlined and efficient
        task management. TaskEase is a user-friendly web app designed to help
        individuals and teams organize, prioritize, and conquer their daily
        tasks with ease. Whether you are a busy professional, a student juggling
        assignments, or anyone seeking a simplified approach to managing
        responsibilities, TaskEase is here to make your life easier.
      </p>
      <div className="flex flex-col lg:flex-row gap-10 justify-center">
        <div className="flex-1">
          <img
            className="rounded-xl"
            src="https://i.postimg.cc/W3XL3D2t/bg25.jpg"
          />
        </div>
        <div className="flex-1 space-y-7">
          <ul className="text-xl text-[#495057] my-2 space-y-1">
            <li>
              <span className="font-semibold">Functionality - 1:</span> Allow
              users to sign up, log in, and log out to access their personalized
              to-do lists.
            </li>
            <li>
              <span className="font-semibold">Functionality - 2:</span> Enable
              users to add new tasks with details such as title, description,
              due date, and priority.
            </li>
            <li>
              <span className="font-semibold">Functionality - 3:</span> Display
              tasks in a clear and organized manner, showing essential
              information like title, due date, and priority.
            </li>
            <li>
              <span className="font-semibold">Functionality - 3:</span> Provide
              the option to delete tasks when they are completed or no longer
              relevant.
            </li>
            <li>
              <span className="font-semibold">Functionality - 4:</span> Allow
              users to edit existing tasks, including modifying the title,
              description, due date, and priority.
            </li>
            <li>
              <span className="font-semibold">Functionality - 5:</span> Allow
              users to mark tasks as completed, providing a visual indication of
              task status.
            </li>
            <li>
              <span className="font-semibold">Functionality - 6:</span> Provide
              user profiles to maintain a personalized experience, showcasing
              individual to-do lists and preferences.
            </li>
            <li>
              <span className="font-semibold">Functionality - 7:</span> Ensure
              the web app is responsive, adapting to different screen sizes for
              a seamless user experience across devices.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
