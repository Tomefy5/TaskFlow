const mongoose = require("mongoose");

const { Schema } = mongoose;

const TaskSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
    },
    deadline: {
        type: Date,
    },
    priority: {
        type: String,
        enum: ["high", "medium", "low"],
        default: "low"
    },
    finished: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true
    }

}, { timestamps: true });

const Task = mongoose.model("Task", TaskSchema);

module.exports = Task;
