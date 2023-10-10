const Task = require('../models/Task');
const Project = require('../models/Project');
const User = require('../models/User');
const verifyToken = require('../utils/verifyToken');
const convertIdToString = require('../utils/idToString');

const cookieExtractor = (req) => {
  const extractedCookie = req.headers.cookie.split(';')[0].split("authToken=")[1];
  return extractedCookie;
}

// returns all projects that belongs to the user
exports.getAllProjects = async (req, res) => {
  const cookie = cookieExtractor(req);
  const decodedToken = verifyToken(cookie);

  const foundUser = await User.findById(decodedToken.id);
  if (!foundUser) return res.status(401).send({error: 'User not found'});
  
  const foundProjects = await Project.find({creator: decodedToken.id});
  res.status(200).send({data: foundProjects});
};

// return a single project
exports.getSingleProject = async (req, res) => {
  const projectId = req.params.id;
  const foundProject = await Project.findById(projectId);
  res.status(200).send(foundProject);
};

// create a new project
exports.createProject = async (req, res) => {
  const { title } = req.body;

  if(title.length < 3) return res.status(401).send({error: 'Title needs to be 3 characters long'});

  const cookie = cookieExtractor(req);
  const decodedToken = verifyToken(cookie);

  const foundUser = await User.findById(decodedToken.id);
  if (!foundUser) return res.status(401).send({error: 'User not found'});

  // create new project
  const newProject = new Project({
    title,
    creator: foundUser._id,
    tasks: [],
  });

  try {
    const savedProject = await newProject.save();
    const projectStringId = convertIdToString(savedProject._id);
    foundUser.projects.push(projectStringId);
    await foundUser.save();
    res.status(201).send({success: 'Project created', projectId: projectStringId}); 
  } catch(error) {
    res.status(401).send({error: 'Could not create project'});
  }
};


exports.deleteProject = async (req, res) => {
  const projectId = req.params.id;

  try {
    const foundProject = await Project.findById(projectId);

    if (!foundProject) return res.status(404).json({ error: 'Project not found' });

    const cookie = cookieExtractor(req);
    const decodedToken = verifyToken(cookie);
    const foundUser = await User.findById(decodedToken.id);

    if (!decodedToken) return res.status(403).json({ error: 'Not authorized' });
    if (!foundUser) return res.status(403).json({ error: 'User not found' });
    if (foundProject.creator.toString() !== decodedToken.id) return res.status(403).json({ error: 'Not authorized' });
    
    // Delete the task from the database
    await Project.findByIdAndDelete(projectId);

    // Update the user's tasks by removing the deleted task's ID
    foundUser.tasks = foundUser.projects.filter((projectId) => projectId.toString() !== projectId);

    // Save the user
    await foundUser.save();

    res.status(200).json({ success: 'Task deleted' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
