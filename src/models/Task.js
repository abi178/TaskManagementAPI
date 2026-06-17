const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3
    },

    description: {
      type: String
    },

    completed: {
      type: Boolean,
      default: false
    },

    priority: {
      type: String,
      enum: ["low", "medium", "high"],
      default: "medium"
    },

    category: {
      type: String,
      enum: ["work", "personal", "shopping", "health", "other"],
      default: "personal"
    },

    dueDate: {
      type: Date
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Task", taskSchema);