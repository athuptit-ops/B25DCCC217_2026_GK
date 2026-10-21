import React from 'react';

const Home = ({ tasks }) => {
  const totalTasks = tasks.length;
  const completedTasks = tasks.reduce((acc, t) => acc + (t.done ? 1 : 0), 0);
  const remainingHours = tasks.reduce((acc, t) => acc + (!t.done ? Number(t.hours) : 0), 0);

  return (
    <div>
      <h1>Công việc nhóm</h1>
      <p>Tổng số công việc: {totalTasks}</p>
      <p>Số công việc đã xong: {completedTasks}</p>
      <p>Tổng số giờ còn lại: {remainingHours}</p>
    </div>
  );
};

export default Home;