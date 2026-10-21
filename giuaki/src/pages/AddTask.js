import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PRIORITIES } from '../data';

const AddTask = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [priority, setPriority] = useState(PRIORITIES[0]);
  const [hours, setHours] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();


    if (!title.trim() || !assignedTo.trim() || !hours) {
      setErrorMsg('Vui lòng nhập đầy đủ thông tin phía dưới form');
      return;
    }

    const numHours = Number(hours);
    if (isNaN(numHours) || numHours < 1 || numHours > 40) {
      setErrorMsg('Số giờ phải từ 1 đến 40');
      return;
    }

    onAdd({
      title: title.trim(),
      assignedTo: assignedTo.trim(),
      priority,
      hours: numHours
    });

   navigate('/tasks', { replace: true });
  };

  return (
    <div>
      <h2>Thêm công việc mới</h2>
      {errorMsg && <p style={{ color: 'red' }}>{errorMsg}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tên công việc: </label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Người làm: </label>
          <input type="text" value={assignedTo} onChange={(e) => setAssignedTo(e.target.value)} />
        </div>
        <div>
          <label>Ưu tiên: </label>
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            {PRIORITIES.map((p, idx) => (
              <option key={idx} value={p}>{p}</option>
            ))}
          </select>
        </div>
        <div>
          <label>Số giờ: </label>
          <input type="number" value={hours} onChange={(e) => setHours(e.target.value)} />
        </div>
        <button type="submit" style={{ marginTop: '10px' }}>Thêm mới</button>
      </form>
    </div>
  );
};

export default AddTask;