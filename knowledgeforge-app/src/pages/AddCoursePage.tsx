import React from "react";
import AddCourseCard from "../components/AddCourseCard";
import Sidebar from "../components/Sidebar";

const AddCoursePage = () => {
  const category = () => {};
  return (
    <div className="flex flex-row">
      <div className="flex bg-background-cream">
        <Sidebar category={category} />
      </div>
      <div className="flex w-1/2 h-3/5 my-5 justify-between items-center bg-white rounded-lg ml-32 p-8 shadow-2xl">
        <AddCourseCard />
      </div>
    </div>
  );
};

export default AddCoursePage;
