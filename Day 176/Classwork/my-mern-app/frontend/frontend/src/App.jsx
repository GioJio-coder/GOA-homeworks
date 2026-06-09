import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/users');
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>მომხმარებლები</h1>
      <ul>
        {data.map((user) => (
          <li key={user._id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;