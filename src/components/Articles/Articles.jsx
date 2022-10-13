import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Articles = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data));
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            <ul>
                {posts.map((post) => (
                    <Link key={post.id} to={`/posts/${post.id}`}>
                        <li>{post.title}</li>
                    </Link>
                ))}
            </ul>
        </div>
    );
};

export { Articles };