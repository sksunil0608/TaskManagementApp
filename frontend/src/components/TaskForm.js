import React, { useState } from "react";

const TaskForm = ({ closeForm, onTaskAdd, loading }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("General");
  const [priority, setPriority] = useState("Low");

  // Handle the form Submit for task adding
  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      title: title,
      description: description,
      status: false,
    };
    onTaskAdd(newTask);
    setTitle("");
    setDescription("");
  };
  // Handle the form Submit for task adding end

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 backdrop-filter backdrop-blur-md bg-gray-800 bg-opacity-50">
      <div className="flex flex-col items-center justify-center">
        <div className="rounded-lg border-2 bg-gradient-to-r from-purple-500 to-cyan-500 relative">
          {loading && (
            // Conditionally render loading icon if loading is true
            <div className="w-full h-full flex items-center justify-center fixed top-0 left-0 bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-md">
              <div
                className="inline-block h-16 w-16 animate-spin rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 border-8 border-solid border-current border-r-transparent align-[-0.125em] text-primary motion-reduce:animate-[spin_1.5s_linear_infinite]"
                role="status"
              >
                <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
                  Loading...
                </span>
              </div>
            </div>
          )}
          <div>
            <button
              onClick={closeForm}
              className="text-2xl px-2 float-right group bg-gradient-to-br rounded-md from-purple-600 to-blue-500"
            >
              X
            </button>
          </div>
          
          <form
            onSubmit={handleSubmit}
            className="mx-20 rounded px-11 pt-6 pb-4"
          >
            <div className="mb-4">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="title"
              >
                Title
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-400 leading-tight focus:outline-none focus:shadow-outline"
                id="title"
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
              />
            </div>
            <div className="mb-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="description"
              >
                Description
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="description"
                type="description"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            {/* Select Category */}
            <div className="mb-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="category"
              >
                Category
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="">Select a category</option>
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

            {/* Select Priority */}
            <div className="mb-2">
              <label
                className="block text-white text-sm font-bold mb-2"
                htmlFor="priority"
              >
                Priority
              </label>
              <select
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="priority"
                value={priority}
                onChange={(e) => setPriority(e.target.value)}
                required
              >
                <option value="">Select a priority</option>
                {[
                  "Low",
                  "Medium",
                  "High",
                ].map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="text-white bg-gradient-to-br from-purple-600 to-blue-500 focus:ring-4 px-5 py-2.5 rounded-lg text-center me-2 mb-2 text-sm focus:outline-none hover:bg-gradient-to-bl"
              >
                Add Task
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default TaskForm;
