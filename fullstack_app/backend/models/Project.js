import mongoose from "mongoose";

const projectSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
    },
    endDate: {
      type: Date,
    },
    tasks: [],
  },
  { timestamps: true },
);

// index
// pre save middlewares
// methods


const Project = new mongoose.model('Project', projectSchema);
export default Project;