const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({ 
  title: {
    type: String,
    default: 'Inbox',
  },
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  tasks: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Task'
    }
  ]
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;