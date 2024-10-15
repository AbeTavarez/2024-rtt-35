import mongoose from 'mongoose';


export const taskSchema = new mongoose.Schema({
    projectId: {
        type: mongoose.ObjectId,
        ref: 'Task',
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
}, {timestamps: true});


const Task = new mongoose.model('Task', taskSchema);
export default Task;