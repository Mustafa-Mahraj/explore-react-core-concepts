import { useEffect, useState } from "react"
import './posts.css'
import Post from "./post";

export default function Posts (){
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPosts(data));
    }, [])

    return (
        <div className="box">
            <h2>Posts: {posts.length}</h2>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    )
}