import React from "react";
import { NavLink, useParams, useNavigate } from 'react-router-dom'

function Posts() {
    const [users, setPosts] = React.useState([]);
    
    const navigate = useNavigate()
    const { id } = useParams()

    React.useEffect(() => {
        fetch( `https://jsonplaceholder.typicode.com/users/${id}/posts` )
            .then( response => response.json())
            .then( json => setPosts( json ));
    }, [id])

    return <div>
            <button className="btn btn-outline-danger" onClick={() => navigate(-1)}>Orqaga</button>   
                <h2 className="text-warning fst-italic">Posts</h2>
                <p className="text-danger">Count of posts: {users.length}</p>
            <ul className="user__wrapper list-unstyled col">
                {
                users.length > 0 &&  users.map(user => (
                <li key={user.id} className="user__item border rounded pt-2 pb-2 ps-2 border-info mb-2">
                    <p className="user__name text-primary mb-2">{user.title}</p>
                    <p className="user__username mb-1 text-success">{user.body}</p>
                    <NavLink to={"/comments/" + user.id }>Comments</NavLink>
                </li>
                ))}  
            </ul>
    </div>
}

export default Posts;