import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import Search from './Search'

const List = () => {
    const [users, setUsers] = useState([]);

    const fetchUsers = async () => {
        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            setUsers(response.data);
        } catch (error) {
            console.log('Error fetching users:', error);
        }
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    return (
        <>

            <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
                <h1 className='text-4xl font-bold mb-6 text-red-500'>User List</h1>
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className='text-lg font-medium mb-2' >
                            <Link key={user.id}
                                to={`/user/${user.id}`}
                                className='text-blue-500 hover:underline'
                            >

                                {user.name} - {user.username}

                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Search />
                </div>

            </div>
        </>
    )
}

export default List
