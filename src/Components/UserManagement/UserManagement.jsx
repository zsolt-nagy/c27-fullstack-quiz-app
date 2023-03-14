import React, { useEffect, useState } from 'react';
import UserItem from './UserItem/UserItem';
import NewUserForm from './NewUserForm/NewUserForm';
import './UserManagement.css';

export default function UserManagement() {
    const [users, setUsers] = useState([]);

    const loadUsers = (newUsers = null) => {
        if (Array.isArray(newUsers)) {
            setUsers(newUsers);
        } else {
            fetch('https://un1hm7-8080.csb.app/api/users')
                .then(x=>x.json())
                .then(response => {
                    setUsers(response);
                });
        }
    }

    useEffect(loadUsers, []);

    const UserItemListJsx = users.map(user => 
        <UserItem name={user.name} email={user.email} key={user.id} id={user.id} />
    );

    return (
        <div>
            <h2>User Management</h2>
            <section>
                <NewUserForm loadUsers={loadUsers} />
            </section>
            <section>
                <ul className="user-list">
                    { UserItemListJsx }
                </ul>
            </section>
        </div>
    );
}