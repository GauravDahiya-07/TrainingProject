import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'


function UserDetails() {
    const { userId } = useParams();
    const [user, setUser] = useState(null);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchUser = async () => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users`);
        const UserData = response.data.find((user) => user.id === parseInt(userId));
;        setUser(UserData);
        fetchPosts(UserData.id);
    };

    const fetchPosts = async (userId) => {
        const response = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
        setPosts(response.data);
    };
    return (
        <div className='flex flex-col items-center justify-center min-h-screen bg-gray-100'>
            {user && (
                <div>
                    <h1 className='text-6xl font-bold text-purple-500'>{user.name}</h1>
                    <h2 className='text-4xl font-bold text-yellow-400'> Posts</h2>
                    <div className='posts'>
                        {posts.map((post) => (
                            <div key={post.id} className='post'>
                                <h3 className='text-2xl font-bold  text-green-400' > Title :- {post.title}</h3>
                                <p className='text-2xl text-left'>{post.body}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserDetails