import React, { useEffect, useState } from "react";
import TaskForm from "./TaskForm";
import TaskItems from "./TaskItems";
import {
  postAddTask,
  getAllTasks,
  postUpdateTask,
  postDelteTask,
} from "../api/tasks"; //Api functions are here
import Taskfilter from "./Taskfilter";

const Task = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(false);

  const [categoryFilter, setCategoryFilter] = useState("");
  const [priorityFilter, setPriorityFilter] = useState("");

  // Fetching the task from api
  useEffect(() => {
    // Fetch tasks from API
    const fetchTasks = async () => {
      try {
        const response = await getAllTasks();
        setTasks(response.tasks);
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };
    fetchTasks();
  }, []);
  // Fetching the task from api end

  //   Form Open and Closing
  const [formOpen, setFormOpen] = useState(false);
  const openForm = () => {
    setFormOpen(true);
  };
  const closeForm = () => {
    setFormOpen(false);
  };
  //   Form Open and Closing End

  // Handles adding a new task
  const handleTaskAdd = async (newTask) => {
    try {
      setLoading(true);
      const response = await postAddTask(newTask);
      if (response) {
        // If the task is successfully added, update the tasks
        setTasks([...tasks, response.data.task]);
        closeForm();
      }
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setLoading(false); // Set loading state to false after adding task
    }
  };
  // Hanlding adding new task end

  // Handling Task Upadate
  const handleTaskUpdate = async (taskId, newStatus) => {
    try {
      const response = await postUpdateTask(taskId, newStatus);
      if (response) {
        // Find the updated task in the tasks array and update its status
        const updatedTasks = tasks.map((task) =>
          task._id === taskId ? { ...task, status: newStatus } : task
        );
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error("Error Updating task:", error);
    }
  };
  //Handling Task Update End

  // Handling Task Delete
  const handleTaskDelete = async (taskId) => {
    try {
      const response = await postDelteTask(taskId);
      if (response) {
        // Filter out the deleted task from the tasks array
        const updatedTasks = tasks.filter((task) => task._id !== taskId);
        setTasks(updatedTasks);
      }
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };
  //Handling Task Delte End


  /** Handle Task and Category Filter */
   // Filter tasks based on category and priority
  const filteredTasks = tasks.filter((task) => {
    if (categoryFilter && task.category !== categoryFilter) {
      return false;
    }
    if (priorityFilter && task.priority !== priorityFilter) {
      return false;
    }
    return true;
  });
  return (
    <div className="relative flex flex-col h-full w-full rounded-sm border-2 border-[#7042f88b] opacity-[0.9]">
      <div className="py-2 px-5">
        <div className="flex flex-row items-center justify-center">
          <button
            onClick={openForm}
            className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 "
          >
            <span className="text-[16px] text-red-500 font-bold lg:text-[26px] relative px-20 lg:px-30 py-4 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md">
              Add New Task
            </span>
          </button>
          <div>
            <Taskfilter onCategoryChange={setCategoryFilter}
              onPriorityChange={setPriorityFilter}/>
          </div>
        </div>

        {formOpen && (
          <TaskForm
            closeForm={closeForm}
            onTaskAdd={handleTaskAdd}
            loading={loading}
          />
        )}
        <TaskItems
          tasks={filteredTasks}
          onTaskUpdate={handleTaskUpdate}
          onTaskDelte={handleTaskDelete}
        />
      </div>
    </div>
  );
};

export default Task;
