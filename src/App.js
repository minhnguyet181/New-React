import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gửi request đến backend NestJS ở cổng 1004
    axios
      .get('http://localhost:1004/') // URL API trong backend NestJS
      .then((response) => {
        setData(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div>
      
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
