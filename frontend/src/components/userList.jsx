// src/components/UserList.js
import React, { useState, useEffect } from 'react';

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('error');
        }
        return response.json();
      })
      .then(data => {
        setUsers(data);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/users/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('no se borrroooo');
        }
        setUsers(users.filter(user => user.id !== id));
      })
      .catch(console.log("error"));
  };

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      <ul>
        {users.map(user => (
          <li key={user.id}>
            {user.nombre} {user.apellido} ({user.email})
            <button onClick={() => handleDelete(user.id)}>Borrar</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
