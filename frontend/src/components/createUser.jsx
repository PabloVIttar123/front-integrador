import React, { useState } from 'react';

const CreateUser = () => {
  const [user, setUser] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });

      if (!response.ok) {
        throw new Error('Fallo crear usuario');
      }

      const result = await response.json();
      console.log('exito', result);
    } catch (error) {
      console.error('error:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Nombre:
          <input
            type="text"
            name="nombre"
            value={user.nombre}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Apellido:
          <input
            type="text"
            name="apellido"
            value={user.apellido}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Role:
          <select
            name="role"
            value={user.role}
            onChange={handleChange}
            required
          >
            <option value="" disabled>Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </label>
      </div>
      <button type="submit">Create User</button>
    </form>
  );
};

export default CreateUser;
