import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {

    const [users, setUsers]=useState([])

    useEffect(()=>{
        const chargeUsers=async()=>{
            const res = await axios("https://jsonplaceholder.typicode.com/users")
            console.log(res.data)
            setUsers(res.data)
        }
        chargeUsers()
    }, [])

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

export default Axios