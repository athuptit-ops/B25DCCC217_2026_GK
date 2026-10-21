import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WorkTimer from '../components/WorkTimer';

const TaskDetail = ({ tasks }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const task = tasks.find(t => t.id === Number(id));

  if (!task) {
    return (
      <div>
        <p>Không tìm thấy công việc</p>
        <button onClick={() => navigate(-1)}>Quay lại</button>
      </div>
    );
  }

  return (
    <div>
      <h2>Chi tiết công việc</h2>
      <p><strong>Tên:</strong> {task.title}</p>
      <p><strong>Người làm:</strong> {task.assignedTo}</p>
      <p><strong>Ưu tiên:</strong> {task.priority}</p>
      <p><strong>Số giờ:</strong> {task.hours}</p>
      <p><strong>Trạng thái:</strong> {task.done ? 'Đã xong' : 'Chưa xong'}</p>
      
      <WorkTimer />
      
      <button onClick={() => navigate(-1)} style={{ marginTop: '15px' }}>Quay lại</button>
    </div>
  );
};

export default TaskDetail;