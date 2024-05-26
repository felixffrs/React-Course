import React, {useContext} from 'react'
import { UserContext } from './Context/UserContext'

const UserList = () => {
    const {users} = useContext(UserContext)
    console.log(users)

    return (
        <>
            <ul>
                {users.map(user=>(
                    <li key={user.id}>
                        Name: {user.name} <br/>
                        Lastname: {user.username} <br/>
                        Email: {user.email} <br/>
                        Phone: {user.phone} <br/>
                    </li>
                ))}
            </ul>
        </>
    )
}

export default UserList