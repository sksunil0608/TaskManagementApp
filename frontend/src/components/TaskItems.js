import React from "react";
const TaskItems =  ({ tasks, onTaskUpdate, onTaskDelte }) => {
  const handleTaskStatusChange = async (taskId) => {
    const newStatus = true
    onTaskUpdate(taskId,newStatus)
  };

   // Sort tasks by priority (High -> Medium -> Low) by default
  const sortedTasks = tasks.slice().sort((a, b) => {
    const priorityOrder = { High: 1, Medium: 2, Low: 3 };
    return priorityOrder[a.priority] - priorityOrder[b.priority];
  });
  return (
    <div className="">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">ID</th>
            <th className="px-4 py-2">Title</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Priority</th>
            <th className="px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody className="">
          {sortedTasks&&
            sortedTasks.map((task, index) => (
              <tr
                key={index}
                className={`${index % 2 === 0 ? "bg-select" : "bg-unselect"} ${
                  task.status ? "line-through" : ""
                } text-white opacity-[0.9] border border-black rounded-lg`}
              >
                <td className="px-10 py-2">{index}</td>
                <td className=" px-10 py-2">{task.title}</td>
                
                <td className="px-10 py-2">{task.category}</td>
                <td className="px-10 py-2">
                  {task.priority}
                </td>
                <td className="px-10 py-2">
                  {task.status ? (
                    <div>
                      <button className="text-green-400 text-2xl">
                        <svg
                          className="h-8 w-8 text-green-500"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  ) : (
                    <div>
                      <input
                        type="checkbox"
                        onChange={() => handleTaskStatusChange(task._id)}
                        className="w-4 h-4"
                      />
                    </div>
                  )}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default TaskItems;
