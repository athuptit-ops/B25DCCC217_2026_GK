import React from 'react';
import { Link } from 'react-router-dom';

const TaskRow = ({ task, onDelete, onToggle }) => {
  
  const { id, title, assignedTo, priority, hours, done } = task;

  return (
    <tr>
      <td>
        <Link to={`/tasks/${id}`} style={{ textDecoration: done ? 'line-through' : 'none' }}>
          {title}
        </Link>
      </td>
      <td>{assignedTo}</td>
      <td>{priority}</td>
      <td>{hours}</td>
      <td>{done ? 'Đã xong' : 'Chưa xong'}</td>
      <td>
        <button onClick={() => onToggle(id)}>
          {done ? 'Làm lại' : 'Hoàn thành'}
        </button>
        <button onClick={() => onDelete(id)} style={{ marginLeft: '5px', color: 'red' }}>
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default TaskRow;