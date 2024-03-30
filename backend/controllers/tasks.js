import mongoose from "mongoose";
import Task from "../models/taskSchema.js";


/**GET : url */
export const indexView = async (req, res) => {
    try {
        res.redirect('http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
}

/**GET: url/tasks */
export const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json({ tasks, message: "Task fetched Successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.log(error);
    }
}


/** DELETE: url/task/delete/:id */
export const postDeleteTask = async (req, res) => {
    const taskId = req.params.id;
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
        
        const task = await Task.findById(taskId).session(session);
        if (!task) {
            await session.abortTransaction();
            session.endSession();
            return res.status(404).json({ message: "Task not found" });
        }
        // Delete the task
        await task.deleteOne({ session });
        await session.commitTransaction();
        session.endSession();

        // Return a success response
        res.json({ message: "Task deleted successfully" });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        res.status(500).json({ message: "Internal server error" });
    }
}


/** POST: url/task/create */
export const postAddTask = async (req, res) => {
    try {
        const { title, description, status, priority, category } = req.body;
        const task = new Task({
            title,
            description,
            status,
            priority,
            category
        });

        const savedTask = await task.save();
        res.json({ task: savedTask, message: "Task Added Successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

/** PUT: url/task/update/:id */
export const postUpdateTask = async (req, res) => {
    const taskId = req.params.id;
    const newStatus = req.body.status;

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        const task = await Task.findByIdAndUpdate(taskId, { status: newStatus }, { new: true }).session(session);
        if (!task) {
            await session.abortTransaction();
            session.endSession();
            return res.status(404).json({ message: "Task not found" });
        }

        await session.commitTransaction();
        session.endSession();

        res.json({ message: "Task Updated Successfully" });
    } catch (error) {
        await session.abortTransaction();
        session.endSession();
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
}
