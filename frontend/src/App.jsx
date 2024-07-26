import React, { useState, useEffect } from 'react';
import UserCard from './components/userCards';
import UserList from './components/userList';
import CreateUser from './components/createUser';
function App() {



    return (
        <div >
          <h1>test admin</h1>
        
        <UserList/>
        <CreateUser/>
            
        </div>
    );
}

export default App;
