import React, { useState } from 'react';


const UserList = () => {
    const [users, setUsers] = useState([]);

    const handleAddUser = (user) => {
        setUsers([...users, user]);
    };

    return (
        <div>
           {handleAddUser} 
            {users.map((user, index) => (
                <div key={index}>
                    <p>Name: {user.name} | Email: {user.email} | Address: {user.address} | Password: ****</p>
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
            ))}
        </div>
    );
};

export default UserList;
