import React, { useState } from 'react';

const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '20px',
    width: '250px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    position: 'relative'
};

const inputStyle = {
    display: 'block',
    marginBottom: '10px',
    width: '100%'
};

const buttonStyle = {
    marginTop: '10px'
};

function UserCard({ user, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedUser, setEditedUser] = useState(user);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedUser({ ...editedUser, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(user.id, editedUser);
        setIsEditing(false);
    };

    return (
        <div style={cardStyle}>
            {!isEditing ? (
                <>
                    <h2>{user.nombre} {user.apellido}</h2>
                    <p>Email: {user.email}</p>
                    <button style={buttonStyle} onClick={() => setIsEditing(true)}>Edit</button>
                </>
            ) : (
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="nombre"
                        value={editedUser.nombre}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <input
                        type="text"
                        name="apellido"
                        value={editedUser.apellido}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        name="email"
                        value={editedUser.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <button type="submit" style={buttonStyle}>Save</button>
                    <button type="button" onClick={() => setIsEditing(false)} style={buttonStyle}>Cancel</button>
                </form>
            )}
        </div>
    );
}

export default UserCard;
