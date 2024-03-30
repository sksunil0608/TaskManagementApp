import React from "react";
import Task from "../components/Task";

const Home = () => {
  return (
    <div className="h-full w-full">
      <div className="flex flex-col gap-50 px-5 md:px-10  lg:px-60">
        <h1 className=" text-center py-10 italic font-bold text-[30px] text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Task Management
        </h1>
        <Task />
      </div>
    </div>
  );
};

export default Home;
