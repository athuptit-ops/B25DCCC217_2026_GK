import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Layout from './components/layout';
import Home from './pages/Home';
import TaskList from './pages/TaskList';
import AddTask from './pages/AddTask';
import TaskDetail from './pages/TaskDetail';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    const savedTasks = localStorage.getItem('gk_tasks');
    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
      setLoading(false);
      return;
    }

    axios.get('/data/tasks.json', { signal: controller.signal })
      .then(res => {
        setTasks(res.data);
        setLoading(false);
      })
      .catch(err => {
        if (!axios.isCancel(err)) {
          setError(true);
          setLoading(false);
        }
      });

    return () => {
      controller.abort();
    };
  }, []);

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('gk_tasks', JSON.stringify(tasks));
    }
  }, [tasks, loading]);

  
  const addTask = (newTaskData) => {
    const maxId = tasks.length > 0 ? Math.max(...tasks.map(t => t.id)) : 0;
    const newTask = {
      id: maxId + 1,
      ...newTaskData,
      done: false
    };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  const toggleTaskStatus = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  if (loading) return <div>Đang tải...</div>;
  if (error) return <div>Không tải được dữ liệu</div>;

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home tasks={tasks} />} />
        <Route path="tasks" element={<TaskList tasks={tasks} onDelete={deleteTask} onToggle={toggleTaskStatus} />} />
        <Route path="tasks/new" element={<AddTask tasks={tasks} onAdd={addTask} />} />
        <Route path="tasks/:id" element={<TaskDetail tasks={tasks} />} />
      </Route>
    </Routes>
  );
};

export default App;