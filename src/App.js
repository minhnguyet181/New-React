import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import UserApp from './components/UserApp';


const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Gửi request đến backend NestJS ở cổng 1004
    axios
      .get('http://localhost:1004/api/users') // URL API trong backend NestJS
      .then((response) => {
        setData(response.data); // Lưu dữ liệu vào state
      })
      .catch((error) => {
        console.error('Error fetching data from backend:', error);
      });
  }, []);

  return (
    <div className="App">
      <UserApp />
    </div>
  );

}
export default App;
