import { useState, useEffect } from 'react';
const projectService = require('../services/project');
const taskService = require('../services/task');

export function useFetchProjects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await projectService.getAllProjects();
        setProjects(response);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return { projects, setProjects };
}

export function useFetchAllTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await taskService.getAllTask();
        setTasks(response);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return { tasks, setTasks };
}

export function useFetchSingleTasks() {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await taskService.getAllTask();
        setTask(response);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return { task, setTask };
}

export function useFetchWeeklyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await taskService.getWeeklyTask();
        setTasks(response);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return { tasks, setTasks };
}

export function useFetchDailyTasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController(); // Abort api call if component fails to render
    const fetchData = async () => {
      try {
        const response = await taskService.getDailyTask();
        setTasks(response);
      } catch (error) {
        abortController.abort();
      }
    };
    fetchData();
    return () => abortController.abort();
  }, []);

  return { tasks, setTasks };
}