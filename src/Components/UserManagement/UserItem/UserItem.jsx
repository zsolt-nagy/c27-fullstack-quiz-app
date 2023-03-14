import React from 'react';

export default function UserItem(props) {
    const { name, email } = props;

    return (
        <li>{name} &lt;{email}&gt;</li>
    );
}