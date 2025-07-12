import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide title'],
    trim: true,
  },
  description: { 
    type: String,
    required: [true, 'Please provide description'],
    trim: true,
  },
  longDescription: {
    type: String,
    required: [true, 'Please provide more details'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, "Please provide an image"],
  },
  technologies: {
    type: [String],
    required: true,
    validate: {
      validator: function(v: string[]) {
        return v && v.length > 0;
      },
      message: 'At least one technology is required'
    }
  },
  category: {
    type: String,
    required: [true, "Please provide a category"],
    enum: ['frontend', 'mobile', 'fullstack', 'design'],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  liveUrl: {
    type: String,
  },
  githubUrl: {
    type: String,
  },
  date: {
    type: Date, 
    default: Date.now,
  },
  status: {
    type: String,
    required: [true, "Please provide project status"],
    enum: ['completed', 'in-progress'], 
  },
}, {
  timestamps: true, 
});

export const Project = mongoose.models.Project || mongoose.model("Project", projectSchema);
