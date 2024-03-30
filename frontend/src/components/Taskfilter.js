import React, { useState } from "react";

const Taskfilter = (props) => {
  const [selectedPriority, setSelectedPriority] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handlePriorityChange = (event) => {
    setSelectedPriority(event.target.value);
    props.onPriorityChange(event.target.value);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
    props.onCategoryChange(event.target.value);
  };

  return (
    <div className="grid-cols-3 justify-center items-center border border-[#7042f88b] rounded-md p-2">
      <div className="...">
        <select
          className=""
          value={selectedPriority}
          onChange={handlePriorityChange}
        >
          <option value="">Filter By Priority</option>
          {["Low", "Medium", "High"].map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
      <div className="...">
        <select
          className=""
          value={selectedCategory}
          onChange={handleCategoryChange}
        >
          <option value="">Filter By Category</option>
          {[
            "General",
            "Work",
            "Personal",
            "Health",
            "Finance",
            "Social",
            "Study",
            "Travel",
          ].map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Taskfilter;
