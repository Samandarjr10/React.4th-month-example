import React from "react";

import { NavLink } from "react-router-dom";
import {useParams} from "react-router-dom"

function Users() {
    const [users, setUsers] = React.useState([]);
    const {id} = useParams()

    React.useEffect(() => { 
            fetch( 'https://jsonplaceholder.typicode.com/users' )
                .then( response => response.json())
                .then( json => setUsers( json ));
    }, [id])

    return <div>
                <h2 className="text-warning fst-italic">Users</h2>
                <p className="text-danger">Count of users: {users.length}</p>
            <ul className="user__wrapper list-unstyled col">
                {
                users.length > 0 &&  users.map(user => (
                <li key={user.id} className="user__item border d-flex flex-column rounded pt-2 pb-2 ps-2 border-info mb-2">
                    <p className="user__name text-secondary fw-bold mb-2 text-decoration-underline">{user.name}</p>
                    <p className="user__username mb-1 text-primary">{user.username}</p>              
                    <a className="user__email mb-1 text-warning">{user.email}</a>
                    <p className="user__city mb-1 text-success">{user.address.city}</p>
                    <NavLink to={"posts/" + user.id}>Post</NavLink>
                </li>
                ))}  
            </ul>    
    </div>
}

export default Users;