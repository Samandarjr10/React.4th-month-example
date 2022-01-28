import React from "react";
import { useParams, useNavigate } from "react-router-dom"


function Comments() {
    const [users, setComments] = React.useState([]);

    const { id } = useParams()
    const navigateComment = useNavigate()

    React.useEffect(() => {
        fetch( `https://jsonplaceholder.typicode.com/posts/${id}/comments` )
        .then( response => response.json())
        .then( json => setComments( json ));
    }, [id])

    return <div>
            <button className="btn btn-outline-danger" onClick={() => navigateComment(-1)}>Orqaga</button>
                <h2 className="text-warning fst-italic">Comments</h2>
                <p className="text-danger">Count of comments: {users.length}</p>
            <ul className="list-unstyled col">
                {
                users.length > 0 &&  users.map(user => (
                <li key={user.id} className="border rounded pt-2 pb-2 ps-2 border-info mb-2">
                    <p className="text-primary mb-2 text-decoration-underline">{user.name}</p>
                    <a href="#" className="mb-1 text-warning">{user.email}</a>
                    <p className="mb-1 text-success">{user.body}</p>
                </li>
                ))}  
            </ul>    
    </div>
}

export default Comments;