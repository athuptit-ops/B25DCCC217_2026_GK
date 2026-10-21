import React, { useState } from 'react';
import FilterBar from '../components/FilterBar';
import TaskTable from '../components/TaskTable';

const TaskList = ({ tasks, onDelete, onToggle }) => {
  const [search, setSearch] = useState('');
  const [priorityFilter, setPriorityFilter] = useState('');

  const filteredTasks = tasks.filter(task => {
    const matchTitle = task.title.toLowerCase().includes(search.toLowerCase());
    const matchPriority = priorityFilter === '' || task.priority === priorityFilter;
    return matchTitle && matchPriority;
  });

  return (
    <div>
      <h2>Danh sách công việc</h2>
      <FilterBar 
        search={search} 
        setSearch={setSearch} 
        priority={priorityFilter} 
        setPriority={setPriorityFilter} 
      />
      <TaskTable tasks={filteredTasks} onDelete={onDelete} onToggle={onToggle} />
    </div>
  );
};

export default TaskList;