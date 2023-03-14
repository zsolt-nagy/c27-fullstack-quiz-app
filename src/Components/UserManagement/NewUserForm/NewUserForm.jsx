import React, { useState } from 'react';

export default function NewUserForm(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleEmailChange(event) {
        setEmail(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        fetch('https://un1hm7-8080.csb.app/api/users/new', {
            method: 'POST',
            headers: {
              accept: 'application.json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email
            }),
            cache: 'default'
        })
            .then(x => x.json())
            .then(userList => {
                props.loadUsers(userList);
            });     
    }

    return (
        <form action="#" method="POST" onSubmit={handleSubmit}>
            <div className="form-row">
                <label>
                    Name:
                    <input 
                        type="text" 
                        name="name" 
                        value={name} 
                        onChange={handleNameChange} />
                </label>
            </div>
            <div className="form-row">
                <label>
                    Email:
                    <input 
                        type="email" 
                        name="email" 
                        value={email} 
                        onChange={handleEmailChange} />
                </label>
            </div>   
            <div className="form-row">
                <button type="submit">Create User</button>    
            </div>        
        </form>
    );
}