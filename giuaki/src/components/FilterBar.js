import React from 'react';
import { PRIORITIES } from '../data';

const FilterBar = ({ search, setSearch, priority, setPriority }) => {
  return (
    <div style={{ marginBottom: '15px' }}>
      <div>
        <label htmlFor="searchInput">Tìm kiếm: </label>
        <input 
          id="searchInput"
          type="text" 
          value={search} 
          onChange={(e) => setSearch(e.target.value)} 
          placeholder="Nhập tên công việc..."
        />
      </div>
      <div style={{ marginTop: '10px' }}>
        <label htmlFor="prioritySelect">Lọc ưu tiên: </label>
        <select 
          id="prioritySelect"
          value={priority} 
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="">Tất cả</option>
          {PRIORITIES.map((p, index) => (
            <option key={index} value={p}>{p}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FilterBar;