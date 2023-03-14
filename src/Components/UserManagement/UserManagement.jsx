import React, { useEffect, useState } from 'react';
import UserItem from './UserItem/UserItem';
import NewUserForm from './NewUserForm/NewUserForm';
import './UserManagement.css';

export default function UserManagement() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://un1hm7-8080.csb.app/api/users')
            .then(x=>x.json())
            .then(response => {
                setUsers(response);
            });
    }, []);

    const UserItemListJsx = users.map(user => 
        <UserItem name={user.name} email={user.email} key={user.id} id={user.id} />
    );

    return (
        <div>
            <h2>User Management</h2>
            <section>
                <NewUserForm />
            </section>
            <section>
                <ul className="user-list">
                    { UserItemListJsx }
                </ul>
            </section>
        </div>
    );
}