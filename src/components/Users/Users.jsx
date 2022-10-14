import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((res) => res.json())
        .then((data) => setUsers(data));
    }, []);

    return (
        <div>
            <h1>Users</h1>
            <ul>
                {users.map((user) => (
                    <Link key={user.id} to={`/users/${user.id}`}>
                        <li>{user.name}</li>
                        <p>{user.email}</p>
                        <p>{user.phone}</p>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export { Users };