import mongoose from "mongoose";

const { Schema } = mongoose;
const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Low'
    },
    category: {
        type: String,
        enum:['General','Work','Personal','Health','Finance','Social','Study','Travel'],
        default:'General'
    }
});


/** Creating Collection */
const Task = mongoose.model('Task', TaskSchema);
export default Task;